import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('Instrument')
export class Instrument {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;
    
    @Column('float')
    length: number;

    @Column('float')
    height: number;

    @Column('float')
    width: string;
}