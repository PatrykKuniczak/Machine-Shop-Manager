import { Injectable } from '@nestjs/common';
import { CreatePersonalDatumDto } from './dto/create-personal-datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal-datum.dto';


@Injectable()
export class PersonalDatumService {
  create(createPersonalDatumDto: CreatePersonalDatumDto) {
    return 'This action adds a new personalDatum';
  }

  findAll() {
    return `This action returns all personalDatum`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalDatum`;
  }

  update(id: number, updatePersonalDatumDto: UpdatePersonalDatumDto) {
    return `This action updates a #${id} personalDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalDatum`;
  }
}