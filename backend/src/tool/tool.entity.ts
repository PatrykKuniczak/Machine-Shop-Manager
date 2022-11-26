import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Insert} from '../insert/insert.entity';
import {Holder} from '../holder/holder.entity';


@Entity('Tool')
export class Tool {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    length: number;

    @Column('float')
    radius: number;

    @Column('smallint')
    insertsNumber: number;

    @ManyToOne(() => Insert, (insert) => insert.id, {onDelete: "CASCADE", cascade: true, nullable: false})
    insert: Insert;

    @ManyToOne(() => Holder, (holder) => holder.id, {onDelete: "CASCADE", cascade: true, nullable: false})
    holder: Holder;
}