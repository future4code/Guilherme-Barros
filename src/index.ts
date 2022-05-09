import { app } from "./app";
import { createProducts } from "./endpoints/createProduct";
import { createPurchase } from "./endpoints/createPurchase";
import { createUser } from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPurchasesOfUser } from "./endpoints/getPurchasesOfUser";

app.post("/users",createUser)

app.get("/users",getAllUsers)

app.post("/products",createProducts)

app.get("/products",getAllProducts)

app.post("/purchases",createPurchase)

app.get("/users/:userId/purchases",getPurchasesOfUser)