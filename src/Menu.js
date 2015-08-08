LettersToCelestia.MenuState = function(game) {
	this.music = null;
	this.creditsButton = null;
};

LettersToCelestia.MenuState.prototype = {

	create: function(){

		//this.creditsButton = this.add.button(400, 600, 'creditsButton', this.startGame, this);
	},

	start: function(){
		
	},

	startCredits: function(){
		this.music.stop();
		this.state.start('credits');
	}
};