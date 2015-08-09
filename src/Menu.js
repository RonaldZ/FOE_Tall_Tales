FOE_TallTales.MenuState = function(game) {
	this.music = null;

	this.menuHeader = null;
	this.menuBody = null;
	this.creditsButton = null;
};

FOE_TallTales.MenuState.prototype = {

	create: function(){
		this.menuHeader = this.game.plugin.createLargeFrame(0, 0, 10, "Fallout Equestria: Tall Tales");
	},
};