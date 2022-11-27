import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Permission} from "../permission/permission.entity";
import {User} from "../user/user.entity";


@Entity("Position")
export class Position {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, unique: true})
    name: string;

    @ManyToOne(() => Permission, (permission) => permission.id, {nullable: false, cascade: true})
    permission: Permission;

    @OneToMany(() => User, (user) => user.id)
    user: User[]
}