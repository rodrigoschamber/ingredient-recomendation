import fs from "fs";
import IRepository from "./IRepository.js";

export default class JsonRepository extends IRepository {
  constructor(filePath) {
    super();
    this.filePath = filePath;
  }

  exists(value) {
    const data = JSON.parse(fs.readFileSync(this.filePath, "utf8"));
    return !!data.filter((item) => item.name === value)[0]?.name;
  }
}
