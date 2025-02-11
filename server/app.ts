import express from 'express'
import type { Request, Response } from 'express'
import bodyParser from 'body-parser'
import response from './data'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false,
}))

// Data route
app.route('/api/:entity').get((req: Request, res: Response) => {
  const { entity } = req.params
  const data: Record<string, any>[] = response[entity]

  if (!data) {
    return res.status(404).send('Not found')
  }

  // Get the request query string object
  const query: string = String(req.query.q || '').trim().toLowerCase()

  // Determine if the property includes the filter string
  const itemContainsFilter = (str: string) => (String(str || '').toLowerCase().includes(query) || false)

  let filteredData: Record<string, any>[]

  if (!query) {
    filteredData = data
  } else {
    // Filter the response data if a filter query string is present
    filteredData = data.filter((responseData: Record<string, any>) => {
      for (const property in responseData) {
        // Only allow searching when the object property is typeof `string`
        // If string is found, return true
        if (responseData[property] && typeof responseData[property] === 'string' && itemContainsFilter(responseData[property])) {
          return true
        }
      }
      return false
    })
  }
  return res.status(200).send(filteredData)
})

// Service details route
app.route('/api/:entity/:id').get((req: Request, res: Response) => {
  const { entity, id } = req.params
  const data: Record<string, any>[] = response[entity]

  const service = data.find((service: Record<string, any>) => service.id === id)
  console.log(service)
  if (!service) {
    return res.status(404).send('Not found')
  }
  return res.status(200).send(service)
})


// Catch-all
app.route('*').get((req: Request, res: Response) => {
  res.status(404).send('Not found')
})

export default app
