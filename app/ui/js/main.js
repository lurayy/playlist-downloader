$( document ).ready(function() {
    $("#loading").hide() ;
});



$('#link').keypress(function (e) {
    var key = e.which;
    if (key == 13) {
        x = Math.random() * (window.innerWidth - 200 - 200) + 200;
        y = Math.random() * (window.innerHeight - 200 - 200) + 200;
        generate_particle(x, y)
        sendPlaylistLink();
        return false;
    }
});

async function sendPlaylistLink() {
    let link = $("#link").val();
    // loading
    $("#content").fadeOut();
    $("#loading").fadeIn();
    let links = eel.get_videos_link(link)().then(
        response=>{
            console.log(response);
            console.log('2nd one')
        }
    )
}

function generate_data_table(data){
    console.log(data)
}