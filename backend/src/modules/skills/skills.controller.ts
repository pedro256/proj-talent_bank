import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put, Query } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JoiValidatePipe } from 'src/common/pipes/joi-valid.pipe';
import {CreateOrUpdateSkillDto} from './dto/create-update-skill.dto'
import { SaveSkillsSchema } from './schema/skills.schema';
import CreateSkillsService from './services/create-skill.service';
import DeleteSkillService from './services/delete-skill.service';
import ListOneSkillService from './services/list-one-skill.service';
import ListSkillsService from './services/list-skills.service';
import UpdateSkillService from './services/update-skill.service';

@ApiTags('Skills')
@Controller('skills')
export class SkillsController {
  constructor(
    private readonly listSkillService:ListSkillsService,
    private readonly listOneSkillService:ListOneSkillService,
    private readonly createSkillService:CreateSkillsService,
    private readonly updateSkillService:UpdateSkillService,
    private readonly deleteSkillService:DeleteSkillService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiQuery({name:'skills_id',type:Number,required:false,isArray:true})
  async findAll(
    @Query('skills_id') skills_id:number[]
  ){
    return await this.listSkillService.execute(skills_id)
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @ApiParam({type:Number,name:'id',required:true})
  async findOne(
    @Param('id') id: number
  ) {
    return await this.listOneSkillService.execute(id)
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @ApiBody({type:CreateOrUpdateSkillDto})
  async create(
    @Body(
      new JoiValidatePipe(SaveSkillsSchema)
    ) skillDto: CreateOrUpdateSkillDto
    ) {
    return await this.createSkillService.execute(skillDto)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Put(':id')
  @ApiBody({
    type: CreateOrUpdateSkillDto
  })
  @ApiParam({
    type:Number,name:'id',required:true
  })
  async update(
    @Param('id') id: number,
    @Body(
      new JoiValidatePipe(SaveSkillsSchema)
    ) skill:CreateOrUpdateSkillDto
  ) {
    return await this.updateSkillService.execute(id,skill)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiParam({
    type:Number,name:'id',required:true
  })
  async remove(
    @Param('id') id: number
    ) {
    return await this.deleteSkillService.execute(id)
  }
}
