import ITalentSkill from "../models/talent-skill.model";
import { IsDate, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTalentSkillsDto implements ITalentSkill{

    @IsNumber()
    @ApiProperty({ type: Number })
    skill_id: number;

    @IsNumber()
    @ApiProperty({ type: Number })
    time_experience?: number;

    @IsString()
    @ApiProperty({ type: String })
    description?: string;

    @IsString()
    @ApiProperty({ type: String })
    extra?: string;

}