import {Min, MinLength} from "class-validator";


export class CreateInstrumentDto {
    @MinLength(5)
    name: string;
    
    @Min(1)
    length: number;

    @Min(1)
    height: number;

    @Min(1)
    width: number;
}