var Finish ={
	preload : function(){},
	create: function(){
		instruction = game.add.text(game.world.width/2,game.world.height/2,
			"За 15 секунд вы верно ответили\n на "+score+" вопросов\n Нажмите, чтобы поделиться",
			{font:"bold 23px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0.5);	
		game.input.onDown.add(this.wallPost,this);	},
	update: function(){},
	wallPost: function(){VK.api("wall.post", {"message": "Hello!"}, function (data) {
						alert("Post ID:" + data.response.post_id);
});}
}