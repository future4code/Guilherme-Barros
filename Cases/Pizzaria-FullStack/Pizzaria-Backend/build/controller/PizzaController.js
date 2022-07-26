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
exports.PizzaController = void 0;
const PizzaBusiness_1 = require("../business/Pizza/PizzaBusiness");
const PizzaDatabase_1 = require("../data/Pizza/PizzaDatabase");
const UserDatabase_1 = require("../data/User/UserDatabase");
const Authenticator_1 = require("../services/Authenticator");
const IdGenerator_1 = require("../services/IdGenerator");
const pizzaDatabase = new PizzaDatabase_1.PizzaDatabase();
const userDatabase = new UserDatabase_1.UserDatabase();
const authenticator = new Authenticator_1.Authenticator();
const idGenerator = new IdGenerator_1.IdGenerator();
class PizzaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const { name, price, img_url, ingredients } = req.body;
                const input = {
                    name,
                    price,
                    img_url,
                    ingredients
                };
                const pizzaBusiness = new PizzaBusiness_1.PizzaBusiness(pizzaDatabase, userDatabase, authenticator, idGenerator);
                yield pizzaBusiness.create(input, auth);
                res.status(200).send("Pizza criada!");
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
                const pizzaBusiness = new PizzaBusiness_1.PizzaBusiness(pizzaDatabase, userDatabase, authenticator, idGenerator);
                const result = yield pizzaBusiness.getAll(auth);
                res.status(200).send(result);
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
                const pizzaBusiness = new PizzaBusiness_1.PizzaBusiness(pizzaDatabase, userDatabase, authenticator, idGenerator);
                const result = yield pizzaBusiness.getById(id, auth);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.PizzaController = PizzaController;
