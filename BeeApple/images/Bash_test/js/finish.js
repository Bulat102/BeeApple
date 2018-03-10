var scoresText;
var scores=[];
var names=[];
var n=-1;
var name;
var code;
var Finish ={
	preload : function(){},
	create: function(){
		var retryBut = game.add.text(220,340,"  зАново  ",{font:"bold 24px Arial",fill:'#000000', align:'center'});
		var postBut = game.add.text(410,340,"  опубликовАть  ",{font:"bold 24px Arial",fill:'#000000', align:'center'});
		graphics=game.add.graphics(0,0);
		graphics.lineStyle(0);
		graphics.beginFill(0x4869D6,0.5);
		graphics.drawRect(retryBut.x,retryBut.y-5,retryBut.width,retryBut.height+10);
		graphics.drawRect(postBut.x,postBut.y-5,postBut.width,postBut.height+10);
		graphics.endFill();
		instruction = game.add.text(game.world.width/2,270,
			"Вы заработали\n "+score+this.whatSl(),
			{font:"bold 28px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0.5);	
		scoresText = game.add.text(5,5,"",{font:"italic 23px Arial",fill:'#1c3956'});
		postBut.inputEnabled=true;
		retryBut.inputEnabled=true;
		postBut.events.onInputDown.add(this.wallPost,this);
		retryBut.events.onInputDown.add(function(){game.state.start("Game");},this);
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
		VK.api("wall.post", {"message": String("В игре Udareniya я набрал "+score+this.whatSl()+".                           __Играть через пк: goo.gl/hycxn6   __Через телефон: goo.gl/P6XNLc"), "attachments": "photo-160039023_456239019"});
	},
	whatSl: function(){
		var ret="очко";
		if(Math.abs(score)==0 || Math.abs(score)>=5){
				ret=" очков";
		}else if(Math.abs(score)>1 && Math.abs(score)<5){
				ret=" очка";
		}
		return String(' '+ret);
	},
	setScores: function(){
		for(var i=scores.length-1;i>=0;i--){
			if(Number(scores[i])<=Number(score)){
				n=i;
			}
		}
		if(n>-1){
			names.splice(n,0,name);
			scores.splice(n,0,score);
			scoresText.text="Рекорды:\n1. "+names[0]+" "+scores[0]+"\n2. "+names[1]+" "+scores[1]+"\n3. "+names[2]+" "+scores[2];
			scoresText.text=scoresText.text+"\n\n Результат "+score+" попал в топ)";
			code =String('return[API.storage.set({"key":"top1","value": \"'+scores[0]+'\","global":1}),API.storage.set({"key":"top2","value": \"'+scores[1]+'\","global":1}),API.storage.set({"key":"top3","value":\"'+scores[2]+'\","global":1}),API.storage.set({"key":"name1","value":\"'+names[0]+'\","global":1}),API.storage.set({"key":"name2","value":\"'+names[1]+'\","global":1}),API.storage.set({"key":"name3","value": \"'+names[2]+'\","global":1})];');
			VK.api("execute",{"code":code});
		}else{
			scoresText.text="Рекорды:\n1. "+names[0]+" "+scores[0]+"\n2. "+names[1]+" "+scores[1]+"\n3. "+names[2]+" "+scores[2];
			scoresText.text=scoresText.text+"\n\n Результат "+score+" не попал в топ(";
		}
	} 
};
