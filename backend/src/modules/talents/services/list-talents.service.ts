import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Talent } from "../entities/talent.entity";
import { TalentQuery } from "../query/talent-query.query";

@Injectable()
class ListTalentService{

    constructor(
        @InjectRepository(Talent)
        private talentRepository: Repository<Talent>
    ){}

    async execute(
        q:TalentQuery
    ):Promise<Array<Talent>>
    {
        try {
            return this.talentRepository.createQueryBuilder('talents')
            .leftJoinAndSelect("talents.skills","skills")
            .where(
                q.generateQuery(),
                q.generateParams()
                )
            .getMany()
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
    }

}
export default ListTalentService