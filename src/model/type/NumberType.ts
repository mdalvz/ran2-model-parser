import x from 'better-xml-schema';
import { PASCAL } from '../../common/Common';

export const NumberTypeSchema = x.element({
  name: x.string().regex(PASCAL),
  min: x.optional(x.number()),
  max: x.optional(x.number()),
  integer: x.optional(x.boolean()),
},{});

export type NumberType = x.infer<typeof NumberTypeSchema>;
