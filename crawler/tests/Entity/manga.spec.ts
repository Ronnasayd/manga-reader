import Chapter from "../../src/Domain/Entity/Chapter";
import Image from "../../src/Domain/Entity/Image";
import Manga from "../../src/Domain/Entity/Manga";

describe("Tests for entities", () => {
  test("Create a Manga instance", () => {
    const nagatoro = new Manga(
      "Ijiranaide, Nagatoro-san",
      "Nagatoro é uma menina de primeiro ano na escola que adora fazer bullying com seu Senpai. Mas ele aceita isso, mesmo depois de ter passado por todos os tipos de situações humilhantes e embaraçosas, porque ele está apaixonado por ela.",
      "https://mangalivre.net/manga/ijiranaide-nagatoro-san/6938",
      ""
    );
    const image = new Image(
      "https://cdn.statically.io/img/images2.optimages.net/f=auto/firefox/aw3rZPviXD-Q3I7Kx9eOfQ/m3430749/6938/143151/148626/01.png"
    );
    const chapter = new Chapter(
      "nagatoro-1",
      "https://mangalivre.net/ler/ijiranaide-nagatoro-san/online/148626/capitulo-0"
    );
    chapter.addImage(image);
    nagatoro.addChapter(chapter);

    expect(nagatoro.chapters[0].images[0].url).toBe(
      "https://cdn.statically.io/img/images2.optimages.net/f=auto/firefox/aw3rZPviXD-Q3I7Kx9eOfQ/m3430749/6938/143151/148626/01.png"
    );
  });
});
