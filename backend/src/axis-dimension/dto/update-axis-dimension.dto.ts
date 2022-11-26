import { PartialType } from '@nestjs/mapped-types';
import { CreateAxisDimensionDto } from './create-axis-dimension.dto';


export class UpdateAxisDimensionDto extends PartialType(CreateAxisDimensionDto) {}