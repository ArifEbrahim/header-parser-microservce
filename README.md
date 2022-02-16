# Request header microservice

An API that returns some information to the user from the request header. This is a practice project to learn how to build an API in Node/Express in a Test Driven Way using Jest and Supertest.

### Requirements

* A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
* A request to /api/whoami should return a JSON object with your preferred language in the language key.
* A request to /api/whoami should return a JSON object with your software in the software key.

Note, whilst all requirements have been met the tests are not passing as the reqest header is different when a browser is used vs Jest test runner. 