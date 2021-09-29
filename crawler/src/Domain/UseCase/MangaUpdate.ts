import Manga from "../Entity/Manga";
import MangaRepository from "../Repository/MangaRepository";
import _ from "lodash";
import MangaDTO from "../../DTO/MangaDTO";
import Chapter from "../Entity/Chapter";

export default class MangaUpdate {
  mangaRepository: MangaRepository;
  constructor(mangaRepository: MangaRepository) {
    this.mangaRepository = mangaRepository;
  }
  async execute(numberOfChapters: number) {
    const chapters = [];
    const chaptersLinks = await this.mangaRepository.getLastChapters(
      numberOfChapters
    );
    for await (const chapterLink of chaptersLinks) {
      const chapter = new Chapter(
        _.chain(chapterLink).split("/").last().value(),
        chapterLink
      );

      const images = await this.mangaRepository.getMangaImagesByChapter(
        chapterLink
      );
      chapter.replaceImages(images.map((img) => ({ url: img })));

      chapters.push(chapter);
    }

    return chapters;
  }
}
