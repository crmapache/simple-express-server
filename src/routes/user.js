const { Router } = require('express')
const {
  usersGetController,
  usersPutController,
  usersPostController,
  usersDeleteController,
  usersPatchController,
} = require('../controllers/users')

const router = Router()

router.get('/', usersGetController)

router.put('/:id', usersPutController)

router.post('/', usersPostController)

router.delete('/:id', usersDeleteController)

router.patch('/', usersPatchController)

module.exports = router
