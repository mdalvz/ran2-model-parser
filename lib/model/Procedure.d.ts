import x from 'better-xml-schema';
export declare const ProcedureSchema: import("better-xml-schema/lib/element/Element").Element<{
    name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
}, {
    request: import("better-xml-schema/lib/converter/SingletonArrayConverter").SingletonArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {}>>;
    response: import("better-xml-schema/lib/converter/SingletonArrayConverter").SingletonArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {}>>;
    error: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {}>>;
}>;
export type Procedure = x.infer<typeof ProcedureSchema>;
