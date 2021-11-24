const express = require( 'express' );
const app = express();

app.use(express.static(__dirname + "/public"));
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

const server = app.listen(7777);

const io = require( 'socket.io' )( server );

app.get( '/', function( request, response ){
    response.render( 'index');
});

let color = {
    "color" : "black",
}

// not endpoints but utilities of socket io
//io.on method to attend a new request from the client to the server. 

//connection: keywork I can choo`se. 

io.on( 'connection', function( socket ){
    //console.log( socket );
    console.log( "Someone just connected!" );
    
    socket.on( 'greeting', function(){
        console.log(color.color);
        socket.emit( 'changeColor',  color );
    });


    socket.on( 'button_clicked', function( data ){
        console.log(data.color + " I'm the color variable in server");
        io.sockets.emit( 'changeColor', data )
    });

});