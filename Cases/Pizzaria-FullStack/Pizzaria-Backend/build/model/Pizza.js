"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    constructor(id, name, price, img_url, ingredients) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img_url = img_url;
        this.ingredients = ingredients;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getImgUrl() {
        return this.img_url;
    }
    getIngredients() {
        return this.ingredients;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    setImgUrl(img_url) {
        this.img_url = img_url;
    }
    setIngredients(ingredients) {
        this.ingredients = ingredients;
    }
    static toPizzaModel(pizza) {
        return new Pizza(pizza.id, pizza.name, pizza.price, pizza.img_url, pizza.ingredients);
    }
}
exports.Pizza = Pizza;
