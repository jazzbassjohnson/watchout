var svg =  d3.select('.game-container').append('svg').attr({width: '100%', height: 500}).style('background-color', '#d3f9e6');

svg.append('circle').attr({class: 'player', r: 12, cx: 100, cy: 100 }).style('color', 'red');

var randomEnemy =function(){
  var enemyData = [];
  for(var i = 0; i < 21; i++){
    enemyData.push({
      x: Math.random() * 500,
      y: Math.random() * 500,
      r: 10

    });
  }
  return enemyData;
};

var update = function(enemyData){
  var enemies = svg.selectAll('.enemy').data(enemyData);

  enemies.enter().append('circle').attr({
    class: 'enemy',
    r: function(d){return d.r;},
    cx: function(d){return d.x;},
    cy: function(d){return d.y;}
  })
  .style('opacity', 0);

  enemies.transition().duration(1000).style({opacity: 1}).attr({
    class: 'enemy',
    r: function(d){return d.r;},
    cx: function(d){return d.x;},
    cy: function(d){return d.y;}
  });

};




//write update background






var data = randomEnemy();

update(data);
setInterval(function(){update(randomEnemy());}, 1000);


















// // start slingin' some d3 here.

// var gameOptions = {height:450, width:700, nEnemies:30, padding:20};
// var gameStats = {score:0, bestScore:0};
// var axes ={
//   x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
//   y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
// };

// var svg = d3.select('.container').append('svg')
//       .attr({width: gameOptions.width, height: gameOptions.height});

// var updateScore = function(){
//   d3.select('#current-score').text(gameStats.score.toString());
// };

// var updateBestScore = function(){
//   gameStats.bestScore = Math.max(gameStats.bestScore, gameStats.score);
//   d3.select('#best-score').text(gameStats.bestScore.toString());
// };





// // nextEnemyId = 0
// // class Enemy
// //      * keeps track of itself in memory
// //      * updates the display of itself on any change
// //      * knows how to move
// //
// //      id    serial number of this enemy 0..onward
// //      x     horizontal co-ordinate of center
// //      y     vertical co-ordinate of center
// //      r     radius from center to outside edge
// //
// //      constructor(r)
// //          this.id = nextEnemyId++
// //          this.x = random
// //          this.y = random
// //          this.r = r
// //          svg.append('circle').attr(
// //              { id:i , cx:this.x , cy:this.y , r:this.r })
// //
// //      move()
// //          this.x = random
// //          this.y = random
// //          svg.select(this.id).transition().duration()
// //              .attr({cx:this.x, cy:this.y})
// //






// var enemy = svg.append('circle').attr({cx:60, cy:60, r:10});

// //add one enemy
// //
// // create enemy array





// var Player = function(gameOptions){
//   this.path = 'm-7.5,1.62413c0,-5.04095 4.08318,-9.12413 9.12414,-9.12413c5.04096,0 9.70345,5.53145 11.87586,9.12413c-2.02759,2.72372 -6.8349,9.12415 -11.87586,9.12415c-5.04096,0 -9.12414,-4.08318 -9.12414,-9.12415z';

//   this.fill = '#ff6600';
//   this.x = 0;
//   this.y = 0;
//   this.angle = 0;
//   this.r = 5;
//   this.gameOptions = gameOptions;
// };

// Player.prototype.render = function(board){
//   board.append('svg:path')
//         .attr('d', this.path)
//         .attr('fill', this.fill);
//   this.transform({
//       x: this.gameOptions.width * 0.5 ,
//       y: this.gameOptions.height * 0.5
//   });
//   this.setupDragging()
//   return this;
// };
// console.log(d3.scale.linear().domain([0,100]).range([0,gameOptions.width]))
