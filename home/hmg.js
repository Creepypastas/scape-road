
var 
hatpos=-60,
width, //ablak szelesseg
height,//ablak magassag
aszembej=[],  //szembej listaja
bszembej=[],
cszembej=[],
dszembej=[],
acar,
bcar,
ccar,
dcar,
bg='#143256',
piros='#C4273C',
kek='#00C6FF',
score=0,
jatek=false,
cardb=3;
interup=10,
kocssize=0,
savwidth=0;
vill=[],
villog=false,
seb=2;


function po(){
this.x=0;
this.y=0;
};



 function kocs(){
		this.x=savwidth/2-car[kocssize].width/2;
		this.y=height-height/3;
		this.jsav=true;
		this.jbenvan=true;
		this.k=0;
		this.fok=0;
		}

	kocs.prototype.draw= function(ctx) {

		ctx.save();
		
		ctx.translate(this.x+car[kocssize].width/2,this.y+car[kocssize].height/2);
		
		ctx.rotate(this.fok);
		
		car[this.k].draw(ctx,-car[kocssize].width/2,-car[kocssize].height/2);


		ctx.restore();
	};

	kocs.prototype.update = function() {
	
			if(this.jsav)
					{
						hollenne=(savwidth/2-car[kocssize].width/2)+this.k*(savwidth*2)+savwidth;
							if(this.x+3<hollenne || this.x-3>hollenne){ //nem ott van
								if(this.x<hollenne)
								{
									this.x+=5;
									
								}
								else
								{
									this.x-=5;
									
								}

								if(this.jbenvan)
									{
										this.fok-=0.08;
									}else{
										this.fok+=0.08;
									}

							}
							else
							{
								this.fok=0;
								this.x=hollenne;
							}

							if(this.x>hollenne-savwidth/2)
							{
								this.jbenvan=true;
								//this.fok=0;
								
							}

					}
				else
					{
						hollenne=(savwidth/2-car[kocssize].width/2)+this.k*(width/cardb);
						if(this.x+3<hollenne || this.x-3>hollenne){
								if(this.x<hollenne)
								{
									this.x+=5;
									
								}
								else
								{
									this.x-=5;
									
								}

								if(this.jbenvan)
									{
										this.fok-=0.08;
									}else{
										this.fok+=0.08;
									}
							}
							else
							{
								this.fok=0;
								this.x=hollenne;
							}

						if(this.x<hollenne+savwidth/2)
							{
								this.jbenvan=false;								
								//this.fok=0;
							}
						
					}

	};

		kocs.prototype.valt = function() {
			if(this.jsav){this.jsav=false;}else{this.jsav=true;}
	};
	   

function szb(){
	this.x=0;
	this.y=-40;
	this.k=0;// mi jon szembe(kepindexe)
	this.active=true;
	this.jsav;
	this.aktive=true;
	}

	szb.prototype.draw= function(ctx) {
		kornegyz[this.k].draw(ctx,this.x,this.y);
	};

	szb.prototype.update = function() {
	this.y+=seb;


	if(this.active && acar.y-this.y<70){

		if(this.k==0 && acar.jsav!=this.jsav){acar.valt();}
		if(this.k==2 && bcar.jsav!=this.jsav){bcar.valt();}
		if(cardb>2 && this.k==4 && ccar.jsav!=this.jsav){ccar.valt();}
		if(cardb>3 && this.k==6 && dcar.jsav!=this.jsav){dcar.valt();}

		if(this.k==1 && acar.jsav==this.jsav){acar.valt();}
		if(this.k==3 && bcar.jsav==this.jsav){bcar.valt();}
		if(cardb>2 && this.k==5 && ccar.jsav==this.jsav){ccar.valt();}
		if(cardb>3 && this.k==7 && dcar.jsav==this.jsav){dcar.valt();}



	}

	if(this.active && this.y>acar.y-kornegyz[this.k].height && this.y<acar.y+car[kocssize].height/2){

		if(this.k==0 && acar.jbenvan==this.jsav){this.active=false;	}
		if(this.k==2 && bcar.jbenvan==this.jsav){this.active=false;	}
		if(cardb>2 && this.k==4 && ccar.jbenvan==this.jsav){this.active=false;	}
		if(cardb>3 && this.k==6 && dcar.jbenvan==this.jsav){this.active=false;	}
	}
	


	};

function main2(){

	canvas = document.createElement("canvas");
	width=window.innerWidth;
	height=window.innerHeight;
	console.log(width);

	canvas.width=width;
	canvas.height=height;
	ctx=canvas.getContext("2d");
	document.body.appendChild(canvas);
	best=localStorage.getItem("best3");

	if(best==null)
		best=0;

  //console.log("init");
  cardb=2;
	var img=new Image();
	img.onload=function(){
		initSprites4(this);
		ctx.fillStyle=bg;

		savwidth=width/(2*cardb);

		acar=new kocs();
		acar.jsav=false;
		acar.k=0;
		acar.update();
	    
	    bcar=new kocs();
		bcar.jsav=true;
		bcar.k=1;
		bcar.x=(width/8-car[0].width/2)+(width/2)+(width/4);
		bcar.update();		
		
		run2();

	}
	img.src="map.png";


	
}

function main3(){

	canvas = document.createElement("canvas");
	width=window.innerWidth;
	height=window.innerHeight;
	console.log(width);

	canvas.width=width;
	canvas.height=height;
	ctx=canvas.getContext("2d");
	document.body.appendChild(canvas);
	best=localStorage.getItem("best3");

	if(best==null)
		best=0;

  //console.log("init");
  cardb=3;
	var img=new Image();
	img.onload=function(){
		initSprites4(this);
		ctx.fillStyle=bg;

		savwidth=width/(2*cardb);

		acar=new kocs();
		acar.jsav=false;
		acar.k=0;
		acar.update();
	    
	    bcar=new kocs();
		bcar.jsav=true;
		bcar.k=1;
		bcar.x=(width/12-car[0].width/2)+(width/3)+(width/6);
		bcar.update();

		ccar=new kocs();
		ccar.jsav=true;
		ccar.k=2;
		ccar.x=(width/12-car[0].width/2)+(2*width/3)+(width/6);
		ccar.update();
		
		
		//clstart.draw(ctx,width/2-clstart.width/2,height/2-clstart.height/2);
run3();

	}
	img.src="map.png";


	
}

function main4(){
	
	canvas = document.createElement("canvas");
	width=window.innerWidth;
	height=window.innerHeight;

	canvas.width=width;
	canvas.height=height;
	ctx=canvas.getContext("2d");
	document.body.appendChild(canvas);
	best=localStorage.getItem("best4");

  cardb=4;
	var img=new Image();
	img.onload=function(){
		initSprites4(this);
		ctx.fillStyle=bg;

		savwidth=width/(2*cardb);

		acar=new kocs();
		acar.jsav=false;
		acar.k=0;
		acar.update();
	    
	    bcar=new kocs();
		bcar.jsav=true;
		bcar.k=1;
		bcar.x=(width/16-car[0].width/2)+(width/4)+(width/8);
		bcar.update();

		ccar=new kocs();
		ccar.jsav=true;
		ccar.k=2;
		ccar.x=(width/16-car[0].width/2)+(2*width/4)+(width/8);
		ccar.update();

		dcar=new kocs();
		dcar.jsav=true;
		dcar.k=3;
		dcar.x=(width/16-car[0].width/2)+(3*width/4)+(width/8);
		dcar.update();
		
		

		run4();
	}
	img.src="map.png";


	
}