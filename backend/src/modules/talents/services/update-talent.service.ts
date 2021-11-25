import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrUpdateTalentDto } from "../dto/create-update-talent.dto";
import { Talent } from "../entities/talent.entity";

@Injectable()
class UpdateTalentService{

    constructor(
        @InjectRepository(Talent)
        private talentRepository:Repository<Talent>
    ){}

    async execute(
        id:number,
        talent:CreateOrUpdateTalentDto
    ){

        const lTalentData = await this.talentRepository.findOne({
            where: { id }
        });

        if(!lTalentData){
            throw new NotFoundException();
        }

        const talentToUp:Talent = this.talentRepository.create(talent)

        await this.talentRepository.save({
            ...lTalentData,
            ...talentToUp
        })
    }

}

export default UpdateTalentService