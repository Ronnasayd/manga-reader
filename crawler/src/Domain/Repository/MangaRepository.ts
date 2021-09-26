import Chapter from "../Entity/Chapter";
import Manga from "../Entity/Manga";

export default interface MangaRepository {
  getLastChapters(numberOfChapters: number): Promise<string[]>;
  getMangaCover(): Promise<string>;
  getMangaImagesByChapter(link: string): Promise<string[]>;
  getMangaName(): Promise<string>;
  getMangaDescription(): Promise<string>;
  getMangaUrlOrigin(): Promise<string>;
  getMangaChaptersLink(): Promise<string[]>;
}
