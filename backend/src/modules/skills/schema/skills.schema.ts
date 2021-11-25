import {object,string,number} from 'joi'

import { CreateOrUpdateSkillDto } from '../dto/create-update-skill.dto'

export const SaveSkillsSchema = object<CreateOrUpdateSkillDto>({
    name: string().required().min(1),
    description:string(),
    create_by_user_id:number().required().min(1)
})
