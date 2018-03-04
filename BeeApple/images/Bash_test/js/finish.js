var scoresText;
var scores=[];
var names=[];
var n=-1;
var name;
var code;
var Finish ={
	preload : function(){},
	create: function(){

		instruction = game.add.text(game.world.width/2,game.world.height/2,
			"За 15 секунд вы верно ответили\n на "+score+this.whatSl("вопрос")+"\n Кликните, чтобы поделиться",
			{font:"bold 9px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0.5);	
		scoresText = game.add.text(5,5,"",{font:"italic 20px Arial",fill:'#1c3956'})
		game.input.onDown.add(this.wallPost,this);
		var scor=this.setScores;
		code=String('return{"name":API.users.get(),"scores":API.storage.get({"keys":"top1,top2,top3,name1,name2,name3", "global":1})};');
		VK.api("execute",{"code":code},function(data){
			name=String(data.response.name[0].last_name+" "+data.response.name[0].first_name);
			scores=[data.response.scores[0].value,data.response.scores[1].value,data.response.scores[2].value];
			names=[data.response.scores[3].value,data.response.scores[4].value,data.response.scores[5].value];
			scor();
		});
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
		for(var i=scores.length-1;i>=0;i--){
			if(Number(scores[i])<=score){
				n=i;
			}
		}
		if(n>-1){
			names.splice(n,0,name);
			scores.splice(n,0,score);
			scoresText.text="Рекорды:\n1. "+names[0]+" "+scores[0]+"\n2. "+names[1]+" "+scores[1]+"\n3. "+names[2]+" "+scores[2];
			code =String('return[API.storage.set({"key":"top1","value": \"'+scores[0]+'\","global":1})];');
			VK.api("execute",{"code":code},function(data){instruction.text=JSON.stringify(data,"",4);});
		}else{
			scoresText.text="Рекорды:\n1. "+names[0]+" "+scores[0]+"\n2. "+names[1]+" "+scores[1]+"\n3. "+names[2]+" "+scores[2];
			scoresText.text=scoresText.text+"\n Результат "+score+"не попал в топ(";
		}
	} 
}
