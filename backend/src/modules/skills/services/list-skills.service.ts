import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Skill } from "../entities/skill.entity";

@Injectable()
class ListSkillsService{

    constructor(
        @InjectRepository(Skill)
        private skillRepository: Repository<Skill>
    ){}

    async execute():Promise<Array<Skill>>
    {
        try {
            return this.skillRepository.find({
                select:['id','name','description']
            })
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
    }
}

export default ListSkillsService