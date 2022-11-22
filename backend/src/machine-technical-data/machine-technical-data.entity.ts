import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AxisDimension} from "../axis-dimension/axis-dimension.entity";


@Entity("MachineTechnicalData")
export class MachineTechnicalData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("smallint")
    axlesNumber: number;

    @Column({length: 50})
    machineType: string;

    @Column({length: 50})
    driverType: string;

    @Column({type: 'timestamp with time zone'})
    productionDate: Date;

    @OneToMany(() => AxisDimension, (axisDimension) => axisDimension.id, {nullable: false})
    workSpace: AxisDimension[];
}