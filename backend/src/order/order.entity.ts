import {Material} from "src/material/material.entity";
import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";
import {Machine} from "../machine/machine.entity";
import {Instrument} from "../instrument/instrument.entity";
import {Tool} from "../tool/tool.entity";


@Entity("Order")
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    title: string;

    @Column()
    orderNumber: number;

    @Column({length: 500, nullable: true})
    description: string;

    @Column("smallint")
    detailsNumber: number;

    @Column({type: 'timestamp with time zone', nullable: true})
    orderExecutionDate: Date;

    @ManyToOne(() => Machine, (machine) => machine.id, {nullable: false, onDelete: "CASCADE", cascade: true})
    machine: Machine;

    @OneToMany(() => User, (user) => user.id)
    orderExecutionUser: User[];

    @ManyToMany(() => Material)
    @JoinTable({name: 'Order_Material'})
    material: Material[];

    @ManyToMany(() => Instrument, {onDelete: "SET NULL"})
    @JoinTable({name: 'Order_Instrument'})
    instrument: Instrument[];

    @ManyToMany(() => Tool)
    @JoinTable({name: 'Order_Tool'})
    tool: Tool[];
}