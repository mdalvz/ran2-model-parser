import x from 'better-xml-schema';
export declare const BooleanTypeSchema: import("better-xml-schema/lib/element/Element").Element<{
    name: import("better-xml-schema/lib/attribute/StringAttribute").StringAttribute;
}, {}>;
export type BooleanType = x.infer<typeof BooleanTypeSchema>;
