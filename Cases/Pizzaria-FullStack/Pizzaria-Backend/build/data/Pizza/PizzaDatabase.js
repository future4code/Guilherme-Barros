"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDatabase = void 0;
const BaseDatabase_1 = require("../BaseDatabase");
class PizzaDatabase extends BaseDatabase_1.BaseDatabase {
    create(pizza) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id: pizza.id,
                    name: pizza.name,
                    price: pizza.price,
                    img_url: pizza.img_url,
                    ingredients: pizza.ingredients
                }).into(PizzaDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*")
                    .from(PizzaDatabase.TABLE_NAME)
                    .where({ name });
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*")
                    .from(PizzaDatabase.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*")
                    .from(PizzaDatabase.TABLE_NAME)
                    .where({ id });
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getPriceByOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .from(PizzaDatabase.TABLE_NAME)
                    .join('Item', "Pizza_Case.id", "=", 'Item.pizza_id')
                    .select('price');
                const { price } = result[0];
                return price;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.PizzaDatabase = PizzaDatabase;
PizzaDatabase.TABLE_NAME = 'Pizza_Case';
