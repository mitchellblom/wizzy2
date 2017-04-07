var data;
var userInputText = $("#userInputTextBox");

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
        card += `<p>${data.people[i].title} ${data.people[i].name}</p>`;
        card += `<img class="bioPic" src="${data.people[i].image}" alt="person pic">`;
        card += `<p class="bioDescrip" id="bioDescrip[i]">${data.people[i].bio}</p>`;
        card += `</div>`;
        $("#cardContainer").append(card);
    }
}

$("#cardContainer").click(function(data) {
    var clickedBio = data.target;
    if (clickedBio.className === "bioDescrip") {
        userInputText.focus();
        userInputText.val(clickedBio.innerHTML);
        userInputText.keydown(function() {
            clickedBio.innerHTML = userInputText.val();
            console.log("keypress");
            if (window.event.keyCode === 13 && userInputText.val() !== "" && clickedBio !== "") {
                userInputText.val("");
                clickedBio = "";
            }
        });
    } else {
        userInputText.val("");
        clickedBio = "";
    }
});