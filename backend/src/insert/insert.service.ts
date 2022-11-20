import { Injectable } from '@nestjs/common';
import { CreateInsertDto } from './dto/create-insert.dto';
import { UpdateInsertDto } from './dto/update-insert.dto';


@Injectable()
export class InsertService {
    create(createInsertDto: CreateInsertDto) {
        return 'This action adds a new insert';
    }
    findAll() {
        return `This action returns all insert`;
    }
        
    findOne(id: number) {
        return `This action returns a #${id} insert`;
    }
        
    update(id: number, updateInsertDto: UpdateInsertDto) {
        return `This action updates a #${id} insert`;
    }
        
    remove(id: number) {
        return `This action removes a #${id} insert`;
    }
}
