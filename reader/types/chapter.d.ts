import Image from './image'

export default interface Chapter {
  identifier: string
  identifierSlug: string
  originUrl: string
  images: Image[]
}
