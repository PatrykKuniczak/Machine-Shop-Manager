import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";


@Entity("Material")
export class Material {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("char")
    isoClass: string;

    @Column({length: 2, unique: true})
    isoSubGroup: string;

    @Column({unique: true})
    metalAlloy: string;

    @Column("smallint")
    amount: number;

    @Column("timestamp with time zone")
    takenDate: Date;

    @Column("timestamp with time zone")
    boughtDate: Date;

    @ManyToMany(() => User)
    @JoinTable({name: "MaterialUser"})
    takenBy: User[];
}