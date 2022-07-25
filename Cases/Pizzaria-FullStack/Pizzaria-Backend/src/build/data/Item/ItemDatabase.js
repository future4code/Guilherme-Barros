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
exports.ItemDatabase = void 0;
const Item_1 = require("../../model/Item");
const BaseDatabase_1 = require("../BaseDatabase");
class ItemDatabase extends BaseDatabase_1.BaseDatabase {
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id: item.id,
                    pizza_id: item.pizzaId,
                    order_id: item.order_id,
                    status: item.status,
                    quantity: item.quantity
                }).into(ItemDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getQuantity(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("quantity")
                    .from(ItemDatabase.TABLE_NAME)
                    .where('Item.order_id', "=", `${orderId}`);
                const { quantity } = result[0];
                return quantity;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getPizzaIdByOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pizzaId = yield this.getConnection()
                    .select("pizza_id")
                    .from(ItemDatabase.TABLE_NAME)
                    .where("order_id", orderId);
                const { pizza_id } = pizzaId[0];
                return pizza_id;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    deleteItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .from(ItemDatabase.TABLE_NAME)
                    .where('id', itemId)
                    .del();
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select('*')
                    .from(ItemDatabase.TABLE_NAME)
                    .where('id', itemId);
                return Item_1.Item.toItemModel(result[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getActives() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .raw(`SELECT i.id,p.name,p.price,p.img_url,p.ingredients,i.quantity,i.order_id FROM Pizza_Case as p INNER JOIN Item i ON i.pizza_id=p.id WHERE i.status='ACTIVE'`);
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getOrderId() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select('order_id')
                    .from(ItemDatabase.TABLE_NAME)
                    .where("status", "ACTIVE");
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getIdActive() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select('Item.id')
                    .from(ItemDatabase.TABLE_NAME)
                    .where("status", 'INACTIVE');
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ItemDatabase = ItemDatabase;
ItemDatabase.TABLE_NAME = 'Item';
