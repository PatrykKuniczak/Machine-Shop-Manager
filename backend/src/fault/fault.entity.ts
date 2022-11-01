import {IsBoolean, IsNotEmpty, Length, MaxDate, MinDate} from "class-validator";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Inspection} from "../inspection/inspection.entity";


@Entity("fault")
export class Fault {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 50})
    @Length(5, 50)
    title: string;

    @IsNotEmpty()
    @Column("text")
    description: string

    @Column("timestamp with time zone")
    @MinDate(new Date())
    @MaxDate(new Date("2100-01-01"))
    occurrenceDate: Date

    @IsBoolean()
    @Column()
    repairState: boolean

    @ManyToOne(() => Inspection, (inspection) => inspection.id, {onDelete: "CASCADE"})
    inspection: Inspection
}