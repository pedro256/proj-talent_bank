import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Skill } from "src/modules/skills/entities/skill.entity";
import { Repository } from "typeorm";
import { SaveTalentAndSkills } from "../dto/save-talent-and-skills.dto";
import { Talent } from "../entities/talent.entity";
import { TalentsSkill } from "../entities/talents-skill.entity";

@Injectable()
class CreateTalentWithSkillsService{

    constructor(
        @InjectRepository(Talent)
        private talentRepository: Repository<Talent>,
        @InjectRepository(Skill)
        private skillsRepository: Repository<Skill>,
        @InjectRepository(TalentsSkill)
        private talentSkillsRepository: Repository<TalentsSkill>
    ){}

    async execute(
        talentDto: SaveTalentAndSkills
    ):Promise<Talent>{
        try{
            const talent = await this.talentRepository.save(
                this.talentRepository.create(talentDto)
                )
            
            const idsSkills= Array<number>()
            talentDto.skills.forEach((item)=>{
                idsSkills.push(item.skill_id)
            })
            const skills = await this.skillsRepository.findByIds(idsSkills)
            const tSList = Array<TalentsSkill>()

            talentDto.skills.forEach((item)=>{
                let skill = skills.find(e=>e.id===item.skill_id)
                if(skill){
                    tSList.push({
                        talent_id:talent.id,
                        skill_id:skill.id,
                        description:item.description,
                        extra:item.extra,
                        time_experience:item.time_experience
                    }as TalentsSkill)
                }
            })
            const tsEntities = await this.talentSkillsRepository.create(tSList)
            console.log(tsEntities)
            await this.talentSkillsRepository.save(
                tsEntities
            )
            return talent
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(error)
        }
    }

}
export default CreateTalentWithSkillsService