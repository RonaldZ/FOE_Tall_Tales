var LettersToCelestia = {};

LettersToCelestia.BootState = function(game) {

};

LettersToCelestia.BootState.prototype = {

	init: function(){
		this.input.maxPointers = 1;

		this.stage.disableVisibilityChange = true;
	},

	preload: function(){

	},

	create: function(){
		this.state.start('phaserLogo');
	}
};