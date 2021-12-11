import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { IUserAuthicate } from 'src/common/auth/user-auth-data.model';
import { JoiValidatePipe } from 'src/common/pipes/joi-valid.pipe';
import { AuthUserDto } from './dto/login.dto';
import { AuthUserSchema } from './schema/login.schema';
import { LocalAuthGuard } from './shared/local-auth.guard';
import AuthService from './shared/service/auth.service';

@ApiTags('Auth')
@Controller()
export class AuthController {


    constructor(
        private authService:AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    @ApiBody({type:AuthUserDto})
    async login(
        @Request() req:any,
        @Body(
            new JoiValidatePipe(AuthUserSchema)
          ) body: AuthUserDto
        ){
        return this.authService.login(req.user)
    }

}
