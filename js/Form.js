class Form {
  constructor() {
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.text = createElement('h3')

  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.text.hide();

  }
  
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    this.text.html("Enter your Name");
    this.text.position(40, 120);
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
