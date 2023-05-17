const logoutRouter = require('express').Router() ;
const {logoutUser} =require('../controller/logout.controller')

logoutRouter.post('/' , logoutUser ) ;

module.exports = logoutRouter ;
