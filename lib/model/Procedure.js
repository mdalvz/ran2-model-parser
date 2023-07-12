"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcedureSchema = void 0;
const better_xml_schema_1 = require("better-xml-schema");
exports.ProcedureSchema = better_xml_schema_1.default.element({
    name: better_xml_schema_1.default.string(),
}, {
    request: better_xml_schema_1.default.one(better_xml_schema_1.default.element({
        target: better_xml_schema_1.default.string(),
    }, {})),
    response: better_xml_schema_1.default.one(better_xml_schema_1.default.element({
        target: better_xml_schema_1.default.string(),
    }, {})),
    error: better_xml_schema_1.default.many(better_xml_schema_1.default.element({
        name: better_xml_schema_1.default.string(),
        target: better_xml_schema_1.default.string(),
    }, {})),
});
