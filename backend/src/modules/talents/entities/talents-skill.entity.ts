import { EntityBase } from "src/common/entity/entity.base";
import ITalentSkill from "../models/talent-skill.model";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Talent } from "../../talents/entities/talent.entity";
import { Skill } from "../../skills/entities/skill.entity";

@Entity('talent_skills')
export class TalentsSkill implements EntityBase,ITalentSkill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:"talent_id"})
    talent_id: number;

    @Column({name:"skill_id"})
    skill_id: number;

    @Column()
    time_experience: number;

    @Column({type:'text'})
    description: string;

    @Column({type:'text'})
    extra: string;

    @ManyToOne(type => Talent, talent => talent.talentSkill, { primary: true })
    @JoinColumn({name:'talent_id'})
    talent?: Talent;

    @ManyToOne(type => Skill, skill => skill.talentSkill, { primary: true })
    @JoinColumn({name:'skill_id'})
    skill?: Skill;
    
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({name:'updated_at',type:'timestamp'})
    updated_at: Date;

}
