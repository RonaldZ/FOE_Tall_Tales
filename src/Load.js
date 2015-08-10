FOE_TallTales.LoadState = function(game){
	this.background = null;
	this.loadTest = null;
	this.text_style = null;
};

FOE_TallTales.LoadState.prototype = {

	preload: function(){
		this.load.image('preload_background', '/assets/textures/terminal_background.png')
		this.background = this.game.add.image(0, 0, 'preload_background');

		
		this.game.plugin.loadGuiAssets();
		this.load.audio('credits_music', '/assets/audio/credits_music.mp3');
		
	},

	create: function(){
		this.text_overlay = this.game.add.group();
		this.text_style = {font: "bold 12pt Terminal_font", fill: "#28F781"}

		this.background.inputEnabled = true;
		this.background.width = this.game.width;
		this.background.height = this.game.height;

		this.text_overlay.x = 70;
		this.text_overlay.y = 30;

		this.game.add.text(0, 0, "WELCOME TO STABLE-TEC INDUSTRIES ( TM ) TERMLINK\n", this.text_style, this.text_overlay);
	},

	update: function(){
		//if(this.cache.isSoundDecoded('credits_music')){
		//	this.state.start('menu');
		//}
	},
};