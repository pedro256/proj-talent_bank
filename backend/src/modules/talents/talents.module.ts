import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Talent } from './entities/talent.entity';
import CreateTalentService from './services/create-talent.service';
import { DeleteTalentService } from './services/delete-talent.service';
import ListOneTalentService from './services/list-one-talent.service';
import ListTalentService from './services/list-talents.service';
import UpdateTalentService from './services/update-talent.service';
import { TalentsController } from './talents.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Talent
    ])
  ],
  controllers: [TalentsController],
  providers: [
    ListTalentService,
    ListOneTalentService,
    CreateTalentService,
    UpdateTalentService,
    DeleteTalentService
  ]
})
export class TalentsModule {}
