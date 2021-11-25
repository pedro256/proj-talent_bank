import {object,string,number,date} from 'joi'
import { CreateOrUpdateTalentDto } from '../dto/create-update-talent.dto'

export const saveTalentSchema = object<CreateOrUpdateTalentDto>({
    name: string().required().min(1),
    description: string(),
    default_phone: number().min(0),
    whatsapp_phone: number().min(0),
    default_email:string().email().required(),
    second_email:string().email(),
    address:string(),
    birth_date:date(),
    create_by_user:number().required().min(1)
})