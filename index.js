import express from 'express';
import { create} from "express-handlebars"
import Authroutes from './routes/auth.js'
import Productroutes from './routes/products.js'
const app = express();

const hbs = create({
  defaultLayout: 'main',
  extname: 'hbs',
})

app.engine ('hbs', hbs.engine)
app.set ('view engine', 'hbs')
app.set ( 'views', './views')
app.use (express.urlencoded ({extended: true}))





app.use (Authroutes)
app.use (Productroutes)


const PORT = process.env.PORT || 4100
app.listen(4100, () => console.log(`Server is running on port: ${PORT}`))