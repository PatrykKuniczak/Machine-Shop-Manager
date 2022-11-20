import {MachineTechnicalData} from "../../machine-technical-data/machine-technical-data.entity";
import {Inspection} from "../../inspection/inspection.entity";
import {Order} from "../../order/order.entity";
import {Fault} from "../../fault/fault.entity";
import {User} from "../../user/user.entity";
import {Permission} from "../../permission/permission.entity";


export class CreateMachineDto {
    name: string;

    description: string;

    deliveredDate: Date;

    machineTechnicalData: MachineTechnicalData

    inspection: Inspection[]

    order: Order[]

    fault: Fault[]

    operator: User[]

    permission: Permission[]
}