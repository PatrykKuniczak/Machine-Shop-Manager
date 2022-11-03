import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Inspection} from "../inspection/inspection.entity";


@Entity("fault")
export class Fault {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    title: string;

    @Column("text", {nullable: true})
    description: string

    @Column("timestamp with time zone")
    occurrenceDate: Date

    @Column()
    repairState: boolean

    @ManyToOne(() => Inspection, (inspection) => inspection.id, {onDelete: "CASCADE", nullable: false})
    inspection: Inspection
}