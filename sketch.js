
var  database;
var  dog, happyDog;
var dogimg1,dogimg2;
var foodS, foodStock;
function preload()
{
  dogimg1 = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg1);
  dog.scale = 0.3;
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

    
}

function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg2);
  }
  drawSprites();
 textSize(28);
 fill("white");
  stroke("black");
 text("Food Remaining : "+foodS, 150,60);             
  
  //add styles here 
  
}   

function readStock(data){ 
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}
/*
var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
   dogImg=loadImage("Images/dogImg.png");
   dogImg1=loadImage("Images/dogImg1.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}*/