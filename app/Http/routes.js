'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

var toMarkdown = require('to-markdown');

Route.route('/', 'POST', function * (request, response) {

    var html = request.input('html');

    response.send(toMarkdown(request.input('html'), {gfm: true}));

})
