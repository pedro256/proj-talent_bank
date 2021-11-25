import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Skill } from "../entities/skill.entity";

@Injectable()
class DeleteSkillService{

    constructor(
        @InjectRepository(Skill)
        private skillRepository:Repository<Skill>
    ){}

    async execute(
        id:number
    ):Promise<DeleteResult>{
        return this.skillRepository.delete({id})
    }

}

export default DeleteSkillService