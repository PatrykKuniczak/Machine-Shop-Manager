import {IsAlpha, IsUppercase} from "class-validator";


export class CreateAxisDimensionDto {
    @IsAlpha()
    @IsUppercase()
    axis: string;
}