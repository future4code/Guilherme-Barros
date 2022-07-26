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
exports.OrderController = void 0;
const OrderBusiness_1 = require("../business/Order/OrderBusiness");
const ItemDatabase_1 = require("../data/Item/ItemDatabase");
const OrderDatabase_1 = require("../data/Order/OrderDatabase");
const PizzaDatabase_1 = require("../data/Pizza/PizzaDatabase");
const Authenticator_1 = require("../services/Authenticator");
const IdGenerator_1 = require("../services/IdGenerator");
const pizzaDatabase = new PizzaDatabase_1.PizzaDatabase();
const orderDatabase = new OrderDatabase_1.OrderDatabase();
const itemDatabase = new ItemDatabase_1.ItemDatabase();
const authenticator = new Authenticator_1.Authenticator();
const idGenerator = new IdGenerator_1.IdGenerator();
class OrderController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const { orderId } = req.body;
                const input = {
                    orderId
                };
                const orderBusiness = new OrderBusiness_1.OrderBusiness(orderDatabase, pizzaDatabase, itemDatabase, authenticator);
                yield orderBusiness.create(input, auth);
                res.status(200).send("Compra efetuada!");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const id = req.params.id;
                const orderBusiness = new OrderBusiness_1.OrderBusiness(orderDatabase, pizzaDatabase, itemDatabase, authenticator);
                const result = yield orderBusiness.getById(id, auth);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const orderBusiness = new OrderBusiness_1.OrderBusiness(orderDatabase, pizzaDatabase, itemDatabase, authenticator);
                const result = yield orderBusiness.getAll(auth);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    getOrderDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const { id } = req.params;
                const orderBusiness = new OrderBusiness_1.OrderBusiness(orderDatabase, pizzaDatabase, itemDatabase, authenticator);
                const result = yield orderBusiness.getDetails(id, auth);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.OrderController = OrderController;
