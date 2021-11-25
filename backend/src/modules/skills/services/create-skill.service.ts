import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrUpdateSkillDto } from "../dto/create-update-skill.dto";
import { Skill } from "../entities/skill.entity";

@Injectable()
export default class CreateSkillsService{

    constructor(
        @InjectRepository(Skill)
        private skillsRepository:Repository<Skill>
    ){}

    async execute(
        skill:CreateOrUpdateSkillDto
    ){
        try {
            const userCreated = await this.skillsRepository.save(
                await this.skillsRepository.create(skill)
            )
            return userCreated
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
        
    }
}