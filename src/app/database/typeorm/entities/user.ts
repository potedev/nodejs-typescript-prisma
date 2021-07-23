import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;
}