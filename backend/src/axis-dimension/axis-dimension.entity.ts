import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {MachineTechnicalData} from "../machine-technical-data/machine-technical-data.entity";


@Entity("AxisDimension")
export class AxisDimension {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("char", {unique: true})
    axis: string;

    @Column("float")
    dimension: number;

    @ManyToOne(() => MachineTechnicalData, (machineTechnicalData) => machineTechnicalData.id, {
        nullable: false,
        onDelete: "CASCADE",
        cascade: true
    })
    machineTechnicalData: MachineTechnicalData;
}