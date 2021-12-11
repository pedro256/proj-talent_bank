import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import AuthUserService from "./auth-user.service"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){


    constructor(
        private authUser:AuthUserService
    ){
        super({
            usernameField:'email',
            passwordField:'password'
        });
    }

    async validate(email:string,password:string):Promise<any>{
        const user = await this.authUser.execute(email,password)
        
        if(!user){
            throw new UnauthorizedException() 
        }
        return user
    }

}