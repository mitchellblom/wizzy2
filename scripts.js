var data;
var userInputText = $("#userInputTextBox");
var clickedBio;

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
    clickedBio = data.target;
    if (clickedBio.className === "bioDescrip") {
        userInputText.focus();
        userInputText.val(clickedBio.innerHTML);
        $(".redDottedBorder").removeClass("redDottedBorder");
        $(clickedBio).parent().addClass("redDottedBorder");
        userInputText.keyup(function() {
            clickedBio.innerHTML = userInputText.val();
            if (window.event.keyCode === 13) {
                clickedBio = "";
                userInputText.val("");
            }
        });
    } else {
        userInputText.val("");
    }
    $("#submit").click(function() {
        $(clickedBio).val("");
        userInputText.val("");
    });
});

// $(clickedBio).on("click", ".person_container", function(e) {
//     $(".clicked").removeClass("clicked");
//     $(this).addClass("clicked");
// });