import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { JWTConstants } from "src/common/auth/constants";
import AuthUserService from "./auth-user.service"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){


    constructor(
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: JWTConstants.secret
        });
    }

    async validate(payload:any):Promise<any>{
        return {id:payload.sub,email:payload.email}
    }

}