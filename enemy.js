// // nextEnemyId = 0   * Serial number memory
// // class Enemy
// //      * Has a circular influence field on gameplay
// //      * Knows its own ID (serial number)
// //      * Keeps track of its own position and size
// //      * Knows how to move itself in some way
// //      * Updates its display whenever it becomes stale
// //
// //      id    ID number: integer 0..(nextEnemyId-1)
// //      x100  horiz co-ord (0..99.9) of center of this enemy
// //      y100  vert co-ord (0..99.9) of center of this enemy
// //      rPix  radius of this enemy's body, center to edge
// //
// //      constructor(radius)
// //          this.id = nextEnemyId++
// //          this.x100 = random
// //          this.y100 = random
// //          this.rPix = radius
// //          svg.append('circle').attr(
// //              { id:i , cx:this.x , cy:this.y , r:this.r })
// //
// //      move()
// //        * Randomly assign to a destination anywhere on gameboard
// //          this.x100 = random(100)
// //          this.y100 = random(100)
// //        * Initiate animation to linearly move to new position
// //        * Possibly do the animation in such a way as to detect a collision

// var nextEnemyId = 0;
// var Enemy = function(radius){
//   this.id = nextEnemyId++;
//   this.x100 = Math.random() * 100; // on a scale of 0.00 to 99.99
//   this.y100 = Math.random() * 100;
//   this.rPix = radius;
//   svg.append('circle').attr({ id:i , cx:this.x , cy:this.y , r:this.r });
// };

// // Generate two functions which accept one argument, a number
// // in the range (0 .. 99.99) and return a number in proportion
// // in the range (0 .. gameboard aspect dimension in pixels)
// Enemy.prototype._xPixFrom100 =
//     d3.scale.linear().domain([0,100]).range([0,gameOptions.width]);
// };
// Enemy.prototype._yPixFrom100 =
//     d3.scale.linear().domain([0,100]).range([0,gameOptions.height]);
// };

// Enemy.prototype.move = function(){
//   // Randomly assign to a destination anywhere on gameboard
//   this.x100 = Math.random() * 100;
//   this.y100 = Math.random() * 100;
//   // Initiate animation to linearly move to new position
//   _xPixFrom100(this.x100)
//   _yPixFrom100(this.y100)
//   // svg.select(this.id).transition().duration()
//   //       .attr({cx:this.x100, cy:this.y})

// };
