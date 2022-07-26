"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRouter = void 0;
const express_1 = __importDefault(require("express"));
const ItemController_1 = require("../controller/ItemController");
exports.itemRouter = express_1.default.Router();
const itemController = new ItemController_1.ItemController();
exports.itemRouter.post("/create", itemController.create);
exports.itemRouter.delete("/delete/:itemId", itemController.delete);
exports.itemRouter.get("/cart", itemController.getActives);
