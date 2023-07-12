import x from 'better-xml-schema';
export declare const StructTypeSchema: import("better-xml-schema/lib/element/Element").Element<{
    name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
}, {
    member: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        optional: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, boolean>;
    }, {}>>;
}>;
export type StructType = x.infer<typeof StructTypeSchema>;
