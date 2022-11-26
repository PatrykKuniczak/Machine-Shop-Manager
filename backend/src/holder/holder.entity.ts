import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Tool} from "../tool/tool.entity";


@Entity('Holder')
export class Holder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column('float')
    length: number;

    @Column('float')
    radius: number;

    @Column({length: 50})
    type: string;

    @OneToMany(() => Tool, (tool) => tool.id)
    tool: Tool[];
}