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
var fs = __importStar(require("fs"));
var DB = /** @class */ (function () {
    function DB() {
        this.db = new sqlite3.Database('./dist/db/mydb.db3');
    }
    DB.prototype.createDataBase = function (path, dbName) {
        console.log(path + "/" + dbName);
        if (!(fs.existsSync(path))) {
            fs.mkdirSync(path);
        }
        try {
            this.db = new sqlite3.Database(path + "/" + dbName + ".db3");
        }
        catch (e) {
            console.error("Error to create db", e);
        }
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
    DB.prototype.select = function () {
        var _this = this;
        this.db.serialize(function () {
            _this.db.each("SELECT * FROM table_teste", function (err, row) {
                if (err) {
                    console.error(err.message);
                }
                console.log(row.name + "\t" + row.last_name);
            });
        });
    };
    DB.prototype.createTable = function (table) {
        var fields = '';
        table.fields.forEach(function (el) {
            fields += el.name.toLocaleLowerCase() + " " + el.type.toLocaleUpperCase() + " ,";
        });
        fields = fields.slice(0, -1);
        this.queryExecute("CREATE TABLE IF NOT EXISTS " + table.name + " (" + fields + ")");
    };
    return DB;
}());
exports.DB = DB;
//# sourceMappingURL=db.js.map