import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import appConfig from './configs/app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillsModule } from './modules/skills/skills.module';
import { TalentsModule } from './modules/talents/talents.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:async (configService: ConfigService) => ({
        type:'mysql',
        host:configService.get('database.host'),
        port:configService.get('database.port'),
        username:configService.get('database.username'),
        password:configService.get('database.password'),
        database:configService.get('database.name'),
        autoLoadEntities:true
      })
    })
    ,
    UserModule,
    SkillsModule,
    TalentsModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
