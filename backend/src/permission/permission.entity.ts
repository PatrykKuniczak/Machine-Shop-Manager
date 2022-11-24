import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Position} from "../position/position.entity";


@Entity("Permission")
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    viewOrder: boolean;

    @Column()
    sendOrder: boolean;

    @Column()
    viewDrawing: boolean;

    @Column()
    sendDrawing: boolean;

    @Column()
    takeResource: boolean;

    @Column()
    repairing: boolean;

    @OneToMany(() => Position, (position) => position.id, {cascade: true})
    position: Position[];
}