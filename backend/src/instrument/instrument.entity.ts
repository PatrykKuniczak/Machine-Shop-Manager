import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('Instrument')
export class Instrument {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    length: number;

    @Column('float')
    height: number;

    @Column('float')
    width: string;
}