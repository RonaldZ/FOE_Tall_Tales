Phaser.Plugin.GUI_Creator = function(game){
	
};

Phaser.Plugin.GUI_Creator.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.GUI_Creator.prototype.constructor = Phaser.Plugin.SamplePlugin;

Phaser.Plugin.GUI_Creator.prototype.loadGuiAssets = function(){
	game.load.image('Frame_TopLeft', '/assets/textures/gui/frames/Frame_TopLeft.png');
	game.load.image('Frame_TopMiddle', '/assets/textures/gui/frames/Frame_TopMiddle.png');
	game.load.image('Frame_TopRight', '/assets/textures/gui/frames/Frame_TopRight.png');
	game.load.image('FrameMenu_Left', '/assets/textures/gui/frames/FrameMenu_Left.png');
	game.load.image('FrameMenu_Middle', '/assets/textures/gui/frames/FrameMenu_Middle.png');
	game.load.image('FrameMenu_Right', '/assets/textures/gui/frames/FrameMenu_Right.png');
	game.load.image('Frame_BottomLeft', '/assets/textures/gui/frames/Frame_BottomLeft.png');
	game.load.image('Frame_BottomMiddle', '/assets/textures/gui/frames/Frame_BottomMiddle.png');
	game.load.image('Frame_BottomRight', '/assets/textures/gui/frames/Frame_BottomRight.png');
	
	game.load.image('LargeFrame_Left', '/assets/textures/gui/frames/LargeFrame_Left.png');
	game.load.image('LargeFrame_Middle', '/assets/textures/gui/frames/LargeFrame_Middle.png');
	game.load.image('LargeFrame_Right', '/assets/textures/gui/frames/LargeFrame_Right.png');

	game.load.image('FrameConnector', '/assets/textures/gui/frames/FrameConnector.png');

};

Phaser.Plugin.GUI_Creator.prototype.createLargeFrame = function(x, y, sizeX, text, group){
	x = x || 0;
	y = y || 0;
	sizeX = sizeX || 0;
	text = text || '';
	group = group || null;

	var frame = game.add.group(group);
	frame.x = x;
	frame.y = y;

	frame.create(0,0, 'LargeFrame_Left');

	for(i = 0; i < sizeX; i++){
		frame.create(frame.width, 0, 'LargeFrame_Middle');
	}

	frame.create(frame.width, 0, 'LargeFrame_Right');

	var tempText = game.add.text(0, 0, text, {font: '24px Arial', fill: '#fff'}, tempFrame);

	tempText.x = frame.width/2 - tempText.width/2 
	tempText.y = frame.height/2 - tempText.height/2.5

	return frame;
};

Phaser.Plugin.GUI_Creator.prototype.createButton = function(x, y, sizeX, text, group){
	x = x || 0;
	y = y || 0;
	sizeX = sizeX || 0;
	text = text || 0;
	group = group || null;

	var tempButton = game
};