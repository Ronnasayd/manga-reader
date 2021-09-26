export default class MangaDTO {
  name: string;
  description: string;
  urlOrigin: string;
  cover: string;
  chapters: any[];
  constructor(
    name: string,
    description: string,
    urlOrigin: string,
    cover: string,
    chapters: any
  ) {
    this.name = name;
    this.description = description;
    this.urlOrigin = urlOrigin;
    this.cover = cover;
    this.chapters = chapters;
  }
}
