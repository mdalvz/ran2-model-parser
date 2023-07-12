import x from 'better-xml-schema';
import { PASCAL, CAMEL } from '../../common/Common';

export const UnionTypeSchema = x.element({
  name: x.string().regex(PASCAL),
},{
  member: x.many(x.element({
    name: x.string().regex(CAMEL),
    target: x.string(),
  },{})),
});

export type UnionType = x.infer<typeof UnionTypeSchema>;
