"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./sqlite-web/db");
var Table_class_1 = require("./classes/Table.class");
var db;
db = new db_1.DB();
var table = new Table_class_1.Table("table_teste", [
    { name: 'name', type: 'text' },
    { name: 'last_name', type: 'text' }
]);
db.createDataBase("./dist/db", "testa");
db.createTable(table);
db.queryExecute("INSERT into table_teste(name,last_name) VALUES ('Valcinei','Silva')");
db.select();
//# sourceMappingURL=index.js.map