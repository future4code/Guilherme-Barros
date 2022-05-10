class Transaction {
	private description: string;
	private value: number;
	private date: string;

	constructor(description: string,value: number,date: string){
		this.description=description;
		this.value=value;
		this.date=date
	}

	public getDescription(){
		return this.description
	}
	public getValue(){
		return this.value
	}
	public getDate(){
		return this.date
	}
      }