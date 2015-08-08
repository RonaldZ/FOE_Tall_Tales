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

Phaser.Plugin.GUI_Creator.prototype.createLargeFrame = function(size, text){
	var tempFrame = game.add.group();
	var menuWidth = game.cache.getImage('LargeFrame_Middle').width;

	tempFrame.create(0,0, 'LargeFrame_Left');

	for(i = 0; i < size; i++){
		tempFrame.create(menuWidth, 0, 'LargeFrame_Middle');
		menuWidth = menuWidth + game.cache.getImage('LargeFrame_Middle').width;
	}

	tempFrame.create(menuWidth, 0, 'LargeFrame_Right');

	return tempFrame;
};