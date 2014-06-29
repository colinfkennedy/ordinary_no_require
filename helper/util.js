var getHello = function () {
    return 'Hello World';
};

var printHelloWorldToConsole = function() {
    print(this.getHello());
};