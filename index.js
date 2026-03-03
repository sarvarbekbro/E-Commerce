import express from 'express';
import { create} from "express-handlebars"
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import flash from 'connect-flash'
import session from 'express-session'
import cookieParser  from 'cookie-parser';

import varMiddleware from './middleware/var.js'
import userMiddleware from './middleware/user.js';
import hbsHelpers from './utils/index.js'

//Routes
import Authroutes from './routes/auth.js'
import Productroutes from './routes/products.js'

dotenv.config()


const app = express();

const hbs = create({
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: hbsHelpers,
})

app.engine ('hbs', hbs.engine)
app.set ('view engine', 'hbs')
app.set ( 'views', './views')


app.use (express.static('public'))
app.use (express.urlencoded ({extended: true}))
app.use (express.json())
app.use (cookieParser())
app.use (session ({secret: 'SsS', resave: false, saveuninitialized: false}))
app.use (flash())
app.use (varMiddleware)
app.use (userMiddleware)



app.use (Authroutes)
app.use (Productroutes)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.Mongo_Url)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))







const startApp = () => {
  try {
const PORT = process.env.PORT || 4100
app.listen(4100, () => console.log(`Server is running on port: ${PORT}`))

  } catch (error) {
 console.log (error)
  }
}
startApp()