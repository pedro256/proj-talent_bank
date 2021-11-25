import { EntityBase } from "src/common/entity/entity.base";
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TypeUser } from "../enums/type-user.enum";
import { IUser } from "../model/user.interface";

@Entity('users')
export class User implements EntityBase,IUser{

    @PrimaryGeneratedColumn({type:'int'})
    id: number;
    
    @Column({name:'name',nullable:false,type:'varchar'})
    name: string;

    @Column({name:'company_id',nullable:false,type:'int'})
    company_id: number;

    @Column({name:'company_email',nullable:false})
    company_email: string;

    @Column({name:'password'})
    password?: string;

    @Column({name:'default_phone',nullable:true, default:0})
    default_phone?: number;

    @Column({name:'whatsapp_phone',nullable:true,default:0})
    whatsapp_phone?: number;

    @Column({name:'type',nullable:true,default:0,type:'enum',enum:TypeUser})
    type?: TypeUser;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;
    
    @UpdateDateColumn({name:'updated_at',type:'timestamp'})
    updated_at: Date;
    

}
