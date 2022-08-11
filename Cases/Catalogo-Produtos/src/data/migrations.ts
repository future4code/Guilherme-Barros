import { BaseDatabase } from "./BaseDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class CreateTables extends BaseDatabase{
   createTables = () => this.getConnection().raw(`
   CREATE TABLE  IF NOT EXISTS User_Catalog(
	id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(10) not null
);
CREATE TABLE IF NOT EXISTS Product_Catalog(
	id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS Tag_Product(
	id VARCHAR(255) PRIMARY KEY NOT NULL,
	productId VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY(productId) REFERENCES Product_Catalog(id)
);

   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

   closeConnection = () => {this.getConnection().destroy() }

}
const migrations = new CreateTables()

migrations.createTables()
   .finally(migrations.closeConnection)
