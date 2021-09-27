import axios from "axios";
import cheerio from "cheerio";
import _ from "lodash";
import Chapter from "../../Domain/Entity/Chapter";
import MangaRepository from "../../Domain/Repository/MangaRepository";
import decrypt from "../../reader";

export default class MangaLivreRepository implements MangaRepository {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  async getLastChapters(numberOfChapters: number): Promise<string[]> {
    const chapters = [];
    const id = _.chain(this.url).split("/").last().value();
    let page = 1;
    let flag = true;
    while (flag) {
      const url = `https://mangalivre.net/series/chapters_list.json?page=${page}&id_serie=${id}`;
      const response = await axios.get(url);
      for (const chapter of response.data.chapters) {
        const link = _.chain(chapter.releases).values().first().value().link;
        chapters.push(`https://mangalivre.net/${link}`);
        if (chapters.length >= numberOfChapters) {
          flag = false;
          break;
        }
      }
      page++;
    }

    return chapters;
  }
  async getMangaCover(): Promise<string> {
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);
    return $("#series-data > div.series-img > div.cover > img").attr("src");
  }
  async getMangaImagesByChapter(link: string): Promise<string[]> {
    const regexToken = /token=([a-z0-9]+)&/;
    const regexReaderToken = /new Reader.+"(.+)"/;
    const id = _.chain(link).split("/").nth(-2).value();

    const response = await axios.get(link);
    const [, readerToken] = response.data.match(regexReaderToken);

    const $ = cheerio.load(response.data);
    const scripts = $("script")
      .toArray()
      .map((s) => $(s).attr("src"));
    const compact = _.compact(scripts);
    const reader = _.first(_.filter(compact, (e) => e.includes("token")));
    const [, token] = reader.match(regexToken);

    const key = decrypt(token, readerToken, id);

    const response2 = await axios.get(
      `https://mangalivre.net/leitor/pages/${id}.json?key=${key}`
    );

    return response2.data.images;
  }
  async getMangaName(): Promise<string> {
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);
    return $(
      "#series-data > div.series-info.touchcarousel > span.series-title > h1"
    ).text();
  }
  async getMangaDescription(): Promise<string> {
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);
    return $(
      "#series-data > div.series-info.touchcarousel > span.series-desc > span"
    ).text();
  }
  async getMangaUrlOrigin(): Promise<string> {
    return this.url;
  }
  async getMangaChaptersLink(): Promise<string[]> {
    const chapters = [];
    const id = _.chain(this.url).split("/").last().value();
    let page = 1;
    while (true) {
      const url = `https://mangalivre.net/series/chapters_list.json?page=${page}&id_serie=${id}`;
      const response = await axios.get(url);
      if (!response.data.chapters) {
        break;
      }
      for (const chapter of response.data.chapters) {
        const link = _.chain(chapter.releases).values().first().value().link;
        chapters.push(`https://mangalivre.net/${link}`);
      }
      page++;
    }

    return chapters;
  }
}
