<?php

namespace App\Http\Controllers;

use App\Libro;
use Illuminate\Http\Request;

class LibroController extends Controller
{
    public function app()
    {
        return view('libros');
    }

    public function index()
    {
        return Libro::all();
    }

    public function show($id)
    {
        return Libro::findOrFail($id);
    }

    public function store(Request $request)
    {
        $libro = new Libro();
        $libro->titulo = $request->titulo;
        $libro->autor = $request->autor;
        $libro->categoria = $request->categoria;
        $libro->save();
        
        return $libro;
    }

    public function update($id, Request $request)
    {
        $libro = Libro::findOrFail($id);
        $libro->titulo = $request->titulo;
        $libro->autor = $request->autor;
        $libro->categoria = $request->categoria;
        $libro->save();
        
        return $libro;
    }

    public function destroy($id)
    {
        $libro = Libro::findOrFail($id);
        $libro->delete();

        return response('', 204);
    }
}
