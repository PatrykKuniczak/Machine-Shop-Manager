import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Tool} from "../tool/tool.entity";


@Entity('Insert')
export class Insert {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    name: string;

    @Column('float')
    length: number;

    @Column('float')
    radius: number;

    @Column({length: 30})
    material: string;

    @OneToMany(() => Tool, (tool) => tool.id)
    tool: Tool[];
}