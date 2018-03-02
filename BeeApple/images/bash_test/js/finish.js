var Finish ={
	preload : function(){},
	create: function(){
		instruction = game.add.text(game.world.width/2,game.world.height/2,
			"За 15 секунд вы верно ответили\n на "+score+this.whatSl("вопрос")+"\n Кликните, чтобы поделиться",
			{font:"bold 23px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0.5);	
		game.input.onDown.add(this.wallPost,this);	},
	update: function(){},
	wallPost: function(){
		VK.api("wall.post", {"message": String("В игре Udareniya я верно расставил ударения на "+score+this.whatSl("слово")+"  Ссылка: vk.com/app6393619"), "attachments": "photo-160039023_456239018"});
	},
	whatSl: function(sl){
		var ret=sl;
		if(sl=='вопрос'){
			if(score==0 || score>=5){
				ret="вопросов";
			}else if(score>1 && score<5){
				ret="вопроса";
			}
		}else if(sl=='слово'){
			if(score==0 || score>=5){
				ret="слов";
			}else if(score>1 && score<5){
				ret="слова";
			}
		}
		return String(' '+ret);
	}
}
