import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { TypeUser } from "../enums/type-user.enum";
import { IUser } from "../model/user.interface";
export class UpdateUserDto implements IUser {

    @IsString()
    @ApiProperty({ type: String })
    name: string;

    @IsNumber({allowNaN:false})
    @ApiProperty({type:Number})
    company_id: number;

    @IsEmail()
    @ApiProperty({type:String})
    company_email: string;

    @IsPhoneNumber()
    @ApiProperty({type:Number})
    default_phone?: number;

    @IsPhoneNumber()
    @ApiProperty({type:Number})
    whatsapp_phone?: number;

    @IsEnum(TypeUser)
    @ApiProperty({enum:TypeUser})
    type?: TypeUser;

}
export class CreateUserDto extends UpdateUserDto{
    @IsString()
    @ApiProperty({type:String})
    password?: string;
} 