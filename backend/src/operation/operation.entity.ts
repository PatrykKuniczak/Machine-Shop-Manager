import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {MinLength} from "class-validator";
import {Inspection} from "../inspection/inspection.entity";


@Entity("operation")
export class Operation {
    @PrimaryGeneratedColumn()
    id: number;

    @MinLength(10)
    @Column()
    name: string;

    @ManyToOne(() => Inspection, (inspection) => inspection.id, {onDelete: "CASCADE"})
    inspection: Inspection
}