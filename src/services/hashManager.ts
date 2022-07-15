import * as bcrypt from 'bcryptjs';
import { IHashGenerator } from '../business/ports';


export class HashGenerator implements IHashGenerator{
   compare (plainText: string, cypherText: string) {
    return bcrypt.compare(plainText, cypherText)
  };
  async hash (plaintext: string) {
    const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  return bcrypt.hash(plaintext, salt)
  };
  
}