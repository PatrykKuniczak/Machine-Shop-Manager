import {Injectable} from '@nestjs/common';
import {CreateAxisDimensionDto} from './dto/create-axis-dimension.dto';
import {UpdateAxisDimensionDto} from './dto/update-axis-dimension.dto';


@Injectable()
export class AxisDimensionService {
    create(createAxisDimensionDto: CreateAxisDimensionDto) {
        return 'This action adds a new axisDimension';
    }

    findAll() {
        return `This action returns all axisDimension`;
    }

    findOne(id: number) {
        return `This action returns a #${id} axisDimension`;
    }

    update(id: number, updateAxisDimensionDto: UpdateAxisDimensionDto) {
        return `This action updates a #${id} axisDimension`;
    }

    remove(id: number) {
        return `This action removes a #${id} axisDimension`;
    }
}