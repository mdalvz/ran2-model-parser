import x from 'better-xml-schema';
import { PASCAL } from '../../common/Common';

export const EnumTypeSchema = x.element({
  name: x.string().regex(PASCAL),
},{
  member: x.many(x.element({
    name: x.string().regex(PASCAL),
  },{})),
});

export type EnumType = x.infer<typeof EnumTypeSchema>;
