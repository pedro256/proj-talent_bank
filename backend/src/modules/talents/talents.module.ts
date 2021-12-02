import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from '../skills/entities/skill.entity';
import ListSkillsService from '../skills/services/list-skills.service';
import { Talent } from './entities/talent.entity';
import { TalentsSkill } from './entities/talents-skill.entity';
import CreateTalentService from './services/create-talent.service';
import CreateTalentWithSkillsService from './services/create-talents-with-skills.service';
import { DeleteTalentService } from './services/delete-talent.service';
import ListOneTalentService from './services/list-one-talent.service';
import ListTalentService from './services/list-talents.service';
import UpdateTalentService from './services/update-talent.service';
import { TalentsController } from './talents.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Talent,
      Skill,
      TalentsSkill
    ])
  ],
  controllers: [TalentsController],
  providers: [
    ListTalentService,
    ListOneTalentService,
    CreateTalentService,
    UpdateTalentService,
    DeleteTalentService,
    ListSkillsService,
    CreateTalentWithSkillsService
  ]
})
export class TalentsModule {}
