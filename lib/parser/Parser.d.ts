import { Service } from '../model/Service';
export declare class Parser {
    static readonly instance: Parser;
    parse(path: string): Promise<Service>;
    private verify;
    private verifyService;
    private verifyArrays;
    private verifyEnums;
    private verifyStrings;
    private verifyStructs;
    private verifyUnions;
    private verifyProcedures;
}
