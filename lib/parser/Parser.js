"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const better_xml_schema_1 = require("better-xml-schema");
const Service_1 = require("../model/Service");
function wrapper(prepend, fn) {
    try {
        fn();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`${prepend}\n${error.message}`);
        }
        throw error;
    }
}
const RootSchema = better_xml_schema_1.default.element({}, {
    service: better_xml_schema_1.default.one(Service_1.ServiceSchema),
});
class VerifyContext {
    constructor(service) {
        this.service = service;
        this.typeNames = [
            ...service.array.map((e) => e.$name),
            ...service.boolean.map((e) => e.$name),
            ...service.enum.map((e) => e.$name),
            ...service.number.map((e) => e.$name),
            ...service.string.map((e) => e.$name),
            ...service.struct.map((e) => e.$name),
            ...service.union.map((e) => e.$name),
        ];
        this.typeNameSet = new Set(this.typeNames);
        this.names = [
            service.$name,
            ...this.typeNames,
            ...service.procedure.map((e) => e.$name),
        ];
    }
    getService() {
        return this.service;
    }
    getTypeNames() {
        return this.typeNames;
    }
    getNames() {
        return this.names;
    }
    verifyHasTypeName(name) {
        if (!this.typeNameSet.has(name)) {
            throw new Error(`Type with name "${name}" does not exist`);
        }
    }
    verifyNoDuplicateNames(names) {
        const set = new Set();
        const check = (name) => {
            if (set.has(name)) {
                throw new Error(`Duplicate names "${name}"`);
            }
            set.add(name);
        };
        names.forEach((e) => check(e));
    }
}
class Parser {
    parse(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield better_xml_schema_1.default.parseFile(RootSchema, path)).service;
            this.verify(result);
            return result;
        });
    }
    verify(service) {
        const context = new VerifyContext(service);
        this.verifyService(context);
    }
    verifyService(context) {
        wrapper(`In <service> "${context.getService().$name}":`, () => {
            context.verifyNoDuplicateNames(context.getNames());
            context.verifyNoDuplicateNames(context.getTypeNames());
            this.verifyArrays(context);
            this.verifyEnums(context);
            this.verifyStrings(context);
            this.verifyStructs(context);
            this.verifyUnions(context);
            this.verifyProcedures(context);
        });
    }
    verifyArrays(context) {
        context.getService().array.forEach((e) => {
            wrapper(`In <array> "${e.$name}":`, () => {
                context.verifyHasTypeName(e.member.$target);
            });
        });
    }
    verifyEnums(context) {
        context.getService().enum.forEach((e) => {
            wrapper(`In <enum> "${e.$name}":`, () => {
                context.verifyNoDuplicateNames(e.member.map((e) => e.$name));
            });
        });
    }
    verifyStrings(context) {
        context.getService().string.forEach((e) => {
            wrapper(`In <string> "${e.$name}":`, () => {
                if (e.$regex !== undefined) {
                    new RegExp(e.$regex);
                }
            });
        });
    }
    verifyStructs(context) {
        context.getService().struct.forEach((e) => {
            wrapper(`In <struct> "${e.$name}":`, () => {
                context.verifyNoDuplicateNames(e.member.map((e) => e.$name));
                e.member.forEach((e) => {
                    context.verifyHasTypeName(e.$target);
                });
            });
        });
    }
    verifyUnions(context) {
        context.getService().union.forEach((e) => {
            wrapper(`In <union> "${e.$name}":`, () => {
                context.verifyNoDuplicateNames(e.member.map((e) => e.$name));
                e.member.forEach((e) => {
                    context.verifyHasTypeName(e.$target);
                });
            });
        });
    }
    verifyProcedures(context) {
        context.getService().procedure.forEach((e) => {
            wrapper(`In <procedure> "${e.$name}":`, () => {
                context.verifyNoDuplicateNames(e.error.map((e) => e.$name));
                e.error.forEach((e) => {
                    context.verifyHasTypeName(e.$target);
                });
                context.verifyHasTypeName(e.request.$target);
                context.verifyHasTypeName(e.response.$target);
            });
        });
    }
}
exports.Parser = Parser;
Parser.instance = new Parser();
