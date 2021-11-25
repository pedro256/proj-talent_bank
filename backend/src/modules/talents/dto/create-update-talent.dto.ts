import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { ITalent } from "../models/talents.model";

export class CreateOrUpdateTalentDto implements ITalent{

    @IsString()
    @ApiProperty({ type: String })
    name: string;

    @IsString()
    @ApiProperty({ type: String })
    description?: string;

    @IsPhoneNumber()
    @ApiProperty({type:Number})
    default_phone: number;
    @IsPhoneNumber()
    @ApiProperty({type:Number,required:false})
    whatsapp_phone?: number;

    @IsString()
    @ApiProperty({ type: String })
    default_email: string;

    @IsString()
    @ApiProperty({ type: String })
    second_email?: string;

    @IsString()
    @ApiProperty({ type: String })
    address: string;

    @IsDate()
    @ApiProperty({ type: Date })
    birth_date: Date;

    @IsNumber()
    @ApiProperty({type:Number,required:true})
    create_by_user: number;
    
}
