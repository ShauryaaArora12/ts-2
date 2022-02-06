const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var ground , engine , world , stand1 , stand2 
 var box1 , box2 , box3 , box4 ,box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12
 var slingShot , polygon , polygonImage
function preload(){
   polygonImage =  loadImage("polygon.png")
}

function setup(){
    createCanvas(900,400)
    engine = Engine.create()
    world  = engine.world
    Engine.run(engine)

    ground = new Ground(450 , 390 , 900 , 20)

    stand1 = new Stand(400,300,250,10)
    stand2 = new Stand(700,200,200,10)

    box1 = new Box(300,275,30,40)
    box2 = new Box(330,275,30,40)
    box3 = new Box(360,275,30,40)
    box4 = new Box(390,275,30,40)
    box5 = new Box(420,275,30,40)
    box6 = new Box(450,275,30,40)
    box7 = new Box(480,275,30,40)
   
    box8 = new Box(440,235,30,40)
    box9 = new Box(330,235,30,40)
    box10 = new Box(360,235,30,40)
    box11 = new Box(390,235,30,40)
    box12 = new Box(420,235,30,40)

    box13 = new Box(360,195,30,40)
    box14 = new Box(390,195,30,40)
    box15 = new Box(420,195,30,40)

    box16 = new Box(390,155,30,40)

    b1= new Box(640,175,30,40)
    b2 = new Box(670,175,30,40)
    b3 = new Box(700,175,30,40)
    b4 = new Box(730,175,30,40)
    b5 = new Box(760,175,30,40)

    b6 = new Box(670,135,30,40)
    b7 = new Box(700,135,30,40)
    b8 = new Box(730,135,30,40)

    b9 = new Box(700,95,30,40)
    polygon = Bodies.circle(50,200,20)
    World.add(world , polygon)
    slingShot = new SlingShot(this.polygon,{
        x : 100 , y : 200
    })
}
function draw(){
    background("black")
    Engine.update(engine)
    ground.display()

    stand1.display()
    stand2.display()
   
    fill("purple")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
   
    fill("yellow")
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    
    fill("green")
    box13.display()
    box14.display()
    box15.display()
    
    fill("pink")
    box16.display()
     
    fill("cyan")
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    
    fill("white")
    b6.display()
    b7.display()
    b8.display()

    fill("orange")
    b9.display()
    image (polygonImage , polygon.position.x , polygon.position.y , 40 , 40)
    slingShot.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{ x : mouseX  , y: mouseY})
}

function mouseReleased(){
    slingShot.fly()
}

function keyPressed(){
    if(keyCode===32){
    slingShot.attach(this.polygon)
    }
}