import x from 'better-xml-schema';
import { PASCAL, CAMEL } from '../../common/Common';

export const StructTypeSchema = x.element({
  name: x.string().regex(PASCAL),
},{
  member: x.many(x.element({
    name: x.string().regex(CAMEL),
    target: x.string(),
    optional: x.optional(x.boolean()),
  },{})),
});

export type StructType = x.infer<typeof StructTypeSchema>;
