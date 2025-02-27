import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProjectAttributes {
  id: number;
  name: string;
  description: string;
  user_id: number;
  private: number;
  create_time: Date;
}

export type ProjectPk = "id";
export type ProjectId = Project[ProjectPk];
export type ProjectCreationAttributes = ProjectAttributes;

export class Project extends Model<ProjectAttributes, ProjectCreationAttributes> implements ProjectAttributes {
  id!: number;
  name!: string;
  description!: string;
  user_id!: number;
  private!: number;
  create_time!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Project {
    return sequelize.define('Project', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "名称"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "介绍"
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "所属用户ID"
    },
    private: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "是否私人项目1是0否"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "创建时间"
    }
  }, {
    tableName: 'project',
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
  }) as typeof Project;
  }
}
