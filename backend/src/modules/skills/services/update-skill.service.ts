import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrUpdateSkillDto } from "../dto/create-update-skill.dto";
import { Skill } from "../entities/skill.entity";

@Injectable()
export default class UpdateSkillService{

    constructor(
        @InjectRepository(Skill)
        private skillRepository:Repository<Skill>
    ){}

    async execute(
        id:number,
        skill:CreateOrUpdateSkillDto
    ){
        const lastSkillData = await this.skillRepository.findOne({
            where:{id}
        })

        if(!lastSkillData){
            throw new NotFoundException();
        }

        const skillToUpdate:Skill = this.skillRepository.create(skill)

        await this.skillRepository.save([
            {
                ...lastSkillData,
                ...skillToUpdate
            }
        ])
    }
}