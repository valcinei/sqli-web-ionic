import * as fs from 'fs';
import { Table } from '../classes/Table.class';
export class DB  {
    public db: any;
    
    constructor(){ 
    this.connectDB("teste","1.0","asdadsa",2*1024*1024);  
    }
    public connectDB(name:string, version:string,info:string,size:number) {
        
        // @ts-ignore: Unreachable code error
        this.db = openDatabase(name,version,info,size);
    }
   
}

