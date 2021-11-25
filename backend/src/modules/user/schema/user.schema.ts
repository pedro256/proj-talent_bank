import { object, string, number} from 'joi'
import {CreateUserDto} from '../dto/create-update-user.dto'
import { TypeUser } from '../enums/type-user.enum';

export const UserSchema = object<CreateUserDto>().keys({
    name: string().required().min(3),
    company_email:string().email().min(1),
    company_id:number().required(),
    default_phone:number().min(0),
    whatsapp_phone:number().min(0),
    type: string().valid(...Object.values(TypeUser)),
})

export const CreateUserSchema = UserSchema.keys({
    password:string().required().min(5)
})