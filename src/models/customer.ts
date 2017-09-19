import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;
}
