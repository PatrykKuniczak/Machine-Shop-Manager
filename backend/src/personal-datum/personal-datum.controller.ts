import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalDatumService } from './personal-datum.service';
import { CreatePersonalDatumDto } from './dto/create-personal-datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal-datum.dto';


@Controller('personal-datum')
export class PersonalDatumController {
  constructor(private readonly personalDatumService: PersonalDatumService) {}

  @Post()
  create(@Body() createPersonalDatumDto: CreatePersonalDatumDto) {
    return this.personalDatumService.create(createPersonalDatumDto);
  }

  @Get()
  findAll() {
    return this.personalDatumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalDatumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalDatumDto: UpdatePersonalDatumDto) {
    return this.personalDatumService.update(+id, updatePersonalDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalDatumService.remove(+id);
  }
}
