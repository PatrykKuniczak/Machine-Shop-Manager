import {MinDate, MinLength} from "class-validator";


export class CreatePersonalDatumDto {
    @MinLength(3)
    name: string;

    @MinLength(3)
    surname: string;

    @MinLength(3)
    birthCity: string;

    @MinDate(new Date())
    birthDate: Date;
}