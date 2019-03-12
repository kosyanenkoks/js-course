var sample = {
    name: 'Google',
    testToken: function(){},
    page: function () {
        if (this.testToken()) {
            document.write('<h1>🤡</h1>')
        } else {
            document.write ( '<h1>👺</h1>' )
        }
    }
};

testToken = (function (__token) {
    return function () {
        return prompt ( "Input Your Token: " ) === __token;
    }
})(prompt ( "Set Your Token: " ));