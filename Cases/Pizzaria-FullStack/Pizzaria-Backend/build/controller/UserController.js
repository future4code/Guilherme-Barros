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
exports.UserController = void 0;
const UserBussiness_1 = require("../business/User/UserBussiness");
const UserDatabase_1 = require("../data/User/UserDatabase");
const Authenticator_1 = require("../services/Authenticator");
const IdGenerator_1 = require("../services/IdGenerator");
const HashManager_1 = require("../services/HashManager");
const userDatabase = new UserDatabase_1.UserDatabase();
const authenticator = new Authenticator_1.Authenticator();
const idGenerator = new IdGenerator_1.IdGenerator();
const hashManager = new HashManager_1.HashManager();
class UserController {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                };
                const userBusiness = new UserBussiness_1.UserBusiness(userDatabase, authenticator, idGenerator, hashManager);
                const token = yield userBusiness.signup(input);
                res.status(200).send({ token });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    email: req.body.email,
                    password: req.body.password
                };
                const userBusiness = new UserBussiness_1.UserBusiness(userDatabase, authenticator, idGenerator, hashManager);
                const token = yield userBusiness.login(input);
                res.status(200).send({ token });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.UserController = UserController;
