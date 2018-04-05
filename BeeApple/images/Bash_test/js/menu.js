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
		VK.api("storage.get",{ "key": "top1","global": 1},function(data){score1=data.response;VK.api("storage.get",{ "key": "name1","global": 1},function(data){instruction.text=String(instruction.text+"\nЛидер: "+data.response+" "+score1);game.input.onDown.add(Menu.startGame,Menu);});});
		instruction.addColor(0x4282D3,len);
	},
	startGame: function(){
		instruction.destroy();
		game.state.start("Game");
	},
	update: function(){}
}
