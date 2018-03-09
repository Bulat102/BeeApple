var game;
var koefx;//коэффициент экрана
var koefy;
VK.init(function(data) {console.log(data)}, function(data) {console.log(data)}, '5.60');
window.onload=function(){
    koefx=window.innerWidth/900;
    game = new Phaser.Game(window.innerWidth-50*koefx, window.innerHeight-100*koefx, Phaser.AUTO, "ph_game");
	game.state.add("Menu",Menu);
	game.state.add("Game",Game);
	game.state.add("Finish",Finish);
	game.state.start("Menu");
}
