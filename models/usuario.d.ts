import { Sequelize, Model, Optional } from 'sequelize';
interface UsuarioAttributes {
    id: number;
    nombre: string;
    email: string;
    password: string;
}
interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> {
}
declare class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
    id: number;
    nombre: string;
    email: string;
    password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    static associate(models: any): void;
}
declare const initUsuarioModel: (sequelize: Sequelize) => typeof Usuario;
export { Usuario, initUsuarioModel };
