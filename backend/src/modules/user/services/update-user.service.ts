import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {UpdateUserDto} from "../dto/create-update-user.dto";
import { User } from "../entities/user.entity";

@Injectable()
class UpdateUserService{

    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    async execute(
        id:number,
        user:UpdateUserDto
    ){

        const lastUserData = await this.userRepository.findOne({
            where: { id }
        });

        if(!lastUserData){
            throw new NotFoundException();
        }

        const userToUpdate:User = this.userRepository.create(user)

        await this.userRepository.save({
            ...lastUserData,
            ...userToUpdate
        })
    }

}

export default UpdateUserService