import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AxisDimensionService } from './axis-dimension.service';
import { CreateAxisDimensionDto } from './dto/create-axis-dimension.dto';
import { UpdateAxisDimensionDto } from './dto/update-axis-dimension.dto';


@Controller('axis-dimension')
export class AxisDimensionController {
  constructor(private readonly axisDimensionService: AxisDimensionService) {}

  @Post()
  create(@Body() createAxisDimensionDto: CreateAxisDimensionDto) {
    return this.axisDimensionService.create(createAxisDimensionDto);
  }

  @Get()
  findAll() {
    return this.axisDimensionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.axisDimensionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAxisDimensionDto: UpdateAxisDimensionDto) {
    return this.axisDimensionService.update(+id, updateAxisDimensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.axisDimensionService.remove(+id);
  }
}