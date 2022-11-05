import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Position} from "../position/position.entity";
import {Message} from "../message/message.entity";
import {PersonalDatum} from "../personal-datum/personal-datum.entity";


@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Position, {onDelete: "CASCADE", cascade: true})
    position: Position;

    @Column("timestamp with time zone")
    hiredDate: Date;

    @OneToMany(() => Message, (message) => message.id, {cascade: true})
    message: Message[]

    @OneToOne(() => PersonalDatum, {onDelete: "CASCADE", cascade: true})
    personalDatum: PersonalDatum;
}