import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface KeyAttributes {
  id: number;
  user_id: number;
  AccessKeyID: string;
  AccessKeySecret: string;
  create_time: Date;
  project_id: number;
}

export type KeyPk = "id";
export type KeyId = Key[KeyPk];
export type KeyCreationAttributes = KeyAttributes;

export class Key extends Model<KeyAttributes, KeyCreationAttributes> implements KeyAttributes {
  id!: number;
  user_id!: number;
  AccessKeyID!: string;
  AccessKeySecret!: string;
  create_time!: Date;
  project_id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Key {
    return sequelize.define('Key', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "用户ID"
    },
    AccessKeyID: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    AccessKeySecret: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    project_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "对应哪个项目"
    }
  }, {
    tableName: 'key',
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
  }) as typeof Key;
  }
}
