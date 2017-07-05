/**
 * Copied from VCC by ravimodha @ Pixometry Infosoft.
 */

//This function acts like constructor
function exampleResponse(response){
    this.statusCode = 1002;
    this.body = [];
    this.response = response;
}

//prototype means a virtually automatically created function from which this function inherits
exampleResponse.prototype.setStatusCode = function (statusCode) {
    this.statusCode = statusCode;
    return this;
};

exampleResponse.prototype.setResponseBody = function (responseBody) {
    this.body = responseBody;
    return this;
};

exampleResponse.prototype.send = function () {
    var responseBody = {
        statusCode: this.statusCode
    };

    for (var key in this.body) {
        responseBody[key] = this.body[key];
    }

    this.response.send(responseBody);
};

module.exports = exampleResponse;
