import x from 'better-xml-schema';
import { PASCAL } from '../../common/Common';

export const BooleanTypeSchema = x.element({
  name: x.string().regex(PASCAL),
},{});

export type BooleanType = x.infer<typeof BooleanTypeSchema>;
