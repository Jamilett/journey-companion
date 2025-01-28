import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "users" })
class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false, // Especifica que esta columna no puede ser nula
  })
  name!: string;
}

export default User;