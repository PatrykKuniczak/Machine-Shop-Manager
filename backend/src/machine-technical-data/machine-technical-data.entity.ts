import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AxisDimension} from "../axis-dimension/axis-dimension.entity";
import {IsNotEmpty, Length, Max, MaxDate, MinDate} from "class-validator";


@Entity("machineTechnicalData")
export class MachineTechnicalData {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column("smallint")
    @Max(20)
    axlesNumber: number;

    @IsNotEmpty()
    @Length(3, 50)
    @Column({type: "varchar", length: 50})
    machineType: string;

    @IsNotEmpty()
    @Length(3, 50)
    @Column({type: "varchar", length: 50})
    driverType: string;

    @IsNotEmpty()
    @OneToMany(() => AxisDimension, (AD) => AD.id, {nullable: false})
    workSpace: AxisDimension[];

    @MinDate(new Date())
    @MaxDate(new Date("2100-01-01"))
    @Column({type: 'timestamp with time zone'})
    productionDate: Date;
}