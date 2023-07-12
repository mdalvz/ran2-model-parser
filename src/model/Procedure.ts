import x from 'better-xml-schema';

export const ProcedureSchema = x.element({
  name: x.string(),
},{
  request: x.one(x.element({
    target: x.string(),
  },{})),
  response: x.one(x.element({
    target: x.string(),
  },{})),
  error: x.many(x.element({
    name: x.string(),
    target: x.string(),
  },{})),
});

export type Procedure = x.infer<typeof ProcedureSchema>;
