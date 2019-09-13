/* eslint-disable */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {UserDTO} from "../../types/dto";

@Entity({name: 'users'})
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  username: string;

  @Column({name: 'something_else', type: 'varchar'})
  somethingElse: string;

  constructor(userdata: UserDTO) {
    this.username = userdata && userdata.username;
    this.somethingElse = userdata && userdata.somethingElse
  }
}
