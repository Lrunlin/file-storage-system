import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserAttributes {
  id: number;
  email: string;
  password: string;
  auth: number;
  state: number;
  name: string;
  description: string;
  create_time: Date;
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserOptionalAttributes = "auth" | "state";
export type UserCreationAttributes = Optional<UserAttributes, UserOptionalAttributes>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: number;
  email!: string;
  password!: string;
  auth!: number;
  state!: number;
  name!: string;
  description!: string;
  create_time!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    return sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "用户ID"
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: false,
      comment: "用户邮箱"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "密码"
    },
    auth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "身份1为管理员0为普通用户"
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "状态1正常0冻结"
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "用户名"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "备注"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "创建时间"
    }
  }, {
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof User;
  }
}
