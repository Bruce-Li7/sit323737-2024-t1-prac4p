// Import required Express Winston module
var express = require('express');
var winston = require('winston');

// Create an Express application
var app = express();
const PORT = process.env.PORT || 3000; // Define port which is on 3000

//defined add,subtract,multiply and divide
const add = (n1,n2) =>{return n1+n2};
const subtract = (n1,n2) =>{return n1-n2};
const multiply = (n1,n2) =>{return n1*n2};
const divide = (n1,n2) =>{return n1/n2};
//winston config
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new winston.transports.File({
            filename: 'logs/error.log', level:
                'error'
        }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});
if(process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format:winston.format.simple(),
    }));
}
//add
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            logger.error("n1 is incorrect");
            throw new Error("n1 incorrect");
        }
        if (isNaN(n2)) {
            logger.error("n2 is incorrect");
            throw new Error("n2 incorrect");
        }
        logger.info('Parameters' + n1+' and ' +n2+' received for addition');
        const result = add(n1,n2);
        res.status(400).json({ statuscode: 400, data: result });
    } catch (error) {
        
        console.log(error);
        res.status(300).json({ statuscode: 300, msg: error.toString() });

    }
});
//subtract
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            logger.error("n1 is incorrect");
            throw new Error("n1 incorrect");
        }
        if (isNaN(n2)) {
            logger.error("n2 is incorrect");
            throw new Error("n2 incorrect");
        }
        logger.info('Parameters' + n1+' and ' +n2+' received for subtract');
        const result = subtract(n1,n2);
        res.status(400).json({ statuscode: 400, data: result });
    } catch (error) {
        
        console.log(error);
        res.status(300).json({ statuscode: 300, msg: error.toString() });

    }
});

//Multiply
app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            logger.error("n1 is incorrect");
            throw new Error("n1 incorrect");
        }
        if (isNaN(n2)) {
            logger.error("n2 is incorrect");
            throw new Error("n2 incorrect");
        }
        logger.info('Parameters' + n1+' and ' +n2+' received for multiply');
        const result = multiply(n1,n2);
        res.status(400).json({ statuscode: 400, data: result });
    } catch (error) {
        
        console.log(error);
        res.status(300).json({ statuscode: 300, msg: error.toString() });

    }
});
//Divide
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            logger.error("n1 is incorrect");
            throw new Error("n1 incorrect");
        }
        if (isNaN(n2)) {
            logger.error("n2 is incorrect");
            throw new Error("n2 incorrect");
        }
        logger.info('Parameters' + n1+' and ' +n2+' received for divide');
        const result = divide(n1,n2);
        res.status(400).json({ statuscode: 400, data: result });
    } catch (error) {
        
        console.log(error);
        res.status(300).json({ statuscode: 300, msg: error.toString() });

    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});