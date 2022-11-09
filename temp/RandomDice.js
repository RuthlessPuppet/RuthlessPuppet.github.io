fill("BLACK");
rect(0,0,400,400);
fill("WHITE");
rect(125,125,150,150);
checkFlag();

function checkFlag() {
    if(keyDown("space") === false) 
    {
       window.setTimeout(checkFlag, 100);
    } 
    else 
    {
      dot(200,200,20,"BLACK");
    }
}
checkFlag();




function RandomizeDice(ran)
{
  switch(ran)
  {
    case 1:
      dot(200,200,20,"BLACK");
      break;
    case 2:
      dot(150,250,20,"BLACK");
      
  }
}


function Say(string)
{
  return string;
}



function dot(x,y,size,color)
{
  fill(color);
  ellipse(x,y,size,size);
}


