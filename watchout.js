// start slingin' some d3 here.

var gameOptions = {height:450, width:700, nEnemies:30, padding:20};
var gameStats = {score:0, bestScore:0};
var axes ={
  x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
  y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
};

var svg = d3.select('.container').append('svg')
      .attr({width: gameOptions.width, height: gameOptions.height});

var updateScore = function(){
  d3.select('#current-score').text(gameStats.score.toString());
};

var updateBestScore = function(){
  gameStats.bestScore = Math.max(gameStats.bestScore, gameStats.score);
  d3.select('#best-score').text(gameStats.bestScore.toString());
};

var Player = function(gameOptions){
  this.path = 'm-7.5,1.62413c0,-5.04095 4.08318,-9.12413 9.12414,-9.12413c5.04096,0 9.70345,5.53145 11.87586,9.12413c-2.02759,2.72372 -6.8349,9.12415 -11.87586,9.12415c-5.04096,0 -9.12414,-4.08318 -9.12414,-9.12415z';

  this.fill = '#ff6600';
  this.x = 0;
  this.y = 0;
  this.angle = 0;
  this.r = 5;
  this.gameOptions = gameOptions;

};

Player.prototype.render = function(board){
  board.append('svg:path')
        .attr('d', this.path)
        .attr('fill', this.fill);
  this.transform({
      x: this.gameOptions.width * 0.5 ,
      y: this.gameOptions.height * 0.5
  });
  this.setupDragging()
  return this;
};

var enemy =svg.append('circle').attr({cx:60, cy:60, r:10});



