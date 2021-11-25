import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrUpdateTalentDto } from "../dto/create-update-talent.dto";
import { Talent } from "../entities/talent.entity";

@Injectable()
class CreateTalentService{

    constructor(
        @InjectRepository(Talent)
        private talentRepository: Repository<Talent>
    ){}

    async execute(
        talent: CreateOrUpdateTalentDto
    ):Promise<Talent>{
        try{
            return this.talentRepository.save(
                await this.talentRepository.create(talent)
            )
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
    }

}
export default CreateTalentService