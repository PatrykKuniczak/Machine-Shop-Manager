import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {MinLength} from "class-validator";


@Entity("operation")
export class Operation {
    @PrimaryGeneratedColumn()
    id: number;

    @MinLength(10)
    @Column()
    name: string;
}