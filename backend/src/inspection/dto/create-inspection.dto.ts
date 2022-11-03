import {MaxDate, MinDate} from "class-validator";
import {Fault} from "../../fault/fault.entity";
import {Part} from "../../part/part.entity";
import {Operation} from "../../operation/operation.entity";


export class CreateInspectionDto {
    @MinDate(new Date())
    @MaxDate(new Date("2100-01-01"))
    endDate: Date;

    inspectionState: boolean

    fault: Fault[]

    part: Part[]

    operation: Operation[]
}
