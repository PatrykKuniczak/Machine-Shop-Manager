import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('PersonalDatum')
export class PersonalDatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    surname: string;

    @Column({length: 50})
    birthCity: string;

    @Column()
    birthDate: Date;
}