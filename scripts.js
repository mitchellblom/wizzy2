var data;

$.ajax({
	url: ["people.json"]
}).done( function (data) {
	doSomething(data);
}).fail( function (error) {
	console.log("error");
});

function doSomething (data) {
	for (var i = 0; i < data.people.length; i++) {
		var card = "";
			card += `<div class="person__container">`;
			card +=	`<p>${data.people[i].title} ${data.people[i].name}</p>`;
			card +=	`<img class="bioPic" src="${data.people[i].image}" alt="person pic">`;
			card +=	`<p class="bioDescrip" id="bioDescrip[i]">${data.people[i].bio}</p>`;
			card +=	`</div>`;
			var descripI = data.people[i];

		$("#cardContainer").append(card);
	}
}

$("#cardContainer").click(function(data) {
	var clickedBio = data.target;
	if (clickedBio.className === "bioDescrip") {
	$("#userInputTextBox").focus();
	$("#userInputTextBox").val(clickedBio.innerHTML);
	} else {
		$("#userInputTextBox").val("");
		clickedBio = "";
	}
	$("#userInputTextBox").keypress(function() {
			clickedBio.innerHTML = $("#userInputTextBox").val();
            // $("#userInputTextBox").keydown() = function() {
            // 	console.log("keydown");
                // if (window.event.keyCode === 13) {
                //     clickedBio = "";
                //     userInputText.value = "";
                // }
            // }
        });
 });