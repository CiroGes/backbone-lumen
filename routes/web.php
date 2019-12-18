<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('version', function () use ($router) {
    return $router->app->version();
});

// 2 ejemplos básicos
$router->get('/', 'ExampleController@index');
$router->get('posts', 'ExampleController@posts');

// CRUD completo
$router->get('app', 'LibroController@app');
$router->get('libros', 'LibroController@index');
$router->get('libros/{id}', 'LibroController@show');
$router->post('libros', 'LibroController@store');
$router->put('libros/{id}', 'LibroController@update');
$router->delete('libros/{id}', 'LibroController@destroy');
