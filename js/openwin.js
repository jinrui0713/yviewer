function openwin(url, n, w, h) {
	var lef = (screen.width - w) / 2;
	var top = (screen.height - h) * 0.1;
	window.open(url, n, 'width='+ w +',height='+ h +',left='+ lef +',top='+ top +',scrollbars=yes');
}