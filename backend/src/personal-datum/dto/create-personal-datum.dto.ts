import {MaxDate, MinDate, MinLength} from "class-validator";


export class CreatePersonalDatumDto {
    @MinLength(3)
    name: string;

    @MinLength(3)
    surname: string;

    @MinLength(3)
    birthCity: string;

    @MinDate(new Date("1900-01-01"))
    @MaxDate(new Date())
    birthDate: Date;
}