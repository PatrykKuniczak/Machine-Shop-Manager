import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('Insert')
export class Insert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    name: string;

    @Column('float')
    length: number;

    @Column('float')
    radius: number;

    @Column({length: 30})
    material: string;
}