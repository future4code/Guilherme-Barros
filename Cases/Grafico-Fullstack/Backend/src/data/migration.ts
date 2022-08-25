import { BaseDatabase } from "./BaseDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class CreateTables extends BaseDatabase{
   createTables = () => this.getConnection().raw(`
   CREATE TABLE  IF NOT EXISTS Participant(
	id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    participation FLOAT NOT NULL
);
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

   closeConnection = () => {this.getConnection().destroy() }

}
const migrations = new CreateTables()

migrations.createTables()
   .finally(migrations.closeConnection)
