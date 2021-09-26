import MangaUpdate from "./src/Domain/UseCase/MangaUpdate";
import MangaDTO from "./src/DTO/MangaDTO";
import MangaLivreAdapter from "./src/Infra/Adapters/MangaLivreAdapter";
import fs from "fs";

const nagatoro = new MangaLivreAdapter(
  "https://mangalivre.net/manga/kaguya-sama-love-is-war/3918"
);
const nagaData = JSON.parse(fs.readFileSync("./kaguya.json").toString());

const mangaDTO = new MangaDTO(
  nagaData.name,
  nagaData.description,
  nagaData.urlOrigin,
  nagaData.cover,
  nagaData.chapters
);

const magaUpdate = new MangaUpdate(mangaDTO, nagatoro);
magaUpdate.execute(2).then((m) => console.log(JSON.stringify(m)));
