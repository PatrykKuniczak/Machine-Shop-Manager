import {Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsBoolean, MaxDate, MinDate} from "class-validator";
import {Fault} from "../fault/fault.entity";
import {Part} from "../part/part.entity";
import {Operation} from "../operation/operation.entity";


@Entity("inspection")
export class Inspection {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    startDate: Date;

    @MinDate(new Date())
    @MaxDate(new Date("2100-01-01"))
    @Column()
    endDate: Date;

    @IsBoolean()
    @Column()
    inspectionState: boolean

    @OneToMany(() => Fault, (fault) => fault.id)
    fault: Fault[]

    @OneToMany(() => Part, (party) => party.id)
    part: Part[]

    @OneToMany(() => Operation, (operation) => operation.id)
    operation: Operation[]
}