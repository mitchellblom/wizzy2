var data;
var userInputText = $("#userInputTextBox");
var clickedCard;

$.ajax({
    url: ["people.json"]
}).done(function(data) {
    createCards(data);
}).fail(function(error) {
    console.log("error");
});

function createCards(data) {
    for (var i = 0; i < data.people.length; i++) {
        var card = "";
        card += `<div class="person_container">`;
        card += `<p class="bioName">${data.people[i].title} ${data.people[i].name}</p>`;
        card += `<img class="bioPic" src="${data.people[i].image}" alt="person pic">`;
        card += `<p class="bioDescrip" id="bioDescrip[i]">${data.people[i].bio}</p>`;
        card += `</div>`;
        $("#cardContainer").append(card);
    }
}

// $("body").click(userInputText.val(""));

$("#cardContainer").on("click", ".person_container", function(data) {
     console.log(this); 
        userInputText.val("");
        clickedCard = $(this);
        userInputText.focus();
        userInputText.val($(this).children(".bioDescrip").html());
        $(".redDottedBorder").removeClass("redDottedBorder");
        clickedCard.addClass("redDottedBorder");
        userInputText.keyup(function() {
            console.log($(this).children(".bioDescrip").html); // untested
            $(this).children(".bioDescrip").html(userInputText.val()); ///// CONTINUE HERE
            if (window.event.keyCode === 13) {
                clickedCard.val("");
                userInputText.val("");
            }
        });
    });
    // $("#submit").click(function() {
    //     $(clickedCard).val("");
    //     userInputText.val("");
    // });