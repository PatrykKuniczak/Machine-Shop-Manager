import { Min, MinLength } from "class-validator";


export class CreateHolderDto {
    @MinLength(3)
    name: string;

    @Min(1)
    length: number;

    @Min(1)
    radius: number;

    @MinLength(3)
    type: string;
}