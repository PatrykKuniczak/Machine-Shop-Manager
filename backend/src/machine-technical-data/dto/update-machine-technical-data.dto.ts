import { PartialType } from '@nestjs/mapped-types';
import { CreateMachineTechnicalDataDto } from './create-machine-technical-data.dto';


export class UpdateMachineTechnicalDataDto extends PartialType(CreateMachineTechnicalDataDto) {}