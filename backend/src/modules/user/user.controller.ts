import { Controller,  Post, Body, HttpStatus, Get, HttpCode, Put, Param, Delete} from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { JoiValidatePipe } from 'src/common/pipes/joi-valid.pipe';
import {UpdateUserDto,CreateUserDto} from './dto/create-update-user.dto';
import { UserSchema,CreateUserSchema } from './schema/user.schema';
import CreateUserService from './services/create-user.service';
import { DeleteUserService } from './services/delete-user.service';
import ListOneByIdUserService from './services/list-one-user.service';
import ListUsersService from './services/list-users.service';
import UpdateUserService from './services/update-user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly listUsersService:ListUsersService,
    private readonly updateUserService:UpdateUserService,
    private readonly deleteUserService:DeleteUserService,
    private readonly listOneUserService:ListOneByIdUserService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async list(
  ){
    return await this.listUsersService.execute()
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @ApiParam({ name: 'id', type: Number, required: true })
  async listOne(
    @Param('id') id:number
  ){
    return await this.listOneUserService.execute(id)
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @ApiBody({type:CreateUserDto})
  async create(
    @Body(
      new JoiValidatePipe(CreateUserSchema)
      ) body:CreateUserDto
    ) {
    return await this.createUserService.execute(body)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Put(':id')
  @ApiBody({type:UpdateUserDto})
  @ApiParam({name:'id',required:true})
  async update(
    @Param('id') id: number,
    @Body(
      new JoiValidatePipe(UserSchema)
      ) body:UpdateUserDto
  ){
    return await this.updateUserService.execute(id,body)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiParam({name:'id',required:true})
  async delete(
    @Param('id') id: number
  ){
    return await this.deleteUserService.execute(id)
  }

}
