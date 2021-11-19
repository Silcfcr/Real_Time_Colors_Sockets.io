const express = require( 'express' );
const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(8888);

const io = require( 'socket.io' )( server );

io.on( 'connection', function( socket ){
    //console.log( socket );
    console.log( "Someone just connected!" );
    socket.on( 'greeting', function( data ){
        let info = {
            message : `Hello there ${data.name} nice to have you here!`
        }
        socket.emit( 'information',  info );
    });

    socket.on( 'general', function( data ){
        io.sockets.emit( 'listenAll', {message: "Broadcast message"} )
    });

    socket.on( 'sendMessage', function( data ){
        io.sockets.emit( 'sendAll', data ); 
    });
    
});