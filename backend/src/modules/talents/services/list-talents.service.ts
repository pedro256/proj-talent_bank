import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Talent } from "../entities/talent.entity";

@Injectable()
class ListTalentService{

    constructor(
        @InjectRepository(Talent)
        private talentRepository: Repository<Talent>
    ){}

    async execute():Promise<Array<Talent>>
    {
        try {
            return this.talentRepository.find()
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
    }

}
export default ListTalentService