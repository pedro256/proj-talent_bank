import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Talent } from "../entities/talent.entity";

@Injectable()
class ListOneTalentService{

    constructor(
        @InjectRepository(Talent)
        private talentRepository: Repository<Talent>
    ){}

    async execute(
        id:number
    ):Promise<Talent>{

        const talent = await this.talentRepository.findOne({where:{id}})
        if(!talent){
            throw new NotFoundException();
        }
        return talent

    }

}
export default ListOneTalentService