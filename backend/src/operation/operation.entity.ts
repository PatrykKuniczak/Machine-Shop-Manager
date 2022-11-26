import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Inspection} from "../inspection/inspection.entity";


@Entity("Operation")
export class Operation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @ManyToOne(() => Inspection, (inspection) => inspection.id,
        {cascade: true, onDelete: "CASCADE", nullable: false})
    inspection: Inspection;
}