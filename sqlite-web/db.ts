import { Table, TableField } from './../lib/classes/Table.class';
import * as sqlite3 from 'sqlite3';
export class DB  {
     db = new sqlite3.Database('./lib/db/mydb.db3');  
 
    public createDataBase(path:string, dbName:string) {
        this.db = new sqlite3.Database(`${path}/${dbName}`)
    }

    public queryExecute(query:string) {
        try{
           return this.db.serialize(()=> this.db.run(query))
        }catch(e){
            console.error("Query error",e);
        }
    }


    public createTable(table: Table) {
        let fields = '';
        table.fields.forEach((el:TableField)=>{
            fields += `${el.name.toLocaleLowerCase()} ${el.type.toLocaleUpperCase()} ,`;
        })
        fields = fields.slice(0,-1);
        console.log(`CREATE TABLE IF NOT EXISTS ${table.name} (${fields})`);
        this.queryExecute(`CREATE TABLE IF NOT EXISTS ${table.name} (${fields})`);
    }
}

