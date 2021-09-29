import MangaUpdate from "./src/Domain/UseCase/MangaUpdate";
import MangaDTO from "./src/DTO/MangaDTO";
import MangaLivreRepository from "./src/Infra/Repository/MangaLivreRepository";
import JSONDatabase from "./src/Infra/Database/database";
import _ from "lodash";

const jsonDatabase = new JSONDatabase("./db.json");
jsonDatabase.read();

const mangas = Promise.all(
  jsonDatabase.database.mangas.map(async (manga) => {
    const mangaLivreRepository = new MangaLivreRepository(manga.urlOrigin);
    const magaUpdate = new MangaUpdate(mangaLivreRepository);
    try {
      const newChapters = await magaUpdate.execute(2);
      manga.chapters.unshift(...newChapters);
      manga.chapters = _.uniqBy(manga.chapters, "identifier");
    } catch (error) {
      console.log(error);
    } finally {
      return manga;
    }
  })
);

mangas.then((m) => {
  jsonDatabase.database.mangas = m;
  jsonDatabase.write();
});

// const magaUpdate = new MangaUpdate(nagatoro);
// magaUpdate.execute(2).then((m) => {
//   jsonDatabase.read();
//   const manga = _.find(jsonDatabase.database.mangas, {
//     urlOrigin: "https://mangalivre.net/manga/kaguya-sama-love-is-war/3918",
//   });
//   const chapters = manga.chapters.slice(2, manga.chapters.length);
//   chapters.unshift(...m);
//   const u = _.uniqBy(chapters, "identifier");

//   console.log(JSON.stringify(u));
// });
