import fs from "fs";
import path from "path";

class StockFacade {
  constructor(name) {
    this.name = name;
  }

  getAvailability() {
    const filePath = path.join("./data", "stock.json");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        throw new Error(err);
      }
      console.log(JSON.parse(data));
    });
    console.log(this.name);
    return false;
  }
}

export default StockFacade;
