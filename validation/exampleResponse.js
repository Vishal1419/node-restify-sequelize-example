/**
 * Created by ravimodha on 15/08/16.
 */

function exampleResponse(response){
    this.statusCode = 1002;
    this.body = [];
    this.response = response;
}

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
