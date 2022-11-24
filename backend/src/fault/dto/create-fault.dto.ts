import {MaxDate, MinDate, MinLength} from "class-validator";
import {Inspection} from "../../inspection/inspection.entity";


export class CreateFaultDto {
    @MinLength(5)
    title: string;

    description: string;

    @MinDate(new Date())
    @MaxDate(new Date("2100-01-01"))
    occurrenceDate: Date;

    repairState: boolean;

    inspection: Inspection;
}