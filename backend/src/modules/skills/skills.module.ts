import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Skill } from './entities/skill.entity';
import CreateSkillsService from './services/create-skill.service';
import DeleteSkillService from './services/delete-skill.service';
import ListOneSkillService from './services/list-one-skill.service';
import ListSkillsService from './services/list-skills.service';
import UpdateSkillService from './services/update-skill.service';
import { SkillsController } from './skills.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Skill,
      User
    ])
  ],
  controllers: [
    SkillsController
  ],
  providers: [
    ListOneSkillService,
    ListSkillsService,
    CreateSkillsService,
    UpdateSkillService,
    DeleteSkillService
  ]
})
export class SkillsModule {}
