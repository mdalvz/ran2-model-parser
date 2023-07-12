"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanTypeSchema = void 0;
const better_xml_schema_1 = require("better-xml-schema");
const Common_1 = require("../../common/Common");
exports.BooleanTypeSchema = better_xml_schema_1.default.element({
    name: better_xml_schema_1.default.string().regex(Common_1.PASCAL),
}, {});
