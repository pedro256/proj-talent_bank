import { EntityBase } from "src/common/entity/entity.base";
import { TalentsSkill } from "../../talents/entities/talents-skill.entity"; 
import { User } from "../../user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ISkills } from "../model/skill.model";

@Entity('skills')
export class Skill implements EntityBase,ISkills {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar'})
    name: string;
    @Column({type:'varchar'})
    description?: string;

    @Column({ name: 'create_by_user' })
    create_by_user_id: number

    @JoinColumn({name:'create_by_user'})
    User: User;

    /*
    @ManyToMany(()=> Talent)
    @JoinTable({
        name:'talent_skills',
        joinColumn:{
            name:"skill_id",
            referencedColumnName:"id"
        },
        inverseJoinColumn:{
            name:"talent_id",
            referencedColumnName:"id"
        }
    })
    talents:Talent[]
    */
    @OneToMany(() => TalentsSkill, (ts:TalentsSkill) => ts.skill)
    talentSkill?:TalentsSkill[]

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({name:'updated_at',type:'timestamp'})
    updated_at: Date;

}
