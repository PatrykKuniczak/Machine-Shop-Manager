import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Position} from "../position/position.entity";
import {Message} from "../message/message.entity";
import {PersonalDatum} from "../personal-datum/personal-datum.entity";


@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp with time zone")
    hiredDate: Date;

    @OneToOne(() => Position, {onDelete: "CASCADE", cascade: true, nullable: false})
    @JoinColumn()
    position: Position;

    @OneToOne(() => PersonalDatum, {onDelete: "CASCADE", cascade: true, nullable: false})
    @JoinColumn()
    personalDatum: PersonalDatum;

    @OneToMany(() => Message, (message) => message.id, {cascade: true})
    message: Message[];
}