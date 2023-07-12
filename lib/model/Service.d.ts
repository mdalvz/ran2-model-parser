import x from 'better-xml-schema';
export declare const ServiceSchema: import("better-xml-schema/lib/element/Element").Element<{
    name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    xmlns: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
}, {
    procedure: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
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
    }>>;
    boolean: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {}>>;
    number: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        min: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
        max: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
        integer: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, boolean>;
    }, {}>>;
    string: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        min: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
        max: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
        length: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
        regex: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, string>;
    }, {}>>;
    struct: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {
        member: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
            name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
            target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
            optional: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, boolean>;
        }, {}>>;
    }>>;
    union: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {
        member: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
            name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
            target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        }, {}>>;
    }>>;
    array: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        min: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
        max: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
        length: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
    }, {
        member: import("better-xml-schema/lib/converter/SingletonArrayConverter").SingletonArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
            target: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        }, {}>>;
    }>>;
    enum: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
        name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    }, {
        member: import("better-xml-schema/lib/converter/ArrayConverter").ArrayConverter<import("better-xml-schema/lib/xml/XmlElement").XmlElement, import("better-xml-schema/lib/element/Element").ElementOutput<{
            name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
        }, {}>>;
    }>>;
}>;
export type Service = x.infer<typeof ServiceSchema>;
