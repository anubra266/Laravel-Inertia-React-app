    var Ziggy = {
        namedRoutes: {"home":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"about":{"uri":"about","methods":["GET","HEAD"],"domain":null},"contact":{"uri":"contact","methods":["GET","HEAD"],"domain":null},"submit":{"uri":"submit","methods":["PUT"],"domain":null},"blog":{"uri":"blog","methods":["GET","HEAD"],"domain":null},"propsy":{"uri":"propsy","methods":["GET","HEAD"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"verification.notice":{"uri":"email\/verify","methods":["GET","HEAD"],"domain":null},"verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"],"domain":null},"verification.resend":{"uri":"email\/resend","methods":["POST"],"domain":null}},
        baseUrl: 'http://localhost/',
        baseProtocol: 'http',
        baseDomain: 'localhost',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
