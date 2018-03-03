var instruction;
var Menu={
	preload: function(){
	},
	create: function(){
	    game.stage.backgroundColor='#FFFFFF';
		instruction = game.add.text(game.world.width/2,game.world.height/2,
			"Выберите верный ответ,\n кликнув на него.\n Кликните, чтобы начать",
			{font:"bold 23px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0.5);	
		game.input.onDown.add(this.startGame,this);	
	},
	startGame: function(){
		VK.api("storage.set",{"key": "score3", "value": "234", "global": "1"},function(data){instruction.text=data.response});
		//instruction.destroy();
		//game.state.start("Game");
	},
	update: function(){}
}
