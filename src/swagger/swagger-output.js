const config =  require("../shared/config")
const swagger_js =  {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Servermarket api",
      "description": "Documentation yoq"
    },
    "host": `localhost:${config.port}`,
    "basePath": "/",
    "tags": [
      {
        "name": "Market api doc",
        "description": "Endpoints"
      }
    ],
    "schemes": [
      "http"
    ],
    "securityDefinitions":{
        "apiKeyAuth": {
        "type": 'apiKey',
        "in": 'header',
        "name": 'Authorization',
        "description": 'Jwt token'
        }
    },
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/admin": {
        "get": {
          "tags": ["Market api doc"],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/register/admin": {
        "post": {
          "tags": ["Market api doc"],
          "description": "Endpoint to sign in a specific user",
          "parameters": [
            {
              "name": "obj",
              "in": "body",
              "description": "User information.",
              "required": true,
              "schema": {
                "$ref": "#/definitions/AddAdmin"
              }
            }],
          "responses": {
            "201": {
              "description": "token"
            }
          }
        }
      },
      "/login/admin": {
        "post": {
          "tags": ["Market api doc"],
          "description": "Endpoint to sigup in a specific user",
          "parameters": [
            {
              "name": "obj",
              "in": "body",
              "description": "User information.",
              "required": true,
              "schema": {
                "$ref": "#/definitions/LoginAdmin"
              }
            }],
          "responses": {
            "200": {
              "description":"token"
            }
          }
        }
      }
    },
    "definitions": {
      "AddAdmin": {
        "type": "object",
        "properties": {
          "first_name": {
            "type": "string",
            "example": "Jhon Doe"
          },
          "last_name": {
            "type": "string",
            "example": "Marie Doe"
          },
          "image": {
            "type": "string",
            "example": "Jhon_Doe.png"
          },
          "role":{
            "type":"string",
            "exsample":"admin or super_admin",
            "default":"admin"
          },
          "username":{
            "type":"string",
            "exsample":"ayubxon"
          },
          "password":{
            "type":"string",
            "exsample":"!@#$%^&"
          }
          

        },
        "required": [
          "first_name",
          "last_name",
          "image",
          "username",
          "password"
        ]
      },
      "LoginAdmin": {
        "type": "object",
        "properties": {
          "username":{
            "type":"string",
            "exsample":"ayubxon"
          },
          "password":{
            "type":"string",
            "exsample":"!@#$%^&"
          }
          

        },
        "required": [
          "username",
          "password"
        ]
      }
    }
  }

module.exports = swagger_js