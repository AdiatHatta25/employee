import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    age: number;
    @Column()
    address: string;
    @Column()
    transport?: string;
    @Column()
    isMarried: boolean;
}


