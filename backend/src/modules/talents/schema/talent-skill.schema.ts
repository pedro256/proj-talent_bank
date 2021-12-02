import {object,string,number,date,array} from 'joi'
import { CreateTalentSkillsDto } from "../dto/create-talent-skills.dto";

export const saveTalentSkillSchema = object<CreateTalentSkillsDto>({
    skill_id:number().required(),
    time_experience:number().default(0).min(0),
    description:string().min(5).default("no"),
    extra:string().min(5).default("no")
})