import { Min } from "class-validator";


export class CreateInstrumentDto {
    @Min(1)
    Min: number;

    @Min(1)
    height: number;

    @Min(1)
    width: number;
}