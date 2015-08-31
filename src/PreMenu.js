FOE_TallTales.PreMenuState = function(game){

	this.background = null;
	this.textStyle = null;
	this.terminal = null;

	this.fullText = null;

	this.keySounds = null;
	this.enterkeySounds = null;
	this.terminalScrollSound = null;

	this.timeCheck = null;
	this.stopCheck = null;
	this.functionIterator = null;

	this.enterKey = null;
};

FOE_TallTales.PreMenuState.prototype = {

	preload: function(){
		this.background = this.game.add.image(0, 0, 'terminal_background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;
	},

	create: function(){
		this.enterKey = this.input.keyboard.addKey(Phaser.Keyboard.ENTER); 

		this.keySounds = new Array();
		this.enterkeySounds = new Array();
		this.terminalScrollSound = this.add.audio('terminalScroll', .05);

		this.callOrder = new Array();
		this.TextIncrement = 0;

		this.textStyle = {font: "bold 13pt Terminal_font", fill: "#28F781"}
		this.terminal = this.add.text(10, 10, '', this.textStyle);
		this.terminal.alpha = 0.9;

		this.fullText = [
			'WELCOME TO STABLE-TEC INDUSTRIES ( TM ) TERMLINK\n\n>',
			'SET TERMINAL/INQUIRE\n\n',
			'RIT-V300\n\n>',
			'SET FILE/PROTECTION-OWNER:RWED ACCOUNTS.F\n>',
			'SET HALT RESTART/MAINT\n\n',
			'Initializing Stable-Tec Industries ( TM ) MF Boot Agent v2.3.0\n',
			'RETROS BIOS\n',
			'RBIOS-4.02.08.00 52EE5.E7.E8\n',
			'Copyright 2201-2203 Stable-Tec Ind.\n',
			'Uppermem: 64 KB\n',
			'Root (5A8)\n',
			'Maintence Mode\n\n>',
			'RUN DEBUG/ACCOUNTS.F'
		];

		for(var i = 1; i < 8; i++){
			this.keySounds[i] = this.add.audio('keyPress' + i, .1);
		}

		for(var i = 1; i < 4; i++){
			this.enterkeySounds[i] = this.add.audio('enterPress' + i, .1);
		}

		this.timeCheck = this.time.now;
		this.stopCheck = 0;
		this.functionIterator = 0;
	},

	update: function(){
		this.animateText();
		if(this.enterKey.isDown){
			this.enterkeySounds[1].play();
			this.state.start('menu');
		}
	},

	animateText: function(){
		var timeDif = this.time.now - this.timeCheck;
		if(this.functionIterator == 0 && this.stopCheck == 0){
			this.displayText(this.fullText[0]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 1 && this.stopCheck == 1 && timeDif > 1000){
			this.typeText(this.fullText[1]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 2 && this.stopCheck == 2){
			this.displayText(this.fullText[2]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 3 && this.stopCheck == 3 && timeDif > 1000){
			this.typeText(this.fullText[3]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 4 && this.stopCheck == 4 && timeDif > 1000){
			this.typeText(this.fullText[4]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 5 && this.stopCheck == 5){
			this.displayText(this.fullText[5]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 6 && this.stopCheck == 6){
			this.displayText(this.fullText[6]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 7 && this.stopCheck == 7){
			this.displayText(this.fullText[7]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 8 && this.stopCheck == 8){
			this.displayText(this.fullText[8]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 9 && this.stopCheck == 9){
			this.displayText(this.fullText[9]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 10 && this.stopCheck == 10){
			this.displayText(this.fullText[10]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 11 && this.stopCheck == 11){
			this.displayText(this.fullText[11]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 12 && this.stopCheck == 12 && this.timeCheck > 1000){
			this.typeText(this.fullText[12]);
			this.stopCheck++;
		}
		else if(this.functionIterator == 13 && this.stopCheck == 13){
			this.state.start('menu');
		}

	},

	displayText: function(sentence){
		if(sentence.length > 0){
			this.terminal.text += sentence[0];
			this.time.events.add(0, this.displayText, this, sentence.substring(1, sentence.length));
		}
		else{
			this.terminalScrollSound.play();
			this.functionIterator++;
			this.timeCheck = this.time.now;
		}
	},

	typeText: function(sentence){
		if(sentence.length > 0){
			this.keySounds[this.rnd.integerInRange(1, this.keySounds.length-1)].play();
			this.terminal.text += sentence[0];
			this.time.events.add(80, this.typeText, this, sentence.substring(1, sentence.length));
		}
		else{
			this.enterkeySounds[this.rnd.integerInRange(1, this.enterkeySounds.length-1)].play();
			this.functionIterator++;
			this.timeCheck = this.time.now;
		}
	}
};