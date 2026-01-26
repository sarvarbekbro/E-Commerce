import express from 'express';
import { create} from "express-handlebars"

const app = express();

const hbs = create({
  defaultLayout: 'main',
  extname: 'hbs',
})

app.engine ('hbs', hbs.engine)
app.set ('view engine', 'hbs')
app.set ( 'views', './views')

app.get ('/', (req, res) => {
  res.render ('index')
})

app.get ('/about.html', (req, res) => {
 res.render ('about')
} )


app.get ('/about', (req, res)=> {
  res.send ('About page')
})


const PORT = process.env.PORT || 4100
app.listen(4100, () => console.log(`Server is running on port: ${PORT}`))