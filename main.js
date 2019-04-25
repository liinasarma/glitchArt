let img;

function preload(){

img = loadImage('https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_20120702-1848_16x9.jpg?itok=embMTBY2');
}

function setup(){
createCanvas(1200,800);


}

function draw(){
background(100);
 image(img, 0, 0);

}