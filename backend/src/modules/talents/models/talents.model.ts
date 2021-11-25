export interface ITalent{
    name:string,
    description?:string,
    default_phone:number,
    whatsapp_phone?:number,
    default_email:string,
    second_email?:string,
    address:string,
    birth_date:Date,
    create_by_user:number
}