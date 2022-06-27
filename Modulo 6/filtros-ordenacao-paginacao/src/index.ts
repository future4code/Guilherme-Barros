import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getFilteringUsers } from "./endpoints/getUsersFilteringAndOrders";
import { getUsersFiveByFive } from "./endpoints/getUsersFiveByFive";
import orderByNameorType, { getOrdenedUsers } from "./endpoints/orderByNameorType";

app.get("/users", getAllUsers)

app.get("/user",getUserByName)

app.get("/user/:type",getUserByType)

app.get("/ordenedusers",getOrdenedUsers)

app.get("/fiveusers",getUsersFiveByFive)

app.get("/users",getFilteringUsers)