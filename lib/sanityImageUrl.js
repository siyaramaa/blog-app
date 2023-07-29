
// This function helps to generate image link of sanity's cdn.

import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

const builder = imageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}