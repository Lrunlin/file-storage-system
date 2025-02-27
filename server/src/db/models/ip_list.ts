import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface IpListAttributes {
  id: number;
  ip: string;
  type: number;
  create_time: Date;
}

export type IpListPk = "id";
export type IpListId = IpList[IpListPk];
export type IpListCreationAttributes = IpListAttributes;

export class IpList extends Model<IpListAttributes, IpListCreationAttributes> implements IpListAttributes {
  id!: number;
  ip!: string;
  type!: number;
  create_time!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof IpList {
    return sequelize.define('IpList', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "类型 0是白名单 1是黑名单"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ip_list',
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
  }) as typeof IpList;
  }
}
