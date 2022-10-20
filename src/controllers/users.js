const usersGetController = (req, res) => {
  res.json({ message: 'GET | API' })
}

const usersPutController = (req, res) => {
  const { id } = req.params
  res.json({ message: 'PUT | API', id })
}

const usersPostController = (req, res) => {
  const data = req.body

  res.status(201).json({ message: 'POST | API', data })
}

const usersDeleteController = (req, res) => {
  res.json({ message: 'DELETE | API' })
}

const usersPatchController = (req, res) => {
  res.json({ message: 'PATCH | API' })
}

module.exports = {
  usersGetController,
  usersPutController,
  usersPostController,
  usersDeleteController,
  usersPatchController,
}
