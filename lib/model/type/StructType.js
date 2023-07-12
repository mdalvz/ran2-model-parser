"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructTypeSchema = void 0;
const better_xml_schema_1 = require("better-xml-schema");
const Common_1 = require("../../common/Common");
exports.StructTypeSchema = better_xml_schema_1.default.element({
    name: better_xml_schema_1.default.string().regex(Common_1.PASCAL),
}, {
    member: better_xml_schema_1.default.many(better_xml_schema_1.default.element({
        name: better_xml_schema_1.default.string().regex(Common_1.CAMEL),
        target: better_xml_schema_1.default.string(),
        optional: better_xml_schema_1.default.optional(better_xml_schema_1.default.boolean()),
    }, {})),
});
