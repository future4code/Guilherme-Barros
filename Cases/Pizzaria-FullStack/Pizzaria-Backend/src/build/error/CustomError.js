"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFound = exports.InvalidPassword = exports.InvalidName = exports.InvalidEmail = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
exports.CustomError = CustomError;
class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Email Inválido");
    }
}
exports.InvalidEmail = InvalidEmail;
class InvalidName extends CustomError {
    constructor() {
        super(400, "Nome inválido");
    }
}
exports.InvalidName = InvalidName;
class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Senha inválida");
    }
}
exports.InvalidPassword = InvalidPassword;
class UserNotFound extends CustomError {
    constructor() {
        super(404, "Usuário não encontrado");
    }
}
exports.UserNotFound = UserNotFound;
