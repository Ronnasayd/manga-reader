import _ from "lodash";
import Image from "./Image";
import debug from "debug";

const log = debug("MangaHandle:Chapter");

export default class Chapter {
  identifier: string;
  images: Image[];
  originUrl: string;
  identifierSlug: string;
  constructor(identifier: string, originUrl: string) {
    this.identifier = identifier;
    this.identifierSlug = _.snakeCase(this.identifier);
    this.originUrl = originUrl;
    this.images = [];
    log(`creating chapter ${this.identifier}`);
  }
  addImage(image: Image) {
    log(`adding image ${image.url} ...`);
    this.images.push(image);
  }
  removeImage(imageUrl: string) {
    log(`removing image ${imageUrl} ...`);
    _.remove(this.images, { url: imageUrl });
  }
  replaceImages(images: Image[]) {
    log(`replacing images ...`);
    this.images = images;
  }
}
