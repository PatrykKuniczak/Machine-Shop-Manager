import {MachineTechnicalData} from "../../machine-technical-data/machine-technical-data.entity";
import {Inspection} from "../../inspection/inspection.entity";
import {Order} from "../../order/order.entity";
import {User} from "../../user/user.entity";
import {Permission} from "../../permission/permission.entity";


export class CreateMachineDto {
    name: string;

    description: string;

    deliveredDate: Date;

    machineTechnicalData: MachineTechnicalData;

    inspection: Inspection[];

    order: Order[];

    operator: User[];

    permission: Permission[];
}