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
exports.ItemController = void 0;
const ItemBusiness_1 = require("./../business/Item/ItemBusiness");
const PizzaDatabase_1 = require("../data/Pizza/PizzaDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
const ItemDatabase_1 = require("../data/Item/ItemDatabase");
const pizzaDatabase = new PizzaDatabase_1.PizzaDatabase();
const itemDatabase = new ItemDatabase_1.ItemDatabase();
const idGenerator = new IdGenerator_1.IdGenerator();
class ItemController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const { pizzaId, quantity } = req.body;
                const input = {
                    pizzaId,
                    quantity
                };
                const itemBusiness = new ItemBusiness_1.ItemBusiness(pizzaDatabase, itemDatabase, idGenerator);
                yield itemBusiness.create(input, auth);
                res.status(200).send("Item criado!");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const { itemId } = req.params;
                const itemBusiness = new ItemBusiness_1.ItemBusiness(pizzaDatabase, itemDatabase, idGenerator);
                yield itemBusiness.deleteItem(itemId, auth);
                res.status(200).send("Item deletado com sucesso!");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    getActives(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const itemBusiness = new ItemBusiness_1.ItemBusiness(pizzaDatabase, itemDatabase, idGenerator);
                const result = yield itemBusiness.getActives(auth);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.ItemController = ItemController;
