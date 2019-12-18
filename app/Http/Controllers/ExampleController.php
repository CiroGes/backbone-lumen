<?php

namespace App\Http\Controllers;

class ExampleController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function posts()
    {
        $post_1 = [
            'id' => '1',
            'author' => 'Juan Perez',
            'title' => 'Sed lobortis condimentum felis, nec.',
            'content' => 'Nulla at tellus id odio ultrices auctor. Nunc suscipit, odio non mattis luctus, eros nisl facilisis ipsum, ut feugiat est diam ac mi. Donec consectetur enim at feugiat ultricies. Maecenas laoreet porta laoreet. Aenean lacinia ac urna a tristique. Aliquam tempus gravida dapibus. Fusce consectetur vitae arcu ac lacinia. Suspendisse.'
        ];

        $post_2 = [
            'id' => '2',
            'author' => 'Juan Perez',
            'title' => 'Nunc eleifend orci pulvinar libero.',
            'content' => 'Donec pellentesque turpis ac venenatis luctus. Nunc vitae dolor molestie, congue orci quis, maximus justo. Quisque sollicitudin tortor lectus, sed rutrum diam pellentesque sit amet. Nulla facilisi. Mauris vitae pellentesque turpis, ut facilisis ante. Cras feugiat, dolor ut accumsan ultricies, sapien eros vehicula metus, a facilisis eros sapien quis metus.'
        ];

        $post_3 = [
            'id' => '3',
            'author' => 'Juan Perez',
            'title' => 'Vestibulum et suscipit enim. Duis.',
            'content' => 'Praesent tellus odio, accumsan eget ante et, cursus venenatis turpis. Nunc eleifend turpis elementum ligula volutpat iaculis. Donec in porta lorem, ac tincidunt turpis. Morbi convallis in augue sed suscipit. Phasellus elementum, turpis sed semper placerat, augue purus ultrices justo, ut fringilla mauris neque a neque. Fusce interdum lectus placerat.'
        ];

        $post_4 = [
            'id' => '4',
            'author' => 'Juan Perez',
            'title' => 'Vestibulum dictum interdum diam quis.',
            'content' => 'Etiam non suscipit diam. Nullam vel lectus risus. Proin luctus efficitur ipsum, vitae accumsan felis imperdiet id. Phasellus at dolor tortor. In hac habitasse platea dictumst. Sed eu turpis mattis, sodales urna eu, ultrices dui. Suspendisse ullamcorper urna eu massa malesuada, id pellentesque metus laoreet. Donec condimentum gravida iaculis. Aliquam.'
        ];

        $post_5 = [
            'id' => '5',
            'author' => 'Juan Perez',
            'title' => 'Orci varius natoque penatibus et.',
            'content' => 'Proin et enim vel eros interdum scelerisque. Nullam ac malesuada lectus. Nunc sollicitudin ligula ut nisi varius, eu venenatis neque mollis. Donec blandit velit leo, id vehicula nisl fringilla non. Quisque rhoncus odio dolor, et malesuada lacus ullamcorper nec. Duis sagittis condimentum lorem, vel venenatis lacus feugiat sed. Etiam quis.'
        ];

        return [$post_1, $post_2, $post_3, $post_4, $post_5];
    }
}
