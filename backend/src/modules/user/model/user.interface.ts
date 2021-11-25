import { TypeUser } from "../enums/type-user.enum";

export interface IUser {
    name:string,
    company_id:number,
    company_email:string,
    password?:string,
    default_phone?:number,
    whatsapp_phone?:number,
    type?:TypeUser
}