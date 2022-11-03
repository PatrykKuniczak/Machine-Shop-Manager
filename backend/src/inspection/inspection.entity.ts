import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Fault} from "../fault/fault.entity";
import {Part} from "../part/part.entity";
import {Operation} from "../operation/operation.entity";


@Entity("inspection")
export class Inspection {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    startDate: Date;

    @Column({nullable: true})
    endDate: Date;

    @Column()
    inspectionState: boolean

    @OneToMany(() => Fault, (fault) => fault.id)
    fault: Fault[]

    @OneToMany(() => Part, (party) => party.id)
    part: Part[]

    @OneToMany(() => Operation, (operation) => operation.id)
    operation: Operation[]
}