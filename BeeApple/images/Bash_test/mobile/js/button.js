class Button extends Phaser.Group{
	constructor(x,y){
		super(game);
		var s=game.add.sprite(0,0,'button');
		var textF=game.add.text(0,0,'',{font:"bold 23px Arial",fill:'#000000', align:'center'});
		textF.anchor.set(0.5);
		s.anchor.set(0.5);
		this.add(s);
		this.add(textF);
		this.x=x;
		this.y=y;
		s.inputEnabled=true;
		s.events.onInputDown.add(this.pressed,this);
		this.s=s;
		this.textF=textF;
		eventDispatcher.add(this.gotEvent,this);
	}
	pressed(){
		eventDispatcher.dispatch("press",this);
	}
	gotEvent(call,params){
		if(call=="press"){
			if(params==this && right){
				this.y+=3;
				if(this.textF.text==right){
					this.s.frame=2;
					score++;
				}else{
					this.s.frame=1;
					score--;
				}
				right='';
				Game.startTimer();
			}
		}
	}
	setName(text){
		this.textF.text=text;
	}
}