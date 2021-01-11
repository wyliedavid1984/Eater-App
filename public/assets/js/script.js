$(document).ready(() => {

    $(".devour").on('click', function (event) {
       
        var id = $(this).attr("id");
        console.log(id);
        var eaten = { devoured: 1 };

        $.ajax("api/burgers/"+id, {
            type: "PUT",
            data: eaten
        }).then(()=>{
            console.log("Burger Eaten")
            location.reload();
        })
    })

    $("#add_burger").on('submit', function (event) {
        event.preventDefault();
        console.log('Create')
        let newBurger = {
            burger_name: $('#add_burger [name=burger]').val().trim()
        }
    
        $.ajax("/api/burgers", {
            type: 'POST',
            data: newBurger,
            dataType: "text"
        }).then(()=>{
            location.reload()
        })
    })

});