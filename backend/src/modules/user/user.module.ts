import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crypto } from 'src/common/utils/crypto/crypt.util';
import { User } from './entities/user.entity';
import AuthUserService from '../auth/shared/service/auth-user.service';
import CreateUserService from './services/create-user.service';
import { DeleteUserService } from './services/delete-user.service';
import ListOneByIdUserService from './services/list-one-user.service';
import ListUsersService from './services/list-users.service';
import UpdateUserService from './services/update-user.service';
import { UserController } from './user.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [
    CreateUserService,
    ListUsersService,
    ListOneByIdUserService,
    DeleteUserService,
    UpdateUserService,
    Crypto
  ]
})
export class UserModule {}
