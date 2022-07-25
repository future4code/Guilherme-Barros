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
exports.OrderDatabase = void 0;
const BaseDatabase_1 = require("../BaseDatabase");
class OrderDatabase extends BaseDatabase_1.BaseDatabase {
    create(order, itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id: order.id,
                    user_id: order.userId,
                    total: order.total,
                    createdAt: order.createdAt,
                }).into(OrderDatabase.TABLE_NAME);
                yield this.getConnection()
                    .from('Item')
                    .where('id', itemId)
                    .update({ status: 'INACTIVE' });
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
                    .raw(`SELECT o.total, o.createdAt, u.name, p.img_url,p.price,i.quantity 
			FROM Order_CASE_PIZZA o INNER JOIN User_CASE_PIZZA u ON o.user_id=u.id 
			INNER JOIN Item i ON i.order_id=o.id 
			INNER JOIN Pizza_Case p ON i.pizza_id = p.id
			`);
                return result[0];
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
                    .select('*')
                    .from(OrderDatabase.TABLE_NAME)
                    .where({ id });
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getItemIdByOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select('id')
                    .from("Item")
                    .where("Item.order_id", `${orderId}`);
                const { id } = result[0];
                return id;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .raw(`SELECT o.total,o.createdAt,i.quantity,u.name,p.price,p.img_url,p.ingredients 
		FROM Order_CASE_PIZZA o INNER JOIN Item i on o.id=i.order_id 
		INNER JOIN Pizza_Case p ON p.id=i.pizza_id 
		INNER JOIN User_CASE_PIZZA u ON u.id=o.user_id
		WHERE o.id='${id}';
		`);
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.OrderDatabase = OrderDatabase;
OrderDatabase.TABLE_NAME = 'Order_CASE_PIZZA';
