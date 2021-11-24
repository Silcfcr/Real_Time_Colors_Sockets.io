console.log("connected!")
let socket = io( 'http://localhost:7777' );

socket.emit( 'greeting');
// $("body").css("background-color", "black");
$( '.btn' ).on( 'click', function(event){
    event.preventDefault();
    console.log(`${event.target.id} has been clicked`);

    let color = {
        color: event.target.id,
        
    };

    socket.emit( 'button_clicked', color );
});

socket.on( 'changeColor', function( data ){
    console.log(data.color + " changing color!!!");
    $(".body").css("background-color", data.color);
});
