import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {MachineTechnicalData} from "../machine-technical-data/machine-technical-data.entity";
import {IsAlpha, IsNotEmpty, MaxLength} from "class-validator";


@Entity("axisDimension")
export class AxisDimension {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column("char")
    @MaxLength(1)
    @IsAlpha()
    axis: string;

    @IsNotEmpty()
    @ManyToOne(() => MachineTechnicalData, (MTD) => MTD.id, {onDelete: 'CASCADE', nullable: false})
    machineTechnicalDate: MachineTechnicalData
}