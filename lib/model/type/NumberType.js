"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberTypeSchema = void 0;
const better_xml_schema_1 = require("better-xml-schema");
const Common_1 = require("../../common/Common");
exports.NumberTypeSchema = better_xml_schema_1.default.element({
    name: better_xml_schema_1.default.string().regex(Common_1.PASCAL),
    min: better_xml_schema_1.default.optional(better_xml_schema_1.default.number()),
    max: better_xml_schema_1.default.optional(better_xml_schema_1.default.number()),
    integer: better_xml_schema_1.default.optional(better_xml_schema_1.default.boolean()),
}, {});
