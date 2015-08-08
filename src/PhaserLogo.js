FOE_TallTales.PhaserLogoState = function(game) {
	var phaser_logo = null;
	var time_check = null;
};

FOE_TallTales.PhaserLogoState.prototype = {

	preload: function(){
		this.load.image('phaser_logo', '/lib/phaser/phaser-logo-small.png');

		//TODO: load in FOE Tall Tales logo.
		this.load.image('load_bar', '/assets/textures/load_bar.png');
	},

	create: function(){
		var phaser_logo_posX = (this.game.width / 2) - (this.cache.getImage('phaser_logo').width / 2);
		var phaser_logo_posY = (this.game.height / 2) - (this.cache.getImage('phaser_logo').height / 2);

		this.phaser_logo = this.game.add.sprite(phaser_logo_posX, phaser_logo_posY, 'phaser_logo');

		this.time_check = this.time.now;
	},

	update: function(){
		if((game.time.now - this.time_check) > 3000){
			this.state.start('load');
		}
	}
};