import x from 'better-xml-schema';
import { ProcedureSchema } from './Procedure';
import { ArrayTypeSchema } from './type/ArrayType';
import { BooleanTypeSchema } from './type/BooleanType';
import { EnumTypeSchema } from './type/EnumType';
import { NumberTypeSchema } from './type/NumberType';
import { StringTypeSchema } from './type/StringType';
import { StructTypeSchema } from './type/StructType';
import { UnionTypeSchema } from './type/UnionType';
import { XMLNS } from '../common/Common';

export const ServiceSchema = x.element({
  name: x.string(),
  xmlns: x.string().regex(XMLNS),
},{
  procedure: x.many(ProcedureSchema),
  boolean: x.many(BooleanTypeSchema),
  number: x.many(NumberTypeSchema),
  string: x.many(StringTypeSchema),
  struct: x.many(StructTypeSchema),
  union: x.many(UnionTypeSchema),
  array: x.many(ArrayTypeSchema),
  enum: x.many(EnumTypeSchema),
});

export type Service = x.infer<typeof ServiceSchema>;
