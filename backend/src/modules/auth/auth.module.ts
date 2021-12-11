import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { Crypto } from 'src/common/utils/crypto/crypt.util';
import { User } from '../user/entities/user.entity';
import { LocalAuthGuard } from './shared/local-auth.guard';
import AuthUserService from './shared/service/auth-user.service';
import { LocalStrategy } from './shared/service/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './shared/service/jwt.strategy';
import AuthService from './shared/service/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWTConstants } from 'src/common/auth/constants';
@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ]),
        PassportModule,
        JwtModule.register({
            secret:JWTConstants.secret,
            signOptions:{expiresIn:'3600s'}
        })
    ],
    controllers: [
        AuthController,],
    providers: [
        Crypto,
        AuthUserService,
        LocalStrategy,
        LocalAuthGuard,
        JwtStrategy,
        AuthService
    ]
})
export class AuthModule { }
