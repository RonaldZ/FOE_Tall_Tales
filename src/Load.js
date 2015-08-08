FOE_TallTales.LoadState = function(game){

	this.background = null;
	this.loadbar = null;

};

FOE_TallTales.LoadState.prototype = {

	preload: function(){
		var loadbar_posX = (this.game.width / 2) - (this.cache.getImage('load_bar').width / 2);
		var loadbar_posY = (this.game.height / 1.25) - (this.cache.getImage('load_bar').height / 2);

		this.loadbar = this.add.sprite(loadbar_posX, loadbar_posY, 'load_bar');
		this.load.setPreloadSprite(this.loadbar);

		//Load GUI Assets
		this.game.plugin.loadGuiAssets();

		//load credits music
		this.load.audio('credits_music', '/assets/audio/credits_music.mp3')
	},

	create: function(){
		this.loadbar.cropEnabled = false;
	},

	update: function(){
		if(this.cache.isSoundDecoded('credits_music')){
			this.state.start('menu');
		}
	}
};