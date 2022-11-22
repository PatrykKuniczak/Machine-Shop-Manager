import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Inspection} from "../inspection/inspection.entity";


@Entity("Part")
export class Part {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string

    @ManyToOne(() => Inspection, (inspection) => inspection.id, {cascade: true, onDelete: "CASCADE"})
    inspection: Inspection
}