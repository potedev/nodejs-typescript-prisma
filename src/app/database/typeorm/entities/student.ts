import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Progress } from './progress'
import { User } from './user'

@Entity()
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToMany(() => Progress, progress => progress.student)
    progresses: Progress[]
}