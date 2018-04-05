var game;
VK.init(function() {}, function() {}, '5.60');
window.onload=function(){else {
    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
	game.state.add("Menu",Menu);
	game.state.add("Game",Game);
	game.state.add("Finish",Finish);
	game.state.start("Menu");
}
