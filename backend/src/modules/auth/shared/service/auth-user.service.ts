import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDataAuth } from "src/common/auth/user-data.model";
import { Repository } from "typeorm";
import { User } from "../../../user/entities/user.entity";
import { Crypto } from "src/common/utils/crypto/crypt.util";

@Injectable()
export default class AuthUserService{

    constructor(

        @Inject(Crypto)
        private crypt:Crypto,
        @InjectRepository(User)
        private userRepository:Repository<User>,
    ){
    }

    async execute(
        email:string,
        password:string
    ):Promise<UserDataAuth>{
        return  this.validateUser(email,password)
    }

    private async validateUser(
        email:string,
        password:string
    ):Promise<UserDataAuth>{
        const user = await this.userRepository.findOne(
            {
                where:{company_email:email},
                select:['company_email','id','password']
            }
            )
        if(user){
            const equals =await  this.crypt.compareHash(password,user.password)
            console.log(equals)
            if(equals){
                return {email:user.company_email,id:user.id}
            }

        }
        return null
    }
}

