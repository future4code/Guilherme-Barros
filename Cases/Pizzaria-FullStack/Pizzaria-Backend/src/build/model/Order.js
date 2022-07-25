"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, userId, total, createdAt) {
        this.id = id;
        this.userId = userId;
        this.total = total;
        this.createdAt = createdAt;
    }
    getId() {
        return this.id;
    }
    getUserId() {
        return this.userId;
    }
    getTotal() {
        return this.total;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    setId(id) {
        this.id = id;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    setTotal(total) {
        this.total = total;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
    static toOrderModel(order) {
        return new Order(order.id, order.userId, order.total, order.createdAt);
    }
}
exports.Order = Order;
