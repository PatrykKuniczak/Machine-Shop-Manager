import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Fault} from "../fault/fault.entity";
import {Part} from "../part/part.entity";
import {Operation} from "../operation/operation.entity";
import {Machine} from "../machine/machine.entity";


@Entity("Inspection")
export class Inspection {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    startDate: Date;

    @Column("timestamp with time zone", {nullable: true})
    endDate: Date;

    @Column()
    state: boolean;

    @ManyToOne(() => Machine, (machine) => machine.id, {cascade: true, onDelete: "CASCADE", nullable: false})
    machine: Machine;

    @OneToMany(() => Fault, (fault) => fault.id, {cascade: true})
    fault: Fault[];

    @OneToMany(() => Part, (party) => party.id, {cascade: true})
    part: Part[];

    @OneToMany(() => Operation, (operation) => operation.id, {cascade: true})
    operation: Operation[];
}