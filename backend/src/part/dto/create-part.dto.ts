import {Inspection} from "../../inspection/inspection.entity";
import {IsNotEmpty} from "class-validator";


export class CreatePartDto {
    name: string


    @IsNotEmpty()
    inspection: Inspection
}