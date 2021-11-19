
let socket = io( 'http://localhost:8888' );

$( '.messageForm' ).on( 'submit', function(event){
    event.preventDefault();

    let userName = $( '#userName' ).val();
    let userMessage = $( '#userMessage' ).val();

    let send = {
        name: userName,
        message: userMessage
    };

    socket.emit( 'sendMessage', send );
});

socket.on( 'sendAll', function( data ){
    let newMessage = `<p> ${data.name}: ${data.message} </p>`;
    $( '.messageBox' ).append( newMessage );
});

/*
socket.emit( 'greeting', {name : firstName} );

socket.on( 'information', function(data){
    console.log( data.message );
});

$( '.broadCast' ).on( 'click', function(event){
    socket.emit( 'general', {});
});

socket.on( 'listenAll', function( data ){
    console.log( data.message );
});
*/
