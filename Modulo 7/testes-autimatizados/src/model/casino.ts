export enum LOCATION {
	EUA = "EUA",
	BRAZIL = "BRAZIL",
      }
      
      export    enum NATIONALITY {
	BRAZILIAN = "BRAZILIAN",
	AMERICAN = "AMERICAN",
      }
      
    export  interface User {
	name: string;
	age: number;
	nacionality: NATIONALITY;
      }
      
   export   interface Casino {
	name: string;
	location: LOCATION;
      }
   export   interface Result {
	brazilians: ResultItem;
	americans: ResultItem;
      }
      
   export   interface ResultItem {
	allowed: string[];
	unallowed: string[];
      }