import {Router} from 'express'
const router = Router()


router.get ('/', (req, res) => {
  res.render ('index', {
    title: 'Boom Shop | SsS',
    token: true,
  })
})

router.get ('/products', (req, res)=> {
res.render('products', {
  title: 'Products | SsS',
  isProducts: true,
})
})

router.get('/add', (req, res) => {
  res.render('add', {
    title: 'Add product | SsS',
    isAdd: true,
   })
})


export default router