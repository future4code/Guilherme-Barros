import { ClientRequest } from "http";

class User {
	private id: string;
	private email: string;
	private name: string;
	private password: string;
      
	constructor(
		      id: string,
		      email: string,
		      name: string,
		      password: string
	      ){
		      console.log("Chamando o construtor da classe User")
		      this.id = id
		      this.email = email
		      this.name = name 
		      this.password = password
	      }
      
	      public getId(): string {
		      return this.id
	      }
      
	      public getEmail(): string {
		      return this.email
	      }
      
	      public getName(): string {
		      return this.name
	      }

	      public intoduceYourself(name:string) {
		console.log(`Olá, sou ${name}. Bom dia!`);
		      
	      }
      }
     //const user1=new User("001","guilherme@gmail.com","Guilherme","guilherme123") 
    // console.log(user1);
     
//a) Não, pois a senha está privada e não há um getPassword para ser possível lê-la
//b) Uma vez

//2
class Customer extends User {
	public purchaseTotal: number = 0;
	private creditCard: string;
      
	constructor(
	  id: string,
	  email: string,
	  name: string,
	  password: string,
	  creditCard: string
	) {
	  super(id, email, name, password);
	  console.log("Chamando o construtor da classe Customer");
	  this.creditCard = creditCard;
	}
      
	public getCreditCard(): string {
	  return this.creditCard;
	}

      }
const customer1=new Customer("001","guilherme@gmail.com","Guilherme","guilherme123","50.0")
console.log(customer1);

//a) Uma vez
//b) Uma veze, pois o super() é o construtor da classe User e invoca a mensagem dentro dele
//3
console.log(customer1.getId,customer1.getName,customer1.getEmail,customer1.getCreditCard);
//Não é possível imprimir password pois a senha está privada e não há um método público que retorne seu valor para ser possível lê-la

//4
customer1.intoduceYourself("Guilherme")

//Polimorfismo
//1
export interface Client {
	name: string;
	// Refere-se ao nome do cliente
      
	registrationNumber: number;
	// Refere-se ao número de cadastro do cliente na concessionária
	      // como se fosse um id
      
	consumedEnergy: number;
	// Refere-se à energia consumida pelo cliente no mês
      
	calculateBill(): number;
	// Retorna o valor da conta em reais
      }

const client1:Client={
	name:"Guilherme",
	registrationNumber:1,
	consumedEnergy:55,
	calculateBill:()=>{
		return 2
	}
}
console.log(client1);
console.log(client1.name);
console.log(client1.registrationNumber);
console.log(client1.consumedEnergy);
console.log(client1.calculateBill());

export abstract class Place {
	constructor(protected cep: string) {}
      
	      public getCep(): string {
		      return this.cep;
	}
      }
     // const place1=new Place("52148-985")
//Erro: Não é possível criar uma instância de uma classe abstrata.ts(2511)

//b) Seria necessário criar a instância de outra classe que extenda de Place

//3
//
export class Residence extends Place {
	constructor(
	  protected residentsQuantity: number,
	  // Refere-se ao número de moradores da casa
      
	  cep: string
	) {
	  super(cep);
	}
	/**
	 * getResidentsQuantity
	:number */
	public getResidentsQuantity():number {
		return this.residentsQuantity
	}
      }
      export class Commerce extends Place {
	constructor(
	  protected floorsQuantity: number,
	  // Refere-se à quantidade de andares do lugar
      
	  cep: string
	) {
	  super(cep);
	}
	/**
	 * getFloorsQuantity
	:number */
	public getFloorsQuantity():number {
		return this.floorsQuantity
	}
      }
      export class Industry extends Place {
	constructor(
	  protected machinesQuantity: number, 
	  // Refere-se à quantidade de máquinas do local 
	  
	  cep: string
		      ) {
		  super(cep);
	}
	/**
	 * getMachinesQuantity
	:number */
	public getMachinesQuantity():number {
		return this.machinesQuantity
	}
      }
      const residence1 = new Residence(4,"54789-851");
      const lugarComercial1 = new Commerce(2,"53453-999");
      const industria1 = new Industry(50,"25868-111");

      console.log(residence1.getCep());
      console.log(lugarComercial1.getCep());
      console.log(industria1.getCep());

//4
class ResidentialClient extends Residence implements Client {
	
	constructor(public name: string,
		public registrationNumber: number,
		public consumedEnergy: number,
		private cpf:string,
		residentsQuantity: number,
		cep: string,
		
		) {
		super(residentsQuantity,cep);
	}
	/**
	 * getCpf
	:string */
	public getCpf():string {
		return this.cpf
	}
	public calculateBill(): number {
		return this.consumedEnergy * 0.75;
	}
}
//5
class ComercialClient extends Commerce implements Client{
	constructor(private cnpj:string,
		public name: string,
		public registrationNumber: number,
		public consumedEnergy: number,
		cep:string,
		floorsQuantity:number) {
		super(floorsQuantity,cep);
	}
	
	calculateBill(): number {
		return this.consumedEnergy * 0.53;
	}
	/**
	 * getCnpj
	:string */
	public getCnpj():string {
		return this.cnpj
	}
}
//a) Assemelha-se com a implementação 
//b) Apenas alguns atributos e a função calculateBill

//6
class IndustrialClient extends Industry implements Client {
	constructor(
		private register:number,
		public name: string,
		public registrationNumber: number,
		public consumedEnergy: number,
		machinesQuantity:number,
		cep:string
		) {
		super(machinesQuantity,cep);
	}
	
	calculateBill(): number {
		return this.consumedEnergy * 0.45;
	}
	
	public getRegisterNumber() : number {
		return this.register
	}
	
}
//a) Filha de Industry, pois para representar o cliente industrial, faz-se necessário que haja uma classe que una ambos os contextos
//b) Implementa Client, pois continua sendo um Cliente, só que do modo industrial
//c) Talvez porque alterar o número de registro seja arriscado e inseguro