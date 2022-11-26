import {IsAlpha, Min, IsUppercase} from "class-validator";
import {MachineTechnicalData} from "../../machine-technical-data/machine-technical-data.entity";


export class CreateAxisDimensionDto {
    @IsAlpha()
    @IsUppercase()
    axis: string;

    @Min(1)
    dimension: number;

    machineTechnicalData: MachineTechnicalData;
}