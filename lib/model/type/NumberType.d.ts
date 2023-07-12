import x from 'better-xml-schema';
export declare const NumberTypeSchema: import("better-xml-schema/lib/element/Element").Element<{
    name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
    min: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
    max: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, number>;
    integer: import("better-xml-schema/lib/converter/OptionalConverter").OptionalConverter<string | undefined, boolean>;
}, {}>;
export type NumberType = x.infer<typeof NumberTypeSchema>;
