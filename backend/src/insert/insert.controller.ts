import { Controller, Post, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsertService } from './insert.service';
import { CreateInsertDto } from './dto/create-insert.dto';
import { UpdateInsertDto } from './dto/update-insert.dto';


@Controller('insert')
export class InsertController {
    constructor(private readonly insertService: InsertService) {}

    @Post()
    create(@Body() createInsertDto: CreateInsertDto) {
        return this.insertService.create(createInsertDto);
    }

    @Get()
    findAll() {
        return this.insertService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.insertService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateInsertDto: UpdateInsertDto) {
        return this.insertService.update(+id, updateInsertDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.insertService.remove(+id);
    }
}
