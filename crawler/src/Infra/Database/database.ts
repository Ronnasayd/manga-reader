import fs from "fs";

export default class JSONDatabase {
  database: any;
  constructor(private filePath: string) {
    this.database = JSON.parse(fs.readFileSync(this.filePath).toString());
  }
  read() {
    return this.database;
  }
  write() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.database));
  }
}
