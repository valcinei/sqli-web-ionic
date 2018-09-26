import { SQLiteDatabaseConfig } from "../interfaces/ISqlite.interface";
import { SQLiteObject } from "./SqliteObject.class";

export declare class SQLite  {
    /**
     * Open or create a SQLite database file.
     *
     * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     *
     * @param config {SQLiteDatabaseConfig} database configuration
     * @return Promise<SQLiteObject>
     */
    create(config: SQLiteDatabaseConfig): Promise<SQLiteObject>;
    /**
     * Verify that both the Javascript and native part of this plugin are installed in your application
     * @returns {Promise<any>}
     */
    echoTest(): Promise<any>;
    /**
     * Automatically verify basic database access operations including opening a database
     * @returns {Promise<any>}
     */
    selfTest(): Promise<any>;
    /**
     * Deletes a database
     * @param config {SQLiteDatabaseConfig} database configuration
     * @returns {Promise<any>}
     */
    deleteDatabase(config: SQLiteDatabaseConfig): Promise<any>;
}
