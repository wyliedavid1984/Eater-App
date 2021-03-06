$(document).ready(() => {
    //changing status of burger to devoured
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
    // adds in a new burger.
    $("#add_burger").on('submit', function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $('#newBurger').val().trim()
        }
        $.ajax("api/burgers", {
            method: 'POST',
            data: newBurger,
            // dataType: "text"
        }).then(()=>{
            console.log("Made that from scratch")
            location.reload()
        })
    });
    //  deletes the devoured burger
     $(".delete").on('click', function (event) {

         var id = $(this).attr("id");         
         $.ajax("api/burgers/" + id, {
             method: "DELETE",
         }).then(() => {
             console.log("Plate Cleared")
             location.reload()
         })
     })

});