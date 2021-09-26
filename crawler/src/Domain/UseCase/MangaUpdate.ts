import Manga from "../Entity/Manga";
import MangaRepository from "../Repository/MangaRepository";
import _ from "lodash";
import MangaDTO from "../../DTO/MangaDTO";
import Chapter from "../Entity/Chapter";

export default class MangaUpdate {
  manga: MangaDTO;
  mangaRepository: MangaRepository;
  constructor(manga: MangaDTO, mangaRepository: MangaRepository) {
    this.manga = manga;
    this.mangaRepository = mangaRepository;
  }
  async execute(numberOfChapters: number) {
    const chapters = [];
    const chaptersLinks = await this.mangaRepository.getLastChapters(
      numberOfChapters
    );
    for await (const chapterLink of chaptersLinks) {
      const chapter = {};
      chapter["originUrl"] = chapterLink;
      chapter["identifier"] = _.chain(chapterLink).split("/").last().value();

      const images = await this.mangaRepository.getMangaImagesByChapter(
        chapterLink
      );
      chapter["images"] = images.map((img) => ({ url: img }));

      chapters.push(chapter);
    }

    const unionChapters = _.unionBy(
      this.manga.chapters,
      chapters,
      "identifier"
    );
    this.manga.chapters = unionChapters;
    return this.manga;
  }
}
