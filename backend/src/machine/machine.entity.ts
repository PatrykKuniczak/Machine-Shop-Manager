import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {MachineTechnicalData} from "../machine-technical-data/machine-technical-data.entity";
import {Inspection} from "../inspection/inspection.entity";
import {Order} from "../order/order.entity";
import {Fault} from "src/fault/fault.entity";
import {User} from "src/user/user.entity";
import {Permission} from "../permission/permission.entity";


@Entity("Machine")
export class Machine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 150})
    description: string;

    @Column("timestamp with time zone")
    deliveredDate: Date;

    @OneToOne(() => MachineTechnicalData)
    @JoinColumn()
    machineTechnicalData: MachineTechnicalData

    @OneToMany(() => Inspection, (inspection) => inspection.id)
    inspection: Inspection[]

    @OneToMany(() => Order, (order) => order.id)
    order: Order[]

    @OneToMany(() => Fault, (fault) => fault.id)
    fault: Fault[]

    @ManyToMany(() => User)
    @JoinTable({name: "Machine_User"})
    operator: User[]

    @ManyToMany(() => Permission)
    @JoinTable({name: "Machine_Permission"})
    permission: Permission[]
}