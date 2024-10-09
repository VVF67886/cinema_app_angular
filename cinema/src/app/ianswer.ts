export interface IAnswer {
    exitCode?: any;
    feedback?: string;
    rows?: Array<Array<any>>;
    columnIndexes: any;
    [propName: string]: any;
}
