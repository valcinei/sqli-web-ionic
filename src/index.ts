import { DB } from "./sqlite-web/db";
import { Table } from "./classes/Table.class";
import { SQLiteObject } from "./classes/SqliteObject.class";

let db : DB;
db = new DB();
let table = new Table("table_teste",[
    {name:'name', type:'text'},
    {name:'last_name', type:'text'}
] ) 