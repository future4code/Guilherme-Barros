"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Item = void 0;
class Item {
    constructor(id, pizzaId, status, order_id, quantity) {
        this.id = id;
        this.pizzaId = pizzaId;
        this.status = status;
        this.order_id = order_id;
        this.quantity = quantity;
    }
    getId() {
        return this.id;
    }
    getPizzaId() {
        return this.pizzaId;
    }
    getStatus() {
        return this.status;
    }
    getOrderId() {
        return this.order_id;
    }
    getQuantity() {
        return this.quantity;
    }
    setId(id) {
        this.id = id;
    }
    setPizzaId(pizzaId) {
        this.pizzaId = pizzaId;
    }
    setStatus(status) {
        this.status = status;
    }
    setOrderId(order_id) {
        this.order_id = order_id;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    static toItemModel(item) {
        return new Item(item.id, item.pizzaId, item.status, item.order_id, item.quantity);
    }
}
exports.Item = Item;
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
})(Status = exports.Status || (exports.Status = {}));
