$(document).ready(() => {

    $(".devour").on('click', function (event) {
       
        var id = $(this).attr("id");
        var eaten = { devoured: 1 };

        $.ajax("api/burgers/"+id, {
            method: "PUT",
            data: eaten
        }).then(()=>{
            console.log("Burger Eaten")
            location.reload()
        })
    })

    $("#add_burger").on('submit', function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $('#newBurger').val().trim()
        } 
        console.log("frontend", newBurger);
        $.ajax("/api/burgers", {
            method: 'POST',
            data: newBurger,
            // dataType: "text"
        }).then(()=>{
            console.log("Made that from scratch")
            // location.reload()
        })
    });

     $(".delete").on('click', function (event) {

         var id = $(this).attr("id");
         console.log(id);
         
         $.ajax("api/burgers/" + id, {
             method: "DELETE",
         }).then(() => {
             console.log("Plate Cleared")
             location.reload()
         })
     })

});