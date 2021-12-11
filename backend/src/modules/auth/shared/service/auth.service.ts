import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export default class AuthService{

    constructor(
        private jwtService:JwtService
    ){
    }
    async login(user:any){
        const payload = {email:user.email,sub:user.id }
        return {
            access_token:this.jwtService.sign(payload)
        }
    }
}

