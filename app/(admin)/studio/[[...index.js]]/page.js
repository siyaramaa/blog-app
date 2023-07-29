'use client'
import {NextStudio} from 'next-sanity/studio'

import config from '../../../../sanity.config'

//Page for Sanity Studio
export default function Studio() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />
}