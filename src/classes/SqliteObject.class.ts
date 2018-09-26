export interface DbTransaction {
    executeSql: (sql: any, values?: any[], success?: Function, error?: Function) => void;
}

export interface SQLiteTransaction extends DbTransaction {
    start: () => void;
    addStatement: DbTransaction['executeSql'];
    handleStatementSuccess: (handler: Function, response: any) => void;
    handleStatementFailure: (handler: Function, response: any) => void;
    run: () => void;
    abort: (txFailure: any) => void;
    finish: () => void;
    abortFromQ: (sqlerror: any) => void;
}


export declare class SQLiteObject {
    _objectInstance: any;
    constructor(_objectInstance: any);
    databaseFeatures: {
        isSQLitePluginDatabase: boolean;
    };
    openDBs: any;
    addTransaction(transaction: (tx: SQLiteTransaction) => void): void;
    /**
     * @param fn {Function}
     * @returns {Promise<any>}
     */
    transaction(fn: (tx: DbTransaction) => void): Promise<any>;
    /**
     * @param fn {Function}
     * @returns {Promise<any>}
     */
    readTransaction(fn: (tx: SQLiteTransaction) => void): Promise<any>;
    startNextTransaction(): void;
    /**
     * @returns {Promise<any>}
     */
    open(): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    close(): Promise<any>;
    /**
     * Execute SQL on the opened database. Note, you must call `create` first, and
     * ensure it resolved and successfully opened the database.
     */
    executeSql(statement: string, params?: any[]): Promise<any>;
    /**
     * @param sqlStatements {Array<string | string[] | any>}
     * @returns {Promise<any>}
     */
    sqlBatch(sqlStatements: (string | string[] | any)[]): Promise<any>;
    abortallPendingTransactions(): void;
}