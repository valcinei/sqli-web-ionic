
import * as sqlite3 from 'sqlite3';
import * as fs from 'fs';
import { Table, TableField } from './Table.class';
export class DB  {
     db :sqlite3.Database;  
     constructor(){
       this.db = new sqlite3.Database('./lib/db/mydb.db3');  
     }
 
    public createDataBase(path:string, dbName:string) {
        console.log(`${path}/${dbName}`);
        if(!(fs.existsSync(path))){
            fs.mkdirSync(path);
        }
        try{
            this.db = new sqlite3.Database(`${path}/${dbName}.db3`)
        }catch(e){
            console.error("Error to create db",e);
        }
    }

    public queryExecute(query:string) {
        try{
           return this.db.serialize(()=> this.db.run(query))
        }catch(e){
            console.error("Query error",e);
        }
    }

    public select() {

    
        this.db.serialize(() => {
            this.db.each(`SELECT * FROM table_teste`, (err, row) => {
              if (err) {
                console.error(err.message);
              }
              console.log(row.name + "\t" + row.last_name);
            });
          });


    }


    public createTable(table: Table) {
        let fields = '';
        table.fields.forEach((el:TableField)=>{
            fields += `${el.name.toLocaleLowerCase()} ${el.type.toLocaleUpperCase()} ,`;
        })
        fields = fields.slice(0,-1);
        this.queryExecute(`CREATE TABLE IF NOT EXISTS ${table.name} (${fields})`);
    }
}

