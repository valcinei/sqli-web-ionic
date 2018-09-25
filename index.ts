import { DB } from './sqlite-web/db';
import { Table } from './sqlite-web/Table.class';

let db : DB;
db = new DB();
let table = new Table("table_teste",[
    {name:'name', type:'text'},
    {name:'last_name', type:'text'}
] ) 
db.createDataBase("./lib/db","testa");
db.createTable(table);
db.queryExecute("INSERT into table_teste(name,last_name) VALUES ('Valcinei','Silva')");
db.select();




