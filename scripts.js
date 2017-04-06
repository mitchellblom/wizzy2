// console.log("js works");

// $("#userInputTextBox").

var data;

$.ajax({
	url: ["people.json"]
}).done( function (data) {
	console.log(data);
	doSomething(data);
}).fail( function (error) {
	console.log("error");
}).always( function (data){
	// example goes here
});

function doSomething (data) {
	console.log(data.people.length);
	for (var i = 0; i < data.people.length; i++) {
		var card = "";
			card += `<div class="person__container">`
			card +=	`<p>${data.people[i].title} ${data.people[i].name}</p>`
			card +=	`<img class="bioPic" src="${data.people[i].image}" alt="person pic">`
			card +=	`<p>${data.people[i].bio}</p>`
			card +=	`</div>`
		$("#cardContainer").append(card)
		// card += `${data.name}`
	}
}