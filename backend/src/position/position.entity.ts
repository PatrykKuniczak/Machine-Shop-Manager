import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Permission} from "../permission/permission.entity";


@Entity("Position")
export class Position {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, unique: true})
    name: string;

    @ManyToOne(() => Permission, (permission) => permission.id, {
        nullable: false, onDelete: "CASCADE"
    })
    permission: Permission
}