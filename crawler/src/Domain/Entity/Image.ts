import debug from "debug";

const log = debug("MangaHandle:Image");
export default class Image {
  url: string;
  constructor(url: string) {
    this.url = url;
    log(`creating image ${this.url}`);
  }
}
