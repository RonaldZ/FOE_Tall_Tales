var FOE_TallTales = {};

FOE_TallTales.BootState = function(game) {

};

FOE_TallTales.BootState.prototype = {

	init: function(){
		this.input.maxPointers = 1;

		this.stage.disableVisibilityChange = true;

		this.game.GUI = this.game.plugins.add(Phaser.Plugin.GUI_Creator)
	},

	preload: function(){
		this.load.image('terminal_background', assets + '/textures/terminal_background.png');
	},

	create: function(){
		this.state.start('phaserLogo');
	}
};