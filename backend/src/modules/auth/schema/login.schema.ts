import {object,string} from 'joi'

import { AuthUserDto } from '../dto/login.dto'

export const AuthUserSchema = object<AuthUserDto>({
    email:string().email().min(5),
    password: string().min(4)
})
