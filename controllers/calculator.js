// Import router package
const router = require('express').Router();

// for documentation see: https://www.npmjs.com/package/validator
const validator = require('validator');

/* Hand get requests for '/calculator/'
/* this is the index or home page
*/
router.get('/', function (req, res) {

    // Send a JSON response - this app will be a web api so no need to send HTML
    //res.end(JSON.stringify({message: 'This is the home page'}));
    res.json({content: 'This is the default for calculator, try /calculator/add?a=2&b=3'});

});

// Get the sum of two numbers sent via the request Querystring and return the result
// endpoint is /calculator/add?a=1&b=1
router.get('/add', function (req, res) {
    
    // Declare variables for input
    let numA = "";
    let numB = ""

    // validate querystring to ensure valid input
    if (typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined') {
        // read a and b parameter values from Querystring
        // convert string to Number
        numA = Number(req.query.a);
        numB = Number(req.query.b);
    }
    // if validation failed return "Bad Request"
    else {
        res.statusMessage = "Bad Request - missing parameters"
        res.status(400).end();
    }

    // Send back the result as an object in JSON form
    res.json({
        a: numA,
        b: numB,
        sum: numA + numB
    });

});

// export
module.exports = router;

