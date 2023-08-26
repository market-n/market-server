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
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/admin": {
        "get": {
          "tags": [],
          "produces": [
            "application/json"
          ],
          "description": "Endpoint to sign in a specific user",
          "parameters": [
            {
              "name": "obj",
              "in": "body",
              "description": "User information.",
              "required": true,
              "schema": {
                "$ref": "#/definitions/AddUser"
              }
            }],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/register/admin": {
        "post": {
          "tags": [],
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
          "tags": [],
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
            "type": "file",
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