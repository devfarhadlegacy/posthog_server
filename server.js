import express from 'express';
import cors from 'cors';
import chatwootRouter from './routes/chatwoot/chatwoot.js'
import { upmindWebhook } from './controllers/upmind.js';
//configuring app
const app = express()



//middleware
app.use(express.json())

//CORS
app.use(cors({
  origin: '*'
}))

// app.use((req, res, next) => {
//   console.log('Event is going');
//   console.log(req.body)
//   next();
// });

// //routes
// app.use('/api/chatwoot', chatwootRouter);
app.post('/api/stablepoint', upmindWebhook);
app.post('/api/whg', upmindWebhook);



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
