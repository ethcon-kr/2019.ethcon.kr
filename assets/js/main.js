
$(function () {
	shuffleDiv($(".shuffle"));
});

function scrollToItem(item) {
	if ($(`#${item}`).length != 0) {
	  $("html, body").animate({
		scrollTop: $(`#${item}`).offset().top
	  }, 1000);
	}
}

function shuffleDiv(parentDiv){
	var divs = parentDiv.children();
		
	while (divs.length) {
	  parentDiv.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	}
}