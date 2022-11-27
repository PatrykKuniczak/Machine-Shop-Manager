import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Position} from "../position/position.entity";
import {Message} from "../message/message.entity";
import {PersonalDatum} from "../personal-datum/personal-datum.entity";


@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    login: string;

    @Column({length: 100})
    password: string;

    @Column({length: 254})
    email: string;

    @Column("timestamp with time zone")
    hiredDate: Date;

    @OneToOne(() => PersonalDatum, {nullable: false})
    @JoinColumn()
    personalDatum: PersonalDatum;

    @ManyToOne(() => Position, (position) => position.id, {cascade: true, nullable: false})
    position: Position;

    @OneToMany(() => Message, (message) => message.id, {cascade: true})
    message: Message[];
}