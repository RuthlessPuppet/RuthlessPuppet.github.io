DrawDice(randomNumber(1,6));


function DrawDice(amount)
{
  fill("ivory");
  rect(160,180);
  strokeWeight(10);
    
  if(amount===1)
  {
    point(185,205);
  }
  else
  {
     if(amount===2)
    {
    point(200,190);
    point(170,220);
    }
    else
    {
      if(amount===3)
      {
        point(200,190);
        point(185,205);
        point(170,220);
      }
      else
      {
        if(4===4)
        {
          point(170,190);
          point(200,190);
          point(170,220);
          point(200,220);
        }
      }
    }
  }
}



switch(randomNumber(1,6))
{
    case 1:
        point(185,205);
        break;
    case 2:
        point(200,190);
        point(170,220);
        break;
    case 3:
        point(200,190);
        point(185,205);
        point(170,220);
        break;
    case 4:
        point(170,190);
        point(200,190);
        point(170,220);
        point(200,220);
        break;
}

/*
fill("ivory");
rect(160, 180);
point(170, 190);
point(185, 205);
point(200, 220);
*/
