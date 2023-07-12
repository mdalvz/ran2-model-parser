"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSchema = void 0;
const better_xml_schema_1 = require("better-xml-schema");
const Procedure_1 = require("./Procedure");
const ArrayType_1 = require("./type/ArrayType");
const BooleanType_1 = require("./type/BooleanType");
const EnumType_1 = require("./type/EnumType");
const NumberType_1 = require("./type/NumberType");
const StringType_1 = require("./type/StringType");
const StructType_1 = require("./type/StructType");
const UnionType_1 = require("./type/UnionType");
const Common_1 = require("../common/Common");
exports.ServiceSchema = better_xml_schema_1.default.element({
    name: better_xml_schema_1.default.string(),
    xmlns: better_xml_schema_1.default.string().regex(Common_1.XMLNS),
}, {
    procedure: better_xml_schema_1.default.many(Procedure_1.ProcedureSchema),
    boolean: better_xml_schema_1.default.many(BooleanType_1.BooleanTypeSchema),
    number: better_xml_schema_1.default.many(NumberType_1.NumberTypeSchema),
    string: better_xml_schema_1.default.many(StringType_1.StringTypeSchema),
    struct: better_xml_schema_1.default.many(StructType_1.StructTypeSchema),
    union: better_xml_schema_1.default.many(UnionType_1.UnionTypeSchema),
    array: better_xml_schema_1.default.many(ArrayType_1.ArrayTypeSchema),
    enum: better_xml_schema_1.default.many(EnumType_1.EnumTypeSchema),
});
