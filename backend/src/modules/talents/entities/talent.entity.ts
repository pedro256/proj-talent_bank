import { EntityBase } from "src/common/entity/entity.base";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({name:'updated_at',type:'timestamp'})
    updated_at: Date;
}
