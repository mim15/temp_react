import { createClient } from 'contentful'

const client = createClient({
  accessToken: process.env.REACT_APP_CDA_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
})

export default client
