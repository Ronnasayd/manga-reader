import MangaCreator from "./src/Domain/UseCase/MangaCreator";
import MangaLivreRepository from "./src/Infra/Repository/MangaLivreRepository";
import JSONDatabase from "./src/Infra/Database/database";

const dragonMaid = new MangaLivreRepository(
  "https://mangalivre.net/manga/tensei-shitara-slime-datta-ken/2692"
);

const mangaCreator = new MangaCreator(dragonMaid);
const dragonMaidManga = mangaCreator.execute();

const jsonDatabase = new JSONDatabase("./db.json");

dragonMaidManga.then(async (m) => {
  jsonDatabase.database.mangas.push(m);
  jsonDatabase.write();
});
