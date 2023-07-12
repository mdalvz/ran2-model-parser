import x from 'better-xml-schema';
import { PASCAL } from '../../common/Common';

export const StringTypeSchema = x.element({
  name: x.string().regex(PASCAL),
  min: x.optional(x.number()),
  max: x.optional(x.number()),
  length: x.optional(x.number()),
  regex: x.optional(x.string()),
},{});

export type StringType = x.infer<typeof StringTypeSchema>;
