//1 a) O construtor serve para inicializar variáveis que são os atributos da Classe
//b) 1 vez
//c) Conseguimos tem acesso através dos métodos públicos get
class UserAccount {
	private cpf: string;
	private name: string;
	private age: number;
	private balance: number = 0;
	private transactions: Transaction[] = [];
      
	constructor(
	   cpf: string,
	   name: string,
	   age: number,
	) {
	   console.log("Chamando o construtor da classe UserAccount")
	   this.cpf = cpf;
	   this.name = name;
	   this.age = age;
	}
      
	
	public getCpf() : string {
		return this.cpf
	}

	
	public getName() : string {
		return this.name
	}
	
	
	public getAge() : number {
		return this.age 
	}

	
	public getBalance() : number {
		return this.balance
	}
	
	
	public getTransactions() : Transaction[] {
		return this.transactions
	}
	
      }
const user1=new UserAccount("00000000000","José",70)

console.log(user1);

//3
class Bank {
	private accounts:UserAccount[];
	constructor(accounts:UserAccount[]) {
		this.accounts=accounts
	}

	
	public getAccounts() : UserAccount[] {
		return this.accounts
	}
	
	
	public setAccounts(account : UserAccount[]) {
		this.accounts = account;
	}
	
}