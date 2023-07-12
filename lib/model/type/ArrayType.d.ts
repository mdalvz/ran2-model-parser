import x from 'better-xml-schema';
export declare const ArrayTypeSchema: import("better-xml-schema/lib/element/Element").Element<{
    name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    min: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
    max: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
    length: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
}, {
    member: import("better-xml-schema/lib/converter/SingletonArrayConverter").SingletonArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {}>>;
}>;
export type ArrayType = x.infer<typeof ArrayTypeSchema>;
