FOE_TallTales.CreditsState = function(game) {
	var credits = null
	var exitKey = null;
};

FOE_TallTales.CreditsState.prototype = {
	create: function(){
		this.music = this.add.audio('title_music');
		this.music.loop = true;
		this.music.play();

		credits = [
			"Writer", 
			"AlmanacPony",
			"Game Dev", 
			"Missionz3r0",
			"Credit Music",
			"'Mystery T' by Cory Gray",
			"http://freemusicarchive.org/music/Cory_Gray/",
		]; 

		this.exitKey = this.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		this.exitKey.add(this.exitCredits, this);
	},

	update: function(){

	},

	exitCredits: function(key){
		this.music.stop();
		this.state.start('menu');
	},
};