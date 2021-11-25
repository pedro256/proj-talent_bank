import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
export class DeleteUserService{

    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    public async execute(
        id:number
    ):Promise<DeleteResult>{
        return this.userRepository.delete({id:id})
    }

}