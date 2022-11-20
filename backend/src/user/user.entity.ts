import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Position} from "../position/position.entity";
import {Message} from "../message/message.entity";
import {PersonalDatum} from "../personal-datum/personal-datum.entity";
import {Order} from "../order/order.entity";


@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp with time zone")
    hiredDate: Date;

    @OneToOne(() => Position, {onDelete: "CASCADE", cascade: true})
    position: Position;

    @OneToMany(() => Message, (message) => message.id, {cascade: true})
    message: Message[]

    @OneToOne(() => PersonalDatum, {onDelete: "CASCADE", cascade: true})
    personalDatum: PersonalDatum;

    @ManyToOne(() => Order, (order) => order.id)
    order: Order;
}