import {Injectable} from '@nestjs/common';
import {CreateMachineTechnicalDataDto} from './dto/create-machine-technical-data.dto';
import {UpdateMachineTechnicalDataDto} from './dto/update-machine-technical-data.dto';


@Injectable()
export class MachineTechnicalDataService {
    create(createMachineTechnicalDataDto: CreateMachineTechnicalDataDto) {
        return 'This action adds a new machineTechnicalDate';
    }

    findAll() {
        return `This action returns all machineTechnicalDate`;
    }

    findOne(id: number) {
        return `This action returns a #${id} machineTechnicalDate`;
    }

    update(id: number, updateMachineTechnicalDataDto: UpdateMachineTechnicalDataDto) {
        return `This action updates a #${id} machineTechnicalDate`;
    }

    remove(id: number) {
        return `This action removes a #${id} machineTechnicalDate`;
    }
}