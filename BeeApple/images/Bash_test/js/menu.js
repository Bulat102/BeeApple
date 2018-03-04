var instruction;
var Menu={
	preload: function(){
	},
	create: function(){
	    game.stage.backgroundColor='#FFFFFF';
		instruction = game.add.text(game.world.width/2,180,
			"Выберите верный ответ,\n кликнув на него.\n Кликните, чтобы начать",
			{font:"bold 23px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0);	
		var score1;
		VK.api("storage.get",{ "key": "top1","global": 1},function(data){score1=data.response;});
		VK.api("storage.get",{ "key": "name1","global": 1},function(data){instruction.text=String(
			instruction.text+"\nЛидер: "+String(data.last_name+" "+data.first_name)+" "+score1);});
		game.input.onDown.add(this.startGame,this);	
	},
	startGame: function(){
		instruction.destroy();
		game.state.start("Game");
	},
	update: function(){}
}
