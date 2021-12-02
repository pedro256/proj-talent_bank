import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsObject } from "class-validator";
import { CreateTalentSkillsDto } from "./create-talent-skills.dto";
import { CreateOrUpdateTalentDto } from "./create-update-talent.dto";


export class SaveTalentAndSkills extends CreateOrUpdateTalentDto{
    @IsArray()
    @ApiProperty({type:CreateTalentSkillsDto,isArray:true})
    skills:CreateTalentSkillsDto[]
}