import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class user extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  login: string;

  @Column
  password: string;

  @Column
  age: number;
}
