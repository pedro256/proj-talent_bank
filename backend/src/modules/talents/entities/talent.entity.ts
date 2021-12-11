import { EntityBase } from "src/common/entity/entity.base";
import { Skill } from "../../skills/entities/skill.entity";
import { TalentsSkill } from "../entities/talents-skill.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ITalent } from "../models/talents.model";

@Entity('talents')
export class Talent implements EntityBase,ITalent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar'})
    name: string;

    @Column({type:'varchar'})
    description?: string;

    @Column()
    default_phone: number;

    @Column()
    whatsapp_phone?: number;

    @Column({type:'varchar'})
    default_email: string;

    @Column({type:'varchar'})
    second_email?: string;

    @Column({type:'varchar'})
    address: string;

    @Column()
    birth_date: Date;

    @Column()
    create_by_user: number;

    
    @ManyToMany(()=> Skill)
    @JoinTable({
        name:'talent_skills',
        joinColumn:{
            name:'talent_id',
            referencedColumnName:"id"
        },
        inverseJoinColumn:{
            name:"skill_id",
            referencedColumnName:"id"
        }
    })
    skills?:Skill[]
    
    @OneToMany(type => TalentsSkill, talentSkills => talentSkills.talent)
    talentSkill:TalentsSkill[]

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({name:'updated_at',type:'timestamp'})
    updated_at: Date;
}
