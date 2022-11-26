import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {MachineTechnicalDataService} from './machine-technical-data.service';
import {CreateMachineTechnicalDataDto} from './dto/create-machine-technical-data.dto';
import {UpdateMachineTechnicalDataDto} from './dto/update-machine-technical-data.dto';


@Controller('machine-technical-data')
export class MachineTechnicalDataController {
    constructor(private readonly machineTechnicalDataService: MachineTechnicalDataService) {
    }

    @Post()
    create(@Body() createMachineTechnicalDateDto: CreateMachineTechnicalDataDto) {
        return this.machineTechnicalDataService.create(createMachineTechnicalDateDto);
    }

    @Get()
    findAll() {
        return this.machineTechnicalDataService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.machineTechnicalDataService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMachineTechnicalDateDto: UpdateMachineTechnicalDataDto) {
        return this.machineTechnicalDataService.update(+id, updateMachineTechnicalDateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.machineTechnicalDataService.remove(+id);
    }
}