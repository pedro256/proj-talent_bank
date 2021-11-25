import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class Crypto{

    private readonly saltOrRounds:number

    constructor(
    ){
        this.saltOrRounds = Number.parseInt(process.env.CRYPTO_DATA_SALT) || 10
    }

    public async createHash(
        str:string
    ):Promise<string> {
        return bcrypt.hash(str, this.saltOrRounds);
    }

    public async compareHash(
        str:string,
        hash:string
    ):Promise<boolean>{
        return bcrypt.compare(str,hash)
    }
}