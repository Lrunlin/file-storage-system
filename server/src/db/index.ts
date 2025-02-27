import sequelizeConfig from "./config";
import { initModels } from "./models/init-models";

const Models = initModels(sequelizeConfig);

export default Models;

