import _ from "lodash";
import Chapter from "./Chapter";
import debug from "debug";

const log = debug("MangaHandle:Manga");

export default class Manga {
  name: string;
  description: string;
  urlOrigin: string;
  chapters: Chapter[];
  cover: string;
  nameSlug: string;
  constructor(
    name: string,
    description: string,
    urlOrigin: string,
    cover: string
  ) {
    this.name = name;
    this.nameSlug = _.snakeCase(this.name);
    this.description = description;
    this.urlOrigin = urlOrigin;
    this.cover = cover;
    this.chapters = [];
  }
  addChapter(chapter: Chapter) {
    log(`adding ${chapter.identifier} of ${this.name}`);
    this.chapters.push(chapter);
  }
  removeChapter(chapterIdentifier: string) {
    log(`removing ${chapterIdentifier} of ${this.name}`);
    _.remove(this.chapters, { identifier: chapterIdentifier });
  }
  replaceChapters(chapters: Chapter[]) {
    log(`replacing chapters of ${this.name}`);
    this.chapters = chapters;
  }
}
