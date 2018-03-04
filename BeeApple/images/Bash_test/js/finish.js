var scoresText;
var Finish ={
	preload : function(){},
	create: function(){

		instruction = game.add.text(game.world.width/2,game.world.height/2,
			"За 15 секунд вы верно ответили\n на "+score+this.whatSl("вопрос")+"\n Кликните, чтобы поделиться",
			{font:"bold 23px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0.5);	
		scoresText = game.add.text(5,5,"",{font:"italic 20px Arial",fill:'#1c3956'})
		game.input.onDown.add(this.wallPost,this);
	},
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
	},
	setScores: function(){
		var scores=[];
		var names=[];
		var n=-1;
		var name;
		VK.api("account.getProfileInfo", {},function(data){name=String(data.last_name+" "+data.first_name);});
		VK.api("storage.get", {"key":"top1","global":1},function(data){scores.push(data.response);});
		VK.api("storage.get", {"key":"top2","global":1},function(data){scores.push(data.response);});
		VK.api("storage.get", {"key":"top3","global":1},function(data){scores.push(data.response);});
		VK.api("storage.get", {"key":"name1","global":1},function(data){names.push(data.response);});
		VK.api("storage.get", {"key":"name2","global":1},function(data){names.push(data.response);});
		VK.api("storage.get", {"key":"name3","global":1},function(data){names.push(data.response);});
		for(var i=0;i<score.length;i++){
			if(Number(scores[i])<=score){
				n=i;
			}
		}
		if(n>-1){
			names.splice(n,0,name);
			scores.splice(n,0,score);
			scores.text="Рекорды:\n1. "+names[0]+" "+scores[0]+"\n2. "+names[1]+" "+scores[1]+"\n3. "+names[2]+" "+scores[2];
		}else{
			scores.text="Рекорды:\n1. "+names[0]+" "+scores[0]+"\n2. "+names[1]+" "+scores[1]+"\n3. "+names[2]+" "+scores[2];
			scores.text=scores.text+"\n Результат "+score+"не попал в топ(";
		}
	} 
}