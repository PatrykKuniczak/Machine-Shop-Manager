import { Controller, Post, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { HolderService } from './holder.service';
import { CreateHolderDto } from './dto/create-holder.dto';
import { UpdateHolderDto } from './dto/update-holder.dto';


@Controller('holder')
export class HolderController {
    constructor(private readonly holderService: HolderService) {}

    @Post()
    create(@Body() createHolderDto: CreateHolderDto) {
        return this.holderService.create(createHolderDto);
    }

    @Get()
    findAll() {
        return this.holderService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.holderService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateHolderDto: UpdateHolderDto) {
        return this.holderService.update(+id, updateHolderDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.holderService.remove(+id);
    }
}
