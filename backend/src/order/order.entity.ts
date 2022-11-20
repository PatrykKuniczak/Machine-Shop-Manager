import {Material} from "src/material/material.entity";
import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";
import {Machine} from "../machine/machine.entity";


@Entity("Order")
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderNumber: number;

    @Column({length: 500})
    description: string;

    @Column()
    detailsNumber: number;

    @Column({nullable: true, type: 'timestamp with time zone'})
    orderExecutionDate: Date

    @ManyToMany(() => Material)
    @JoinTable({name: 'Order_Material'})
    material: Material[];

    @OneToMany(() => User, (user) => user.id)
    orderExecutionUser: User[];

    @ManyToOne(() => Machine, (machine) => machine.id)
    machine: Machine
}