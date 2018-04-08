var game;
var koefx;//коэффициент экрана
var koefy;
VK.init(function() {console.log("success")}, function() {console.log("error")}, '5.74');
window.onload=function(){
    koefx=window.innerWidth/900;
    game = new Phaser.Game(window.innerWidth-50*koefx, window.innerHeight-100*koefx, Phaser.CANVAS, "ph_game");
	game.state.add("Menu",Menu);
	game.state.add("Game",Game);
	game.state.add("Finish",Finish);
	game.state.start("Menu");
}
