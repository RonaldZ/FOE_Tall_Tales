FOE_TallTales.PhaserLogoState = function(game) {
	this.phaser_logo = null;
	this.timer = null;
};

FOE_TallTales.PhaserLogoState.prototype = {

	preload: function(){
		this.load.image('phaser_logo', '/lib/phaser/phaser-logo-small.png');

	},

	create: function(){
		var phaser_logo_posX = (this.game.width / 2) - (this.cache.getImage('phaser_logo').width / 2);
		var phaser_logo_posY = (this.game.height / 2) - (this.cache.getImage('phaser_logo').height / 2);

		this.phaser_logo = this.game.add.sprite(phaser_logo_posX, phaser_logo_posY, 'phaser_logo');

		this.timer = this.time.now + 3000;
	},

	update: function(){
		if(this.time.now > this.timer){
			this.state.start('load');
		}
	}
};