import express from 'express'
import type { Request, Response } from 'express'
import type { Service } from './types/service'
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
app.route('/api/services').get((req: Request, res: Response) => {
  const data: Array<Service> = response.services

  if (!data) {
    return res.status(404).send('Not found')
  }

  // Get the request query string object
  const query: string = String(req.query.q || '').trim().toLowerCase()

  // Determine if the property includes the filter string
  const itemContainsFilter = (str: string) => (String(str || '').toLowerCase().includes(query) || false)

  let filteredData: Array<Service>

  if (!query) {
    filteredData = data
  } else {
    // Filter the response data if a filter query string is present
    filteredData = data.filter((responseData: Service) => {
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
app.route('/api/services/:id').get((req: Request, res: Response) => {
  const { id } = req.params
  const data: Array<Service> = response.services

  const service = data.find((service: Service) => service.id === id)

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
