import { Injectable } from '@nestjs/common';
import { CreateHolderDto } from './dto/create-holder.dto';
import { UpdateHolderDto } from './dto/update-holder.dto';


@Injectable()
export class HolderService {
    create(createHoldertDto: CreateHolderDto) {
        return 'This action adds a new holder';
    }
    findAll() {
        return `This action returns all holder`;
    }
        
    findOne(id: number) {
        return `This action returns a #${id} holder`;
    }
        
    update(id: number, updateHolderDto: UpdateHolderDto) {
        return `This action updates a #${id} holder`;
    }
        
    remove(id: number) {
        return `This action removes a #${id} holder`;
    }
}
