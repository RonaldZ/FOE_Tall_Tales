FOE_TallTales.MenuState = function(game) {
	this.background = null;
	this.textStyle = null;

	this.keySounds = null;
	this.enterkeySounds = null;
	this.terminalScrollSound = null;

	this.terminalHeader = null;
	this.terminalLeftCol = null;
	this.terminalMiddleCol = null;
	this.terminalRightCol = null;

	this.terminalHeader_fullText = null;
	this.terminalLeftCol_fullText = null;
	this.terminalMiddleCol_fullText = null;
	this.terminalRightCol_fullText = null;

	this.functionIterator = null;
	this.stopCheck = null;

	this.isSetUp = null;
};

FOE_TallTales.MenuState.prototype = {

	preload: function(){
		this.background = this.game.add.image(0, 0, 'terminal_background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

	},

	create: function(){
		var x_offset = 10;
		var y_offset = 10;
		this.textStyle = {font: "bold 13pt Terminal_font", fill: "#28F781"}
		this.terminalScrollSound = this.add.audio('terminalScroll', .05);
		this.terminalHeader = this.add.text(x_offset, y_offset, '', this.textStyle);
		this.terminalLeftCol = this.add.group();
		this.terminalLeftCol.x = x_offset;
		this.terminalLeftCol.y =  this.terminalHeader.y + 115;
		this.terminalMiddleCol = this.add.group();
		this.terminalRightCol = this.add.group();


		this.terminalHeader_fullText = [
			'STABLE-TEC  INDUSTRIES  ( TM )  TERMLINK  PROTOCOL\n',
			'ENTER  PASSWORD  NOW\n\n',
			'4  ATTEMPT(S)  LEFT:  ■  ■  ■  ■'
		];

		this.functionIterator = 0;
		this.stopCheck = 0;

		this.isSetUp = 0;
	},

	update: function(){
		switch (this.isSetUp){
			case 0:
				this.textSetup();
				break;
			case 1:
				break;
		}
	},

	textSetup: function(){
		if(this.stopCheck ==  0 && this.functionIterator == 0){
			this.addTermText(this.terminalHeader_fullText[0], this.terminalHeader);
			this.stopCheck++
		}
		else if(this.stopCheck == 1 && this.functionIterator == 1){
			this.addTermText(this.terminalHeader_fullText[1], this.terminalHeader);
			this.stopCheck++
		}
		else if(this.stopCheck == 2 && this.functionIterator == 2){
			this.addTermText(this.terminalHeader_fullText[2], this.terminalHeader);
			this.stopCheck++
		}
		else if(this.stopCheck == 3 && this.functionIterator == 3){
			this.terminalLeftCol.add(this.add.text(0, 0, "0xF4F0", this.textStyle));
			this.isSetUp = 1;
		}
	},

	addTermText: function(termLine, textObj){
		if(termLine.length > 0){
			textObj.text += termLine[0];
			this.time.events.add(0, this.addTermText, this, termLine.substring(1, termLine.length), textObj);
		}
		else{
			this.terminalScrollSound.play();
			this.functionIterator++;
		}
	},
};