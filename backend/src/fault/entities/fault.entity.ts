import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Fault {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string

    @Column()
    occurrenceDate: Date

    @Column()
    state: boolean
}