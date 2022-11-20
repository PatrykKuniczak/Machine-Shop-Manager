import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {AxisDimension} from "../axis-dimension/axis-dimension.entity";


@Entity("MachineTechnicalData")
export class MachineTechnicalData {
    @PrimaryGeneratedColumn()
    id: number

    @Column("smallint")
    axlesNumber: number;

    @Column({length: 50})
    machineType: string;

    @Column({length: 50})
    driverType: string;

    @ManyToMany(() => AxisDimension)
    @JoinTable({name: 'MachineTechnicalData_AxisDimension'})
    workSpace: AxisDimension[];

    @Column({type: 'timestamp with time zone'})
    productionDate: Date;
}