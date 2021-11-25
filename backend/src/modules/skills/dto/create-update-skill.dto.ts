import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { ISkills } from "../model/skill.model";

export class CreateOrUpdateSkillDto implements ISkills{

    @IsString()
    @ApiProperty({ type: String })
    name: string;

    @IsString()
    @ApiProperty({ type: String })
    description?: string;

    @IsString()
    @ApiProperty({ type: Number })
    create_by_user_id: number;

}
