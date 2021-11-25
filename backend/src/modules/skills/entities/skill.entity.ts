import { EntityBase } from "src/common/entity/entity.base";
import { User } from "src/modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({name:'updated_at',type:'timestamp'})
    updated_at: Date;

}
