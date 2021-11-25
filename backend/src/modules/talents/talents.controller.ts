import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { JoiValidatePipe } from 'src/common/pipes/joi-valid.pipe';
import { CreateOrUpdateTalentDto } from './dto/create-update-talent.dto';
import { saveTalentSchema } from './schema/talent.schema';
import CreateTalentService from './services/create-talent.service';
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
    private readonly deleteTalentService:DeleteTalentService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll():Promise<any> {
    return this.listTalentsService.execute()
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
  create(
    @Body(
      new JoiValidatePipe(saveTalentSchema)
    ) createTalentDto: CreateOrUpdateTalentDto
    ) :Promise<any>{
    return this.createTalentService.execute(createTalentDto)
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
