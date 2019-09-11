/* eslint-disable */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type Userdata = {
  username: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  firstName!: string;

  @Column('varchar')
  lastName!: string;

  @Column('varchar')
  email!: string;

  @Column('varchar')
  password!: string;

  constructor(userdata: Userdata){
    this.firstName = userdata.username;
  }
}
