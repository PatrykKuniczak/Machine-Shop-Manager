import {IsNotEmpty, MinLength} from "class-validator";
import {Inspection} from "../../inspection/inspection.entity";


export class CreateOperationDto {
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    inspection: Inspection
}