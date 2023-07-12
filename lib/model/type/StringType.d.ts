import x from 'better-xml-schema';
export declare const StringTypeSchema: import("better-xml-schema/lib/element/Element").Element<{
    name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    min: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
    max: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
    length: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
    regex: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, string>;
}, {}>;
export type StringType = x.infer<typeof StringTypeSchema>;
