var instruction;
var Menu={
	preload: function(){
	},
	create: function(){
	    game.stage.backgroundColor='#FFFFFF';
		instruction = game.add.text(game.world.width/2,180,
			"Выбирайте верные ударения в словах,\nпока не остановится таймер\n\n Кликните, чтобы начать\n",
			{font:"bold 28px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0);	
		var score1;
		var len = instruction.length;
		game.input.onDown.add(Menu.startGame,Menu);
		instruction.addColor(0x4282D3,len);
	},
	startGame: function(){
		instruction.destroy();
		game.state.start("Game");
	},
	update: function(){}
}
