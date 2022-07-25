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
exports.UserBusiness = void 0;
const CustomError_1 = require("../../error/CustomError");
class UserBusiness {
    constructor(userDatabase, authenticator, idGenerator, hashManager) {
        this.userDatabase = userDatabase;
        this.authenticator = authenticator;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
    }
    signup(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!input.name || !input.email || !input.password || !input.role) {
                    throw new CustomError_1.CustomError(400, 'Preencha os campos name, email e password e role');
                }
                if (input.name.length < 4) {
                    throw new CustomError_1.InvalidName();
                }
                if (!input.email.includes("@")) {
                    throw new CustomError_1.InvalidEmail();
                }
                if (input.password.length < 6) {
                    throw new CustomError_1.InvalidPassword();
                }
                const id = this.idGenerator.generate();
                const hashPassword = yield this.hashManager.hash(input.password);
                const user = {
                    id,
                    name: input.name,
                    email: input.email,
                    password: hashPassword,
                    role: input.role
                };
                this.userDatabase.signup(user);
                const accessToken = this.authenticator.generateToken({ id, role: input.role });
                return accessToken;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    login(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!input.email || !input.password) {
                    throw new CustomError_1.CustomError(400, 'Preencha todos os campos da requisição');
                }
                if (!input.email.includes("@")) {
                    throw new CustomError_1.InvalidEmail();
                }
                const userFromDB = yield this.userDatabase.getByEmail(input.email);
                if (!userFromDB) {
                    throw new CustomError_1.CustomError(404, "Usuário não encontrado");
                }
                const hashCompare = yield this.hashManager.compare(input.password, userFromDB.getPassword());
                if (!hashCompare) {
                    throw new CustomError_1.InvalidPassword();
                }
                const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });
                return accessToken;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
