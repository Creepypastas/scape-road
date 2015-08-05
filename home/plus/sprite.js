var 
car,
kornegyz,
nyil1,
nyil2,
vnyil,
restart
;

function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

function initSprites3(img) {

	nyil1=new Sprite(img, 5, 208,56,146);
	nyil2=new Sprite(img, 62, 211,65,146);
	restart = new Sprite(img, 79, 26,96,96);
	vnyil=new Sprite(img, 80, 130,115,23);
	kornegyz=[
	new Sprite(img, 2, 43,36,36),
	new Sprite(img, 2, 2,36,36),
	new Sprite(img, 40, 43,36,36),
	new Sprite(img, 40, 2,36,36),
	new Sprite(img, 200, 45,36,36),
	new Sprite(img, 200, 2,36,36)
	
	
	/*kek kor kék negyzet, piros kor negyzet ,zold*/


	];
	
	car =[
			new Sprite(img, 2, 87,34,66),
			new Sprite(img, 38, 87,34,66),
			new Sprite(img, 199,89,34,66)
	];
	
}

function initSprites4(img) {

	nyil1=new Sprite(img, 5, 208,56,146);
	nyil2=new Sprite(img, 62, 211,65,146);
	restart = new Sprite(img, 79, 26,96,96);
	vnyil=new Sprite(img, 80, 130,115,23);
	kornegyz=[
	new Sprite(img, 153, 190,24,24),
	new Sprite(img, 153, 163,24,24),
	new Sprite(img, 177, 190,24,24),
	new Sprite(img, 177, 163,24,24),
	new Sprite(img, 202, 190,24,24),
	new Sprite(img, 202, 163,24,24),
	new Sprite(img, 227, 190,24,24),
	new Sprite(img, 227, 163,24,24)
	
	
	/*kek kor kék negyzet, piros kor negyzet ,sarga,zold*/


	];
	
	car =[
			new Sprite(img, 153, 219,23,42),
			new Sprite(img, 176, 219,23,42),
			new Sprite(img, 202, 219,23,42),
			new Sprite(img, 227, 219,23,42)

	];
	
}