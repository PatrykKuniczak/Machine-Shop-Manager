import {Inspection} from "../../inspection/inspection.entity";
import {MinLength} from "class-validator";


export class CreatePartDto {
    @MinLength(3)
    name: string

    inspection: Inspection
}