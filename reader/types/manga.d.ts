import Chapter from './chapter'

export default interface Manga {
  name: string
  nameSlug: string
  description: string
  urlOrigin: string
  cover: string
  chapters: Chapter[]
}
