<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="js/vendor/jquery-3.4.1.min.js"></script>
    <script src="js/vendor/underscore.js"></script>
    <script src="js/vendor/backbone.js"></script>
    
    <script src="js/helloWorldView.js"></script>
    <script src="js/postView.js"></script>
    <script src="js/postCollection.js"></script>
    <script src="js/postListView.js"></script>

    <script>
        $(document).ready(function() {
            var view = new HelloWorldView({
                el: $('#main')
            });

            var view2 = new PostListView({
                el: $('#main2')
            });
        });
    </script>

    <title>Backbone example</title>
</head>
<body>
    <div class="container">
        <div id="main"></div>
        <div id="main2"></div>
    </div>
</body>
</html>