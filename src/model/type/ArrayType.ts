import x from 'better-xml-schema';
import { PASCAL } from '../../common/Common';

export const ArrayTypeSchema = x.element({
  name: x.string().regex(PASCAL),
  min: x.optional(x.number()),
  max: x.optional(x.number()),
  length: x.optional(x.number()),
},{
  member: x.one(x.element({
    target: x.string(),
  },{})),
});

export type ArrayType = x.infer<typeof ArrayTypeSchema>;
