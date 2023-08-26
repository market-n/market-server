const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger-output.json'
const endpointsFiles = ['../index.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./src/index')    
})