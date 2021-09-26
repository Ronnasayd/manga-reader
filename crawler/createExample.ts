import MangaCreator from "./src/Domain/UseCase/MangaCreator";
import MangaLivreAdapter from "./src/Infra/Adapters/MangaLivreAdapter";
import JSONDatabase from "./src/Infra/Database/database";

const dragonMaid = new MangaLivreAdapter(
  "https://mangalivre.net/manga/tensei-shitara-slime-datta-ken/2692"
);

const mangaCreator = new MangaCreator(dragonMaid);
const dragonMaidManga = mangaCreator.execute();

const jsonDatabase = new JSONDatabase("./db.json");

dragonMaidManga.then(async (m) => {
  jsonDatabase.database.mangas.push(m);
  jsonDatabase.write();
});
