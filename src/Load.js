FOE_TallTales.LoadState = function(game){
	this.background = null;
	this.preloadGroup = null;
	this.preloadBox = null;
	this.preloadBar = null;
};

FOE_TallTales.LoadState.prototype = {

	preload: function(){
		this.background = this.game.add.image(0, 0, 'terminal_background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

		this.preloadGroup = this.add.group();
		this.preloadBox = this.game.GUI.rectangle(0, 0, this.game.width - 100, 52, 0x28F781);
		this.preloadBar = this.game.GUI.rectangle(4, 4, this.preloadBox.width - 9, this.preloadBox.height - 9, 0x28F781, 1, true);
		this.preloadBar.scale.x = 0;

		this.preloadGroup.add(this.preloadBox);
		this.preloadGroup.add(this.preloadBar);
		this.preloadGroup.x = this.game.width/2 - this.preloadGroup.width/2;
		this.preloadGroup.y = this.game.height/2 - this.preloadGroup.height/2;
	
		this.game.GUI.loadGuiAssets();
		for(var i = 1; i < 8; i++){
			this.load.audio('keyPress' + i, assets + '/audio/terminal/char/single/ui_hacking_charsingle_0' + i + '.wav');
		}

		for(var i = 1; i < 4; i ++){
			this.load.audio('enterPress' + i, assets + '/audio/terminal/char/enter/ui_hacking_charenter_0' + i + '.wav');
		}

		this.load.audio('terminalScroll', assets + '/audio/terminal/char/ui_hacking_charscroll.wav');
		this.load.audio('terminalScroll_lp', assets + '/audio/terminal/char/ui_hacking_charscroll_lp.wav');

		this.load.audio('credits_music', assets + '/audio/credits_music.mp3');
		
	},

	loadUpdate: function(){
		this.preloadBar.scale.x = this.load.progress * 0.01;
	},

	create: function(){
		this.preloadBar.scale.x = 1;
	},

	update: function(){
		this.state.start('preMenu');
	},

};