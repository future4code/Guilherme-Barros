import { Movie } from "../model/movie";
import { BaseDatabase } from "./BaseDatabase"

export class MovieDatabase extends BaseDatabase {
	private static TABLE_NAME = "LABEFLIX_MOVIE";
	async create(movie:Movie):Promise<void>{
		try {
			await MovieDatabase.connection.insert({
				id:movie.id,
				title:movie.title,
				description:movie.description,
				duration_in_minutes:movie.duration_in_minutes,
				year_of_release:movie.year_of_release
			}).into(MovieDatabase.TABLE_NAME)
		} catch (error:any) {
			throw new Error(error.message);
		}
	}
	async getAll():Promise<Movie[]>{
		try {
			return await MovieDatabase.connection(MovieDatabase.TABLE_NAME)	
		} catch (error:any) {
			throw new Error(error.message);
			
		}
	
	}
}