const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

let failure = false

setTimeout(() => {
  failure = true
}, 60000)

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('5.3') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  if (failure) throw('error...  ')
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

