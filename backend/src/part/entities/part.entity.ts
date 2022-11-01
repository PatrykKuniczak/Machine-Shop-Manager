import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Part {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string
}