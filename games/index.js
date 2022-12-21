const canvas = document.getElementById("canvas")
//Creating TileMaps
var tilemap1 = 
  [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ];
var tilemap2 =
  [
    3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  ];

//Declaring Variables
var MAP_WIDTH = 20;
var MAP_HEIGHT = 20;
var TILE_WIDTH = 50;
world.gravity.y = 0;
//Creating Texture Map

var textures =
  [
    0,
    tile1,
    tile2,
    "tile3",
    "tile4",
];
//Setting Textures
for(i=0;i<textures.length;i++)
{
    if(i=0)
    {
        i++;
    }
    textures[i] = new loadImage('../img/games/'+textures[i]+'.png');
}
//Creating a collision map
var TileCollisions =
  [
    0,
    0,
    0,
    0,
    1,
  ];
  //Creating a depth map
var depth =
  [
    0,
    "-2",
    "-1"
  ];

// Creating player sprite
var player = new Sprite(200,200,20,20,'d');
var PLAYER_SPEED = 8;
var PLAYER_DIAG_SPEED = sqrt(2*(PLAYER_SPEED^2));
player.scale = 1;


//Function that detects player input
function PlayerInput() 
{
  //Movement input detection
  if(keyDown("right")||keyDown("d")) 
  {
    tryMove(1,0);
  }
  if(keyDown("left")||keyDown("a"))
  {
    tryMove(-1,0);
  }
  if(keyDown("up")||keyDown("w"))
  {
    tryMove(0,-1);
  }
  if(keyDown("down")||keyDown("s"))
  {
    tryMove(0,1);
  }
}


//Function that carries out player movement
function tryMove(dx,dy)
{
  var lastMove;
  if(Math.abs(player.velocityX)>PLAYER_SPEED&&Math.abs(player.velocityY)>PLAYER_SPEED)
  {
    player.x += PLAYER_DIAG_SPEED*dx;
    player.y += PLAYER_DIAG_SPEED*dy;
  }
  else
  {
    player.x += PLAYER_SPEED*dx;
    player.y += PLAYER_SPEED*dy;
  }
  camera.x = clamp(player.x,200,TILE_WIDTH*MAP_WIDTH-200);
  camera.y = clamp(player.y,200,TILE_WIDTH*MAP_HEIGHT-200);
  player.x = clamp(player.x,0+player.width/2,(TILE_WIDTH-1)*MAP_WIDTH+player.width/2);
  player.y = clamp(player.y,0+player.width/2,(TILE_WIDTH-1)*MAP_WIDTH+player.width/2);
}

//Draws the map
function createBlocks(tilemap)
{
  //creates an empty array for the tiles
  var tiles = createArray(tilemap.length);
  //repeats for the height of the map
  for(var i=0;i<MAP_HEIGHT;i++)
  {
    //repeats for the length of the map
    for(var ii=0;ii<TILE_MAX;ii++)
    {
      //Checks if the block is not nothing
      if(tilemap[i*TILE_MAX+ii]!=0)
      {
        //If the block is not nothing, it creates a block in its place
        //turns the corrosponding spot in tiles into a sprite at the correct postion
        tiles[i*TILE_MAX+ii] = createSprite(ii*TILE_WIDTH+TILE_WIDTH/2,i*TILE_WIDTH+TILE_WIDTH/2);
        //Initializes the block to have the correct texture
        initBlock(tiles[i*TILE_MAX+ii], textures[tilemap[i*TILE_MAX+ii]],depth[tilemap[i*TILE_MAX+ii]]);
      }
    }
  }
}


//Creates a tile and adds to the collision group
function initBlock(spriteName,animNum,depth) 
{
  spriteName.setAnimation(animNum);
  spriteName.depth=depth;
  if(TileCollisions[textures.indexOf(animNum)]!=0)
  {
    setCollision(TileCollisions[textures.indexOf(animNum)],spriteName);
  }
  spriteName.width = TILE_WIDTH;
  spriteName.height = TILE_WIDTH;
}

function setCollision(type,sprite)
{
  switch(type)
  {
    case 1:
      sprite.setCollider("rectangle",0,0,TILE_WIDTH/2,TILE_WIDTH);
      solidBlocks.add(sprite);
      break;
  }
}

function createArray(length)
{
  var array = [];
  for(var i = 0;i<length;i++)
  {
    array[i] = [];
  }
  return array;
}
function clamp(num,min,max)
{
  return(Math.min(Math.max(num,min),max));
}


createBlocks(tilemap1);
createBlocks(tilemap2);

function draw() 
{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    drawSprites();
}