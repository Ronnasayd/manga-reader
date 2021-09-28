import Chapter from "../Entity/Chapter";
import Image from "../Entity/Image";
import Manga from "../Entity/Manga";
import MangaRepository from "../Repository/MangaRepository";
import _ from "lodash";
import debug from "debug";

const log = debug("MangaHandle:MangaCreator");

export default class MangaCreator {
  mangaRepository: MangaRepository;
  constructor(mangaRepository: MangaRepository) {
    this.mangaRepository = mangaRepository;
  }
  async execute(): Promise<Manga> {
    const name = await this.mangaRepository.getMangaName();
    const description = await this.mangaRepository.getMangaDescription();
    const urlOrigin = await this.mangaRepository.getMangaUrlOrigin();
    const cover = await this.mangaRepository.getMangaCover();

    log(`creating manga ${name} ...`);
    const manga = new Manga(name, description, urlOrigin, cover);

    log(`getting links ... of ${manga.name}`);
    const chaptersLinks = await this.mangaRepository.getMangaChaptersLink();

    for await (const chapterLink of chaptersLinks) {
      try {
        log(`getting images of ${chapterLink}`);
        const chapter = new Chapter(
          _.chain(chapterLink).split("/").last().value(),
          chapterLink
        );
        const images = await this.mangaRepository.getMangaImagesByChapter(
          chapterLink
        );
        const imagesInstances = images?.map((image) => new Image(image));
        chapter.replaceImages(imagesInstances);
        manga.addChapter(chapter);
      } catch (error) {
        log(error);
      }
    }
    return manga;
  }
}
