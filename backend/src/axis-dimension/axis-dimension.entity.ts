import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("axisDimension")
export class AxisDimension {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("char", {unique: true})
    axis: string;

    @Column("smallint")
    dimension: number
}