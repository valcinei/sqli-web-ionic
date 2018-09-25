"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3 = __importStar(require("sqlite3"));
var DB = /** @class */ (function () {
    function DB() {
        this.db = new sqlite3.Database('./lib/db/mydb.db3');
    }
    DB.prototype.createDataBase = function (path, dbName) {
        this.db = new sqlite3.Database(path + "/" + dbName);
    };
    DB.prototype.queryExecute = function (query) {
        var _this = this;
        try {
            return this.db.serialize(function () { return _this.db.run(query); });
        }
        catch (e) {
            console.error("Query error", e);
        }
    };
    DB.prototype.createTable = function (table) {
        var fields = '';
        table.fields.forEach(function (el) {
            fields += el.name.toLocaleLowerCase() + " " + el.type.toLocaleUpperCase() + " ,";
        });
        fields = fields.slice(0, -1);
        console.log("CREATE TABLE IF NOT EXISTS " + table.name + " (" + fields + ")");
        this.queryExecute("CREATE TABLE IF NOT EXISTS " + table.name + " (" + fields + ")");
    };
    return DB;
}());
exports.DB = DB;
//# sourceMappingURL=db.js.map