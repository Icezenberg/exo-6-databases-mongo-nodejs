$(function (){
    // console.log($)
    $.ajax({
        url : 'http://localhost:5099/data1',
        type : 'GET',
        dataType: '',
        success: function(data) {
            data.forEach(element => {
            console.log(element)

            $('.ir').append('<div><b class="my-5">Name :</b>' +' '+ element.name +'</br></div>')
            $('.ir').append('<b>Genre :</b>' +' '+ element.genre +'</br>')
            $('.ir').append('<b>Age :</b>' +' '+ element.Age +'</br>')
            $('.ir').append('<b>Toto :</b>' +' '+ element.Toto +'</br>')
            $('.ir').append('<b>Test :</b>' +' '+ element.Test +'</br>')
            });
            

            // console.log(donnees);
            console.log();

       
        },


        error: function () {
            console.log('La requête n\'a pas abouti');
        }
    })


})


$(function () {

    $("#send").click(function(e){
        // e.preventDefault();
        var name = $("#champ1").val();   
        var genre =  $("#champ2").val();
        console.log(genre, name);
        $.post(
            'http://localhost:5099/addata',
            {name:name, genre:genre},
           function(data){ // code_html contient le HTML renvoyé
                // console.log(somme);
                console.log(data);

                // $("#resultat").attr("value",data);

                // document.getElementById("resultat").innerHTML = somme;
               
            }
        //    function(){
        //         console.log('error');
        //     }
        );

    });
});
