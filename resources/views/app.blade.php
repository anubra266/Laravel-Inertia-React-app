<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!--SEO assets -->
    <meta name="theme-color" content="#141414" />
    <meta name="title" content="Inertia App - App Boilerplate" />
    <meta name="description" content="App Boilerplate for Laravel React" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="inertia-app.dev" />
    <meta property="og:title" content="Inertia App - App Boilerplate" />
    <meta property="og:description" content="App Boilerplate for Laravel React" />
    <meta property="og:image" content="%PUBLIC_URL%/inertia.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@anubra266" />
    <meta property="twitter:creator" content="@anubra266" />
    <meta property="twitter:url" content="inertia-app.dev" />
    <meta property="twitter:title" content="Inertia App - App Boilerplate" />
    <meta property="twitter:description" content="App Boilerplate for Laravel React" />
    <meta property="twitter:image" content="%PUBLIC_URL%/inertia.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
    <script type="text/javascript" src="less.js"></script>
</body>

</html>
