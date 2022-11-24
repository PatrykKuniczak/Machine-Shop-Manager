import {IsAlpha, IsPositive, IsUppercase} from "class-validator";
import {MachineTechnicalData} from "../../machine-technical-data/machine-technical-data.entity";


export class CreateAxisDimensionDto {
    @IsAlpha()
    @IsUppercase()
    axis: string;

    @IsPositive()
    dimension: number;

    machineTechnicalData: MachineTechnicalData;
}