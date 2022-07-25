"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoute = void 0;
const express_1 = __importDefault(require("express"));
const OrderController_1 = require("../controller/OrderController");
exports.orderRoute = express_1.default.Router();
const orderController = new OrderController_1.OrderController();
exports.orderRoute.get('/all', orderController.getAll);
exports.orderRoute.get('/:id', orderController.getById);
exports.orderRoute.get('/details/:id', orderController.getOrderDetails);
exports.orderRoute.post("/create", orderController.create);
