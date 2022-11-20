import { Column, Entity, OneToOne, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Insert } from '../insert/insert.entity';
import { Holder } from '../holder/holder.entity';


@Entity('Tool')
export class Tool {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    length: number;

    @Column('float')
    radius: number;

    @Column('smallint')
    insertNumber: number;

    @OneToOne(() => Insert, (insert) => insert.id, { onDelete: "CASCADE" })
    @JoinTable()
    insert: Insert;

    @OneToOne(() => Holder, (holder) => holder.id, { onDelete: "CASCADE" })
    @JoinTable()
    holder: Holder;
}