import { Router } from "express"
const router = Router()

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login | SsS',
    isLogin: true,
  })
})

router.get('/register', (req, res)=> {
  res.render('register', {
    title: 'Register | SsS',
    isRegister: true,
  })
})

router.post('/login', (req, res )=> {
  console.log(req.body)
  res.redirect('/')
})

router.post('/register', (req, res) => {
  const userData = {
  firstName: req.body.firstname,
  lastName: req.body.lastname,
  email: req.body.email,
  password: req.body.password,
}
  console.log(userData)
  res.redirect('/')
})

export default router