import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JoiValidatePipe } from 'src/common/pipes/joi-valid.pipe';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { CreateOrUpdateTalentDto } from './dto/create-update-talent.dto';
import { SaveTalentAndSkills } from './dto/save-talent-and-skills.dto';
import { TalentQuery } from './query/talent-query.query';
import { saveTalentSchema, saveTalentWithSkills } from './schema/talent.schema';
import CreateTalentService from './services/create-talent.service';
import CreateTalentWithSkillsService from './services/create-talents-with-skills.service';
import { DeleteTalentService } from './services/delete-talent.service';
import ListOneTalentService from './services/list-one-talent.service';
import ListTalentService from './services/list-talents.service';
import UpdateTalentService from './services/update-talent.service';

@ApiTags('Talents')
@Controller('talents')
export class TalentsController {
  constructor(
    private readonly listTalentsService:ListTalentService,
    private readonly listOneTalentService:ListOneTalentService,
    private readonly createTalentService:CreateTalentService,
    private readonly updateTalentService:UpdateTalentService,
    private readonly deleteTalentService:DeleteTalentService,
    private readonly createTalentWithSkills:CreateTalentWithSkillsService
  ) {}


  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiBearerAuth()
  @ApiQuery({name:'name',type:String,required:false})
  @ApiQuery({name:'local',type:String,required:false})
  @ApiQuery({name:'skills_id',type:Number,required:false,isArray:true})
  async findAll(
    @Query('name') name:string,
    @Query('local') address:string,
    @Query('skills_id') skills_id:number[]
  ):Promise<any> {
    return this.listTalentsService.execute(
      new TalentQuery(name,address,skills_id)
      )
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @ApiParam({type:Number,name:'id',required:true})
  findOne(
    @Param('id') id: number
    ):Promise<any> {
    return this.listOneTalentService.execute(id)
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @ApiBody({type:CreateOrUpdateTalentDto})
  createOneAnemic(
    @Body(
      new JoiValidatePipe(saveTalentSchema)
    ) createTalentDto: CreateOrUpdateTalentDto
    ) :Promise<any>{
    return this.createTalentService.execute(createTalentDto)
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('talent-skills')
  @ApiBody({type:SaveTalentAndSkills})
  createOne(
    @Body(
      new JoiValidatePipe(saveTalentWithSkills)
    ) talentDto:SaveTalentAndSkills
  ){
    return this.createTalentWithSkills.execute(talentDto)
  }

  

  @HttpCode(HttpStatus.NO_CONTENT)
  @Put(':id')
  @ApiParam({type:Number,name:'id',required:true})
  @ApiBody({type: CreateOrUpdateTalentDto})
  update(
    @Param('id') id: number, 
    @Body() updateTalentDto: CreateOrUpdateTalentDto
    ) :Promise<any>{
    return this.updateTalentService.execute(id,updateTalentDto)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiParam({type:Number,name:'id',required:true})
  remove(
    @Param('id') id: number
    ) {
    return this.deleteTalentService.execute(id)
  }
}
