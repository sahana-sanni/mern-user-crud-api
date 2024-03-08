const userRoute = require('express').Router()
const {readAllUser, readSingleUser, updateUser, deleteUser,createUser, defaultCtrl } = require('../controller/userController')

//new user -> post route
userRoute.post(`/api/user/add`, createUser)

//read all -> get 
userRoute.get(`/api/user/all`, readAllUser)

//read single -> get
userRoute.get(`/api/user/single/:id`, readSingleUser)

//update user -> patch
userRoute.patch(`/api/user/update/:id`, updateUser)

//delete user ->del
userRoute.delete(`/api/user/delete/:id`, deleteUser)



userRoute.all(`*`, defaultCtrl)

module.exports = userRoute