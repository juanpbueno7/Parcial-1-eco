const { response } = require('express');
const express = require('express');
const { Server } = require('socket.io');
const PORT = 5050;

const app = express();
const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Controller:' : 'http://localhost:5050/controller',
            'Display:' : 'http://localhost:5050/display',
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });

//const staticController = express.static('public-controller');
//const staticDisplay = express.static('public-display');

app.use('/controller', express.static('public-controller'));
app.use('/display', express.static('public-display'));
app.use(express.json());

/*___________________________________________

1) Create an endpoint to GET a validation message to test if the endpoint is working
_____________________________________________ */
app.get ('/' , request, response) =>(), {
    response.send()
} 


/*___________________________________________

2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

ioServer.on('connection', (socket) => {
    /*se crea el método socket para permitir la comunicación 
    entre cliente y servidor*/

    /*Al escuhar los eventos, se usa .emit para dar una respuesta
    con la información*/


});

/*___________________________________________

3) Create an endpoint to POST user score and print it
_____________________________________________ */

app.post ('/' , request, response)=>(), {
    console.log(userScore);
}
