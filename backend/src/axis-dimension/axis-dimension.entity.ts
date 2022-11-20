import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("AxisDimension")
export class AxisDimension {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("char", {unique: true})
    axis: string;

    @Column("float")
    dimension: number
}