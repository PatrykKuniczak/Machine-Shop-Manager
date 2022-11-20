import {Material} from "../../material/material.entity";
import {User} from "../../user/user.entity";
import {IsPositive, MinDate} from "class-validator";


export class CreateOrderDto {
    @IsPositive()
    orderNumber: number;

    description: string;

    @IsPositive()
    detailsNumber: number;

    @MinDate(new Date())
    orderExecutionDate: Date

    material: Material[];

    orderExecutionEmployee: User[];
}