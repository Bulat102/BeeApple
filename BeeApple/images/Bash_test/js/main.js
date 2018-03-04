var game;
VK.init(function() {}, function() {}, '5.73');
window.onload=function(){
	var code=String('return{"name":API.account.getProfileInfo(),"scores":API.storage.get({"keys":"top1,top2,top3,name1,name2,name3", "global":1})};');
		VK.api("execute",{"code":code},function(data){
			name=String(data.response.name.last_name+" "+data.response.name.first_name);
			scores=[data.scores[0].value,data.scores[1].value,data.scores[2].value];
			names=[data.scores[3].value,data.scores[4].value,data.scores[5].value];
	});
	game = new Phaser.Game(800,600,Phaser.AUTO,'Bash_test');
	game.state.add("Menu",Menu);
	game.state.add("Game",Game);
	game.state.add("Finish",Finish);
	game.state.start("Menu");
}
