LettersToCelestia.LoadState = function(game){

	this.background = null;
	this.loadbar = null;

};

LettersToCelestia.LoadState.prototype = {

	preload: function(){
		var loadbar_posX = (this.game.width / 2) - (this.cache.getImage('load_bar').width / 2);
		var loadbar_posY = (this.game.height / 1.25) - (this.cache.getImage('load_bar').height / 2);

		this.loadbar = this.add.sprite(loadbar_posX, loadbar_posY, 'load_bar');
		this.load.setPreloadSprite(this.loadbar);

		this.load.audio('title_music', '/assets/audio/title_music.mp3')
	},

	create: function(){
		this.loadbar.cropEnabled = false;
	},

	update: function(){
		if(this.cache.isSoundDecoded('title_music')){
			this.state.start('menu');
		}
	}
};