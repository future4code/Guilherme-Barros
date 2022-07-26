"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaRouter = void 0;
const express_1 = __importDefault(require("express"));
const PizzaController_1 = require("../controller/PizzaController");
exports.pizzaRouter = express_1.default.Router();
const pizzaController = new PizzaController_1.PizzaController();
exports.pizzaRouter.get('/all', pizzaController.getAll);
exports.pizzaRouter.get('/:id', pizzaController.getById);
exports.pizzaRouter.post('/create', pizzaController.create);
