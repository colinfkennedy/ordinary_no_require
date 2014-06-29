var getHello = function () {
    return 'Hello World';
};

var printHelloWorldToConsole = function() {
    printToConsole(this.getHello());
};