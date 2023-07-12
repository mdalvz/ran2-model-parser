import x from 'better-xml-schema';
import { ServiceSchema, Service } from '../model/Service';

function wrapper(prepend: string, fn: () => void) {
  try {
    fn();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${prepend}\n${error.message}`);
    }
    throw error;
  }
}

const RootSchema = x.element({},{
  service: x.one(ServiceSchema),
});

class VerifyContext {

  private readonly service: Service;

  private readonly typeNames: string[];

  private readonly typeNameSet: Set<string>;

  private readonly names: string[];

  public constructor(service: Service) {
    this.service = service;
    this.typeNames = [
      ...service.array.map((e) => e.$name),
      ...service.boolean.map((e) => e.$name),
      ...service.enum.map((e) => e.$name),
      ...service.number.map((e) => e.$name),
      ...service.string.map((e) => e.$name),
      ...service.struct.map((e) => e.$name),
      ...service.union.map((e) => e.$name),
    ];
    this.typeNameSet = new Set<string>(this.typeNames);
    this.names = [
      service.$name,
      ...this.typeNames,
      ...service.procedure.map((e) => e.$name),
    ];
  }

  public getService(): Service {
    return this.service;
  }

  public getTypeNames(): string[] {
    return this.typeNames;
  }

  public getNames(): string[] {
    return this.names;
  }

  public verifyHasTypeName(name: string) {
    if (!this.typeNameSet.has(name)) {
      throw new Error(`Type with name "${name}" does not exist`);
    }
  }

  public verifyNoDuplicateNames(names: string[]) {
    const set = new Set<string>();
    const check = (name: string) => {
      if (set.has(name)) {
        throw new Error(`Duplicate names "${name}"`);
      }
      set.add(name);
    };
    names.forEach((e) => check(e));
  }

}

export class Parser {

  public static readonly instance = new Parser();

  public async parse(path: string): Promise<Service> {
    const result = (await x.parseFile(RootSchema, path)).service;
    this.verify(result);
    return result;
  }

  private verify(service: Service) {
    const context = new VerifyContext(service);
    this.verifyService(context);
  }

  private verifyService(context: VerifyContext) {
    wrapper(`In <service> "${context.getService().$name}":`, () => {
      context.verifyNoDuplicateNames(context.getNames());
      context.verifyNoDuplicateNames(context.getTypeNames());
      this.verifyArrays(context);
      this.verifyEnums(context);
      this.verifyStrings(context);
      this.verifyStructs(context);
      this.verifyUnions(context);
      this.verifyProcedures(context);
    });
  }

  private verifyArrays(context: VerifyContext) {
    context.getService().array.forEach((e) => {
      wrapper(`In <array> "${e.$name}":`, () => {
        context.verifyHasTypeName(e.member.$target);
      });
    });
  }

  private verifyEnums(context: VerifyContext) {
    context.getService().enum.forEach((e) => {
      wrapper(`In <enum> "${e.$name}":`, () => {
        context.verifyNoDuplicateNames(e.member.map((e) => e.$name));
      });
    });
  }

  private verifyStrings(context: VerifyContext) {
    context.getService().string.forEach((e) => {
      wrapper(`In <string> "${e.$name}":`, () => {
        if (e.$regex !== undefined) {
          new RegExp(e.$regex);
        }
      });
    });
  }

  private verifyStructs(context: VerifyContext) {
    context.getService().struct.forEach((e) => {
      wrapper(`In <struct> "${e.$name}":`, () => {
        context.verifyNoDuplicateNames(e.member.map((e) => e.$name));
        e.member.forEach((e) => {
          context.verifyHasTypeName(e.$target);
        });
      });
    });
  }

  private verifyUnions(context: VerifyContext) {
    context.getService().union.forEach((e) => {
      wrapper(`In <union> "${e.$name}":`, () => {
        context.verifyNoDuplicateNames(e.member.map((e) => e.$name));
        e.member.forEach((e) => {
          context.verifyHasTypeName(e.$target);
        });
      });
    });
  }

  private verifyProcedures(context: VerifyContext) {
    context.getService().procedure.forEach((e) => {
      wrapper(`In <procedure> "${e.$name}":`, () => {
        context.verifyNoDuplicateNames(e.error.map((e) => e.$name));
        e.error.forEach((e) => {
          context.verifyHasTypeName(e.$target);
        });
        context.verifyHasTypeName(e.request.$target);
        context.verifyHasTypeName(e.response.$target);
      });
    });
  }

}
