export class Table{
    constructor(
        public name:string,
        public fields:TableField[]
    ){}
}
export class TableField{
    constructor(
        public name:string,
        public type:string
    ){}
}