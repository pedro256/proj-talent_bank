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
        talentDto: CreateOrUpdateTalentDto
    ):Promise<Talent>{
        try{
            return this.talentRepository.save(
                this.talentRepository.create(talentDto)
                )
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
    }

}
export default CreateTalentService