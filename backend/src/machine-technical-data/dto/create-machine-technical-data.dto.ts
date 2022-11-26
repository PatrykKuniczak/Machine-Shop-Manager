import {Max, MaxDate, Min, MinDate, MinLength} from "class-validator";
import {AxisDimension} from "../../axis-dimension/axis-dimension.entity";


export class CreateMachineTechnicalDataDto {
    @MinLength(3)
    machineType: string;

    @MinLength(3)
    driverType: string;

    @MinDate(new Date("1900-01-01"))
    @MaxDate(new Date())
    productionDate: Date;

    workSpace: AxisDimension[];
}