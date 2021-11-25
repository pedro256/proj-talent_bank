import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Talent } from "../entities/talent.entity";

@Injectable()
export class DeleteTalentService{

    constructor(
        @InjectRepository(Talent)
        private talentRepository:Repository<Talent>
    ){}

    public async execute(
        id:number
    ):Promise<DeleteResult>{
        return this.talentRepository.delete({id:id})
    }

}