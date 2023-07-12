import x from 'better-xml-schema';
export declare const UnionTypeSchema: import("better-xml-schema/lib/element/Element").Element<{
    name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
}, {
    member: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {}>>;
}>;
export type UnionType = x.infer<typeof UnionTypeSchema>;
