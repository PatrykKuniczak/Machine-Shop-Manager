import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";


@Entity("Message")
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    content: string;

    @ManyToOne(() => User, (user) => user.id, {onDelete: "CASCADE", nullable: false})
    sender: User

    @ManyToOne(() => User, (user) => user.id, {onDelete: "CASCADE", nullable: false})
    addressee: User
}