import { HttpStatus, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { response, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
class ListUsersService{
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    public async execute(
        
    ): Promise<Array<User>>
    {
        try {
            return this.userRepository.find({
                select:['company_email','company_id','default_phone','id','name','type','whatsapp_phone']
            })
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
    }
}

export default ListUsersService