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

    async execute(
        ids?:number[]
    ):Promise<Array<Skill>>
    {
        try {

            if(ids){
                return this.skillRepository.findByIds(ids,{
                    select:['id','name','description']
                })
            }

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