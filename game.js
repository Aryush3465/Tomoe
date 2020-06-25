class Game {
    constructor(){
    }

    async start(){
        form = new Form()
        form.display();
      }
  
      Tomoe = createSprite(100,200);
    //  Tomoe.addImage("car1",car1_img);
      Hikaru = createSprite(300,200);
    //  Hikaru.addImage("car2",car2_img);
      Rena = createSprite(500,200);
    //  Rena.addImage("car3",car3_img);
      Yagami = createSprite(700,200);
    //  Yagami.addImage("car4",car4_img);
    }
  
    play();{
      form.hide();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(formB, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;   
  
      } 
    drawSprites();
    }     