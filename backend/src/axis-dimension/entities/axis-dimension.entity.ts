import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class AxisDimension {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("char")
    axis: string;

    @Column()
    dimension: number
}