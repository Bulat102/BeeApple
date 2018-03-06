var game;
//VK.init(function() {}, function() {}, '5.73');
window.onload=function(){
	game = new Phaser.Game(800,600,Phaser.AUTO,'Bash_test');
	game.state.add("Menu",Menu);
	game.state.add("Game",Game);
	game.state.add("Finish",Finish);
	game.state.start("Menu");
}