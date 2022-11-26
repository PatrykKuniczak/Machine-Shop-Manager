import { Controller, Post, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToolService } from './tool.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';


@Controller('tool')
export class ToolController {
    constructor(private readonly toolService: ToolService) {}

    @Post()
    create(@Body() createToolDto: CreateToolDto) {
        return this.toolService.create(createToolDto);
    }

    @Get()
    findAll() {
        return this.toolService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.toolService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateToolDto: UpdateToolDto) {
        return this.toolService.update(+id, updateToolDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.toolService.remove(+id);
    }
}