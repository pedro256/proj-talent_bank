import { Skill } from "./Skills";

export interface Talent{
    name?:string,
    description?:string,
    skills?:Skill[]
}