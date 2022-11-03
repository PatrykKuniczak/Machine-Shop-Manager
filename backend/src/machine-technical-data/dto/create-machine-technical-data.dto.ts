import {IsNotEmpty, Length, Max, MaxDate, MinDate} from "class-validator";
import {AxisDimension} from "../../axis-dimension/axis-dimension.entity";


export class CreateMachineTechnicalDataDto {
    @Max(20)
    axlesNumber: number;

    @Length(3, 50)
    machineType: string;

    @Length(3, 50)
    driverType: string;

    @IsNotEmpty()
    workSpace: AxisDimension[];

    @MinDate(new Date("1900-01-01"))
    @MaxDate(new Date())
    productionDate: Date;
}