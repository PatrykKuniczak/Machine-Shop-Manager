import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsNotEmpty} from "class-validator";
import {Inspection} from "../inspection/inspection.entity";


@Entity("part")
export class Part {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string

    @ManyToOne(() => Inspection, (inspection) => inspection.id, {onDelete: "CASCADE"})
    inspection: Inspection
}