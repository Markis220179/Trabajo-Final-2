import express from 'express'
import { myConnection } from './dbConnection.js';
import { User } from './models/user.model.js';
const app = express()
const port = 3000

myConnection();

app.use(express.json())

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
})

app.post('/user', async (req, res) => {
  const newUser = req.body;
  const saveUser = new User(newUser);
  await saveUser.save();
  res.json({message: 'El usuario se ha agregado correctamente'})
})

app.get('/user/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send('User not found')
  }
  console.log(user);
  res.json(user)
})

app.delete('/user/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);
  res.json(user)
})

app.patch('/user/:id', async (req, res) => {
  const userId = req.params.id;
  const updateUser = req.body;
  const user = await User.findByIdAndUpdate(userId, updateUser);
  res.json(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





