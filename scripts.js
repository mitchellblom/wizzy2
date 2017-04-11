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

$("#cardContainer").click(function(data) {
    clickedCard = data.target;
    if (clickedCard.className === "person_container") {
        userInputText.focus();
        userInputText.val($(clickedCard).children(".bioDescrip").html());
        $(".redDottedBorder").removeClass("redDottedBorder");
        $(clickedCard).addClass("redDottedBorder");
        userInputText.keyup(function() {
            $(clickedCard).children(".bioDescrip").html(userInputText.val());
            if (window.event.keyCode === 13) {
                clickedCard = "";
                userInputText.val("");
            }
        });
    } else {
        userInputText.val("");
    }
    $("#submit").click(function() {
        $(clickedCard).val("");
        userInputText.val("");
    });
});