import type { Sequelize } from "sequelize";
import { IpList as _IpList } from "./ip_list";
import type { IpListAttributes, IpListCreationAttributes } from "./ip_list";
import { Key as _Key } from "./key";
import type { KeyAttributes, KeyCreationAttributes } from "./key";
import { Project as _Project } from "./project";
import type { ProjectAttributes, ProjectCreationAttributes } from "./project";
import { User as _User } from "./user";
import type { UserAttributes, UserCreationAttributes } from "./user";

export {
  _IpList as IpList,
  _Key as Key,
  _Project as Project,
  _User as User,
};

export type {
  IpListAttributes,
  IpListCreationAttributes,
  KeyAttributes,
  KeyCreationAttributes,
  ProjectAttributes,
  ProjectCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const IpList = _IpList.initModel(sequelize);
  const Key = _Key.initModel(sequelize);
  const Project = _Project.initModel(sequelize);
  const User = _User.initModel(sequelize);


  return {
    IpList: IpList,
    Key: Key,
    Project: Project,
    User: User,
  };
}
