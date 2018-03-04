var button1;
var button2;
var eventDispatcher;
var words;
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
		words=['валовОй','вАловый','ветеринАрия','ветеринарИя','баловАть','бАловать','бАрмен','бармЕн','бОчковое','бочкОвое','газопровОд','газопрОвод','договОр','дОговор','жалюзИ','жАлюзи','завИдно','зАвидно','каталОг','катАлог','красИвее','красивЕе','мАркетинг','маркЕтинг','мастерскИ','мАстерски','обеспЕчение','обеспечЕние','облегчИть','облЕгчить','откУпорить','откупОрить','позвонИшь','позвОнишь','тОрты','тортЫ','тУфля','туфлЯ','фенОмен','феномЕн','чЕрпать','черпАть','тОтчас','тотчАс','танцОвщица','танцовщИца'];
		eventDispatcher = new Phaser.Signal();
		instruction=game.add.text(game.world.width/2,140,'Выберите верное\nвремя: 15',{font:"bold 32px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0);
		button1=new Button(game.world.width/2-236/2-30,game.world.height/2);
		button2=new Button(game.world.width/2+236/2+30,game.world.height/2);
		this.makeQuestion();
		timer=game.time.events.loop(Phaser.Timer.SECOND,this.secondCount,this);
	},
	update: function(){},
	makeQuestion: function(){
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
		var a=words.splice(num*2,2);
	},
	secondCount: function(){
		time--;
		instruction.text='Выберите верное\nвремя: '+time;
		if(time<0){
			game.time.events.remove(timer);
			game.state.start("Finish");
		}
	},
	startTimer: function(){
		var timer1=game.time.create(false);
		timer1.add(Phaser.Timer.SECOND,this.makeQuestion,this);
		timer1.start();
	}
}
