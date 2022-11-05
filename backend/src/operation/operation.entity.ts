import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Inspection} from "../inspection/inspection.entity";


@Entity("Operation")
export class Operation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Inspection, (inspection) => inspection.id, {onDelete: "CASCADE"})
    inspection: Inspection
}