const express = require('express');
const cors = require('cors')
const rudderEvent = require('./integration/rudderstack')

//configuring app
const app = express()



//middleware
app.use(express.json())

//CORS
app.use(cors({
  origin: '*'
}))


app.post('/viewpage', (req, res) => {
  console.log(req.body)
  rudderEvent.page({
    userId: "1hKOmRA4GRlm",
    category: "Food",
    name: "working with chatwooks",
    properties: {
      url: "https://example.com",
      title: "Pizza",
      referrer: "https://google.com",
    },
  })
  res.json({ message: "Success" })
})



//Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'something went wrong'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})





//Server Engine starter
app.listen(8000, () => {
  console.log('back connected')
})