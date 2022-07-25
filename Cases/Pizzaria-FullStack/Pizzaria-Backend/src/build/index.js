"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const itemRouter_1 = require("./routes/itemRouter");
const orderRouter_1 = require("./routes/orderRouter");
const pizzaRouter_1 = require("./routes/pizzaRouter");
const userRouter_1 = require("./routes/userRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/item", itemRouter_1.itemRouter);
app.use("/user", userRouter_1.userRouter);
app.use('/pizza', pizzaRouter_1.pizzaRouter);
app.use('/order', orderRouter_1.orderRoute);
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    }
    else {
        console.error(`Falha ao rodar o servidor.`);
    }
});
