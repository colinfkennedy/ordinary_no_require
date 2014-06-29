function print(msg) {
    console.log(msg);
};

var getHello = function () {
    return 'Hello World';
};

var printHelloWorldToConsole = function() {
    print(this.getHello());
};

printHelloWorldToConsole();