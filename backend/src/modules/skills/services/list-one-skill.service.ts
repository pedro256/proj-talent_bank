import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Skill } from "../entities/skill.entity";

@Injectable()
class ListOneSkillService{

    constructor(
        @InjectRepository(Skill)
        private skillRepository: Repository<Skill>
    ){}

    async execute(
        id:number
    ):Promise<Skill>{
        const skill = await this.skillRepository.findOne({where:{id}})
        if(!skill){
            throw new NotFoundException();
        }
        return skill
    }
}
export default ListOneSkillService