import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Inspection} from "../inspection/inspection.entity";


@Entity("Part")
export class Part {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @ManyToOne(() => Inspection, (inspection) => inspection.id, {onDelete: "CASCADE"})
    inspection: Inspection
}