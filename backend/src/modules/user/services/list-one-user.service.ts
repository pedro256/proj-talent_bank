import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
class ListOneByIdUserService{

    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    async execute(
        id:number
    ):Promise<User>{
        const user = await this.userRepository.findOne({where:{id}})
        if(!user){
            throw new NotFoundException();
        }
        return user
    }

}

export default ListOneByIdUserService