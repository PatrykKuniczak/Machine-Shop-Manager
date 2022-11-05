import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";


@Entity("Material")
export class Material {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("smallint")
    isoNumber: number;

    @Column()
    metalAlloy: string;

    @ManyToMany(() => User)
    @JoinTable({name: "MaterialUser"})
    takenBy: User[]

    @Column("timestamp with time zone")
    takenDate: Date;

    @Column("timestamp with time zone")
    boughtDate: Date;
}