import { Skill } from "src/modules/skills/entities/skill.entity";
import { FindManyOptions, FindOperator, In, Like } from "typeorm";
import { Talent } from "../entities/talent.entity";

export class TalentQuery {

    private name:string;
    private address:string;
    private skills_id:number[]
    private arrayWhere:Array<String> 

    constructor(
        name:string,
        address:string,
        skills_id:number[]
    ){
        
        this.name = name
        this.address = address,
        this.skills_id = skills_id

        this.arrayWhere=new Array<String>()
    }

    generateParams(){
        var params ={}
        if(this.name){
            params['name'] = '%'+this.name+'%'
        }
        if(this.address){
            params['address'] = '%'+this.address+'%'
        }
        if(this.skills_id?.length){
            var idsStr=""
            for (let i in this.skills_id){
                idsStr+= ""+this.skills_id[i]
                if(Number.parseInt(i)<this.skills_id.length-1){
                    idsStr+=","
                }
                
            }
            params['ids'] = idsStr
        }
        return params
    }

    generateQuery(){
        if(this.name){
            this.arrayWhere.push(`talents.name like :name`)
        }
        if(this.address){
            this.arrayWhere.push(`talents.address like :address`)
        }
        if(this.skills_id?.length){
            this.arrayWhere.push(`skills.id In (:ids)`)
        }

        var q="";
        for(var i in this.arrayWhere){
            q+= this.arrayWhere[i]
            if(Number.parseInt(i)+1<this.arrayWhere.length){
                q+=" and "
            }
        }
        return q
    }
}