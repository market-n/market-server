const config = require("../shared/config");
const swagger_js = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Servermarket api",
    description: "Documentation yoq",
  },
  host: `localhost:${config.port}`,
  basePath: "/",
  tags: [],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/admin": {
      get: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: " Gets all Admin",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
    },
    "/register/admin": {
      post: {
        tags: ["Admin Router  "],
        summary: "Adds a new user",
        description: "Endpoint to sign in a specific user",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/AddAdmin",
            },
          },
        ],
        responses: {
          201: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
    },
    "/login/admin": {
      post: {
        tags: ["Admin Router  "],
        summary: "User Authentication",
        description:
          "Authenticate a user by validating their credentials and return a token if successful.",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/LoginAdmin",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
    },
    "/admin/{id}": {
      get: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Gets a Admin  by Mongo ID.",
        description: "Endpoint to sigup in a specific user",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
      delete: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Delete a Admin by MongoID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
      patch: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "edit  Admin  by Mongo ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/patchAdmin",
            },
          },
        ],
      },
    },
    "/admin/un/{id}": {
      delete: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Delete a Admin by MongoID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
    },
    "/change/password/admin": {
      patch: {
        tags: ["Admin Router  "],
        summary: "User Authentication",
        description:
          "Authenticate a user by validating their credentials and return a token if successful.",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/ChangePassword",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
    },
  },
  definitions: {
    AddAdmin: {
      type: "object",
      properties: {
        first_name: {
          type: "string",
          example: "Jhon Doe",
        },
        last_name: {
          type: "string",
          example: "Marie Doe",
        },
        image: {
          type: "string",
          example: "Jhon_Doe.png",
        },
        role: {
          type: "string",
          exsample: "admin or super_admin",
          default: "admin",
        },
        username: {
          type: "string",
          exsample: "ayubxon",
        },
        password: {
          type: "string",
          exsample: "!@#$%^&",
        },
      },
      required: ["first_name", "last_name", "image", "username", "password"],
    },
    LoginAdmin: {
      type: "object",
      properties: {
        username: {
          type: "string",
          exsample: "ayubxon",
        },
        password: {
          type: "string",
          exsample: "!@#$%^&",
        },
      },
      required: ["username", "password"],
    },
    patchAdmin: {
      type: "object",
      properties: {
        first_name: {
          type: "string",
          example: "Jhon Doe",
        },
        last_name: {
          type: "string",
          example: "Marie Doe",
        },
        image: {
          type: "string",
          example: "Jhon_Doe.png",
        },
        username: {
          type: "string",
          exsample: "ayubxon",
        },
      },
    },
    ChangePassword: {
      type: "object",
      properties: {
        current_password: {
          type: "string",
          exsample: "!@#$%^&*",
        },
        new_password: {
          type: "string",
          exsample: "*&^%$#@!",
        },
      },
    },
  },
};

module.exports = swagger_js;
