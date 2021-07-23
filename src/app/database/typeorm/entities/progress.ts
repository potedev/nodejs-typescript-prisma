import { Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from "typeorm";
import { Skill } from './skill'
import { Student } from './student'
import { Level } from './level'

@Entity()
export class Progress extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Skill, skill => skill.progresses)
    skill: Skill

    @ManyToOne(() => Student, student => student.progresses)
    student: Student

    @ManyToOne(() => Level, level => level.progresses)
    level: Level
}