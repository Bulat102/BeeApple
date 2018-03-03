var button1;
var button2;
var eventDispatcher;
var words=['валовОй','вАловый','ветеринАрия','ветеринарИя','баловАть','бАловать','бАрмен','бармЕн','бОчковое','бочкОвое','газопровОд','газопрОвод','договОр','дОговор','жалюзИ','жАлюзи','завИдно','зАвидно','каталОг','катАлог','красИвее','красивЕе','мАркетинг','маркЕтинг','мастерскИ','мАстерски','обеспЕчение','обеспечЕние','облегчИть','облЕгчить','откУпорить','откупОрить','позвонИшь','позвОнишь','тОрты','тортЫ','тУфля','туфлЯ','фенОмен','феномЕн','чЕрпать','черпАть','тОтчас','тотчАс','танцОвщица','танцовщИца'];
var right;
var time;
var timer;
var score;
var Game ={
	preload : function(){
		game.load.spritesheet('button','images/button.png',220,76);
	},
	create: function(){
		time=15;
		score=0;
		eventDispatcher = new Phaser.Signal();
		instruction=game.add.text(game.world.width/2,0,'Выберите верное',{font:"bold 32px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0);
		instruction.y=140;
		button1=new Button(game.world.width/2-236/2-30,game.world.height/2);
		button2=new Button(game.world.width/2+236/2+30,game.world.height/2);
		this.makeQuestion();
	},
	update: function(){},
	makeQuestion: function(){
		timer=game.time.events.loop(Phaser.Timer.SECOND,this.secondCount,this);
		button1.s.frame=0;
		button2.s.frame=0;
		var num=game.rnd.integerInRange(0,words.length/2-1);
		if(game.rnd.integerInRange(0,1)){
			button1.setName(words[num*2]);
			button2.setName(words[num*2+1]);
		}else{
			button1.setName(words[num*2+1]);
			button2.setName(words[num*2]);
		}
		right=words[num*2];
	},
	secondCount: function(){
		time--;
		instruction.text=time;
		if(time<0){
			game.time.events.remove(timer);
			game.state.start("Finish");
		}
	},
	startTimer: function(stopTime){
		if(stopTime){
			time--;
		}
		game.time.events.remove(timer);
		var timer1=game.time.create(false);
		timer1.add(Phaser.Timer.SECOND,this.makeQuestion,this);
		timer1.start();
	}
}