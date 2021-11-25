import { PrimaryGeneratedColumn } from "typeorm"

export interface EntityBase{
    id:number,
    created_at:Date,
    updated_at:Date
}