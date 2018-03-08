var button1;
var button2;
var buty;
var eventDispatcher;
var words;
var right;
var time;
var timer;
var timer1;
var score;
var scoreText;
var graphics;
var Game ={
	preload : function(){
		game.load.spritesheet('button','images/button2.png',236,89);
	},
	create: function(){
		graphics = game.add.graphics(0,0);
		time=15;
		score=0;
		words=['валовОй','вАловый','ветеринАрия','ветеринарИя','баловАть','бАловать','бАрмен','бармЕн','бОчковое','бочкОвое','газопровОд','газопрОвод','договОр','дОговор','жалюзИ','жАлюзи','завИдно','зАвидно','каталОг','катАлог','красИвее','красивЕе','мАркетинг','маркЕтинг','мастерскИ','мАстерски','обеспЕчение','обеспечЕние','облегчИть','облЕгчить','откУпорить','откупОрить','позвонИшь','позвОнишь','тОрты','тортЫ','тУфля','туфлЯ','фенОмен','феномЕн','чЕрпать','черпАть','тОтчас','тотчАс','танцОвщица','танцовщИца'];
		eventDispatcher = new Phaser.Signal();
		instruction=game.add.text(game.world.width/2,game.world.height/2-130*koefx,'Выберите верное',{font:"bold "+String(Math.round(32*koefx))+"px Arial",fill:'#000000', align:'center'});
		instruction.anchor.set(0.5,0);
		scoreText=game.add.text(game.world.width/2,game.world.height*2.5/4,'0',{font:"bold "+String(Math.round(150*koefx))+"px Arial",fill:'#4282D3', align:'center'});
		scoreText.anchor.set(0.5,0);
		scoreText.alpha=0.3;
		scoreText.setShadow(7*koefx,10*koefx,'rgba(0,0,0,0.5)',10*koefx);
		button1=new Button(game.world.width/2-150*koefx*1.5,game.world.height/2);
		button2=new Button(game.world.width/2+150*koefx*1.5,game.world.height/2);
		buty=game.world.height/2;
		this.makeQuestion();
		this.makeTimer();
		timer=game.time.events.loop(Phaser.Timer.SECOND,this.secondCount,this);
	},
	update: function(){},
	makeQuestion: function(){
		if(time){
			button1.s.frame=0;
			button2.s.frame=0;
			button1.y=buty;
			button2.y=buty;
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
		}else{
			game.state.start("Finish");
		}
	},
	secondCount: function(){
		time--;
		this.makeTimer();
		if(time==0){
			game.time.events.remove(timer);
		}
	},
	startTimer: function(){
		scoreText.text=score;
		timer1=game.time.create(false);
		timer1.add(750,this.makeQuestion,this);
		timer1.start();
	},
	makeTimer: function(){
		graphics.clear();
		graphics.lineStyle(0);
		graphics.beginFill(0xA60000,0.35);
		graphics.drawRect(0,game.world.height-50*koefx,game.world.width,30*koefx);
		graphics.endFill();
		graphics.lineStyle(0);
		graphics.beginFill(0x00FF00,0.37);
		graphics.drawRect(0,game.world.height-50*koefx,game.world.width*(time/15),30*koefx);
		graphics.endFill();
	}
}