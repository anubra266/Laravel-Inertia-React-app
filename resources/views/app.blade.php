<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!--include assets required for Inertia app here -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>

    <!-- End assets call-->
    <title>Inertia App</title>
    @routes
</head>


<body>
    <!--Call the Inertia app here like
        <div id="root"></div>
        in normal create-react-app
    -->
    @inertia
<link rel="stylesheet/less" type="text/css" href="color.less" />
    <script>
        window.less = {
        async: true,
        env: 'production'
      };
    </script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
</body>

</html>
