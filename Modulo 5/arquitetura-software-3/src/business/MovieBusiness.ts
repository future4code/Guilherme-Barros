import { MovieDatabase } from '../data/MovieDatabase';
import { createMovieDTO } from '../model/movie';
import { generateId } from '../service/generateId';
export class MovieBusiness{
	async create(input:createMovieDTO):Promise<void>{
		try {
			const {title,description,duration_in_minutes,year_of_release}=input
		if (!title || !description || !duration_in_minutes || !year_of_release) {
			throw new Error("Dados inválidos (title,description, duration_in_minutes, years_of_release");	
		}
		const id:string=generateId();
		const movieDB=new MovieDatabase()
		await movieDB.create({
			id,
			title,
			description,
			duration_in_minutes,
			year_of_release
		})
		} catch (error:any) {
			throw new Error(error.message);
			
		}
		
	}
	async get():Promise<any>{
		try {
			const movieDB=new MovieDatabase()
		return await movieDB.getAll()
		} catch (error:any) {
			throw new Error(error.message);
			
		}
		
	}
}