import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";
import { IUserAuthicate } from "src/common/auth/user-auth-data.model";

export class AuthUserDto implements IUserAuthicate{

    @IsEmail()
    @ApiProperty({ type: String,example:'email@email.com' })
    email: string;

    @IsString()
    @ApiProperty({ type: String, example:'1234' })
    password: string;

}
