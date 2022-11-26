import {Material} from "../../material/material.entity";
import {User} from "../../user/user.entity";
import {MaxDate, Min, MinDate, MinLength} from "class-validator";
import {Machine} from "../../machine/machine.entity";
import {Instrument} from "../../instrument/instrument.entity";
import {Tool} from "../../tool/tool.entity";


export class CreateOrderDto {
    @MinLength(3)
    title: string;

    @Min(1)
    orderNumber: number;

    description: string;

    @Min(1)
    detailsNumber: number;

    @MinDate(new Date())
    @MaxDate(new Date("2100-01-01"))
    orderExecutionDate: Date;

    machine: Machine;

    orderExecutionUser: User[];

    material: Material[];

    instrument: Instrument[];

    tool: Tool[];
}