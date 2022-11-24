import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('Holder')
export class Holder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    name: string;

    @Column('float')
    length: number;

    @Column('float')
    radius: number;

    @Column({length: 30})
    type: string;
}