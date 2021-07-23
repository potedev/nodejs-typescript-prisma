import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Progress } from './progress'

@Entity()
export class Level extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    name: string;

    @OneToMany(() => Progress, progress => progress.level)
    progresses: Progress[]
}