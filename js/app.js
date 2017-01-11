var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.level = ko.observable('Baby')
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/35699306@N04/32101563182/in/pool-flickrbigcats/');

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);

		var count = 0;
		count++;

		if (this.clickCount() == 10) {
			return this.level('Teen');
		} else if (this.clickCount() == 20) {
			return this.level('Big Boy');
		}
	};
}

ko.applyBindings(new ViewModel());