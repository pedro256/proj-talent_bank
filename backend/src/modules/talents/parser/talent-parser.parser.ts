import { CreateOrUpdateTalentDto } from "../dto/create-update-talent.dto";
import { Talent } from "../entities/talent.entity";

export default class TalentParser{

    public parseCreateDtoToEntity(dto:CreateOrUpdateTalentDto):Talent{
        const talent = new Talent()
        talent.name=dto.name;
        talent.address=dto.address;
        talent.birth_date=dto.birth_date;
        talent.create_by_user=dto.create_by_user;
        talent.default_email=dto.default_email;
        talent.second_email=dto.second_email;
        talent.default_phone=dto.default_phone;
        talent.whatsapp_phone=dto.whatsapp_phone;
        talent.description=dto.description;
        return talent
    }
}