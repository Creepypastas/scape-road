
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
										if(this.fok>-0.4 )	this.fok-=0.08;
									}else{
										if(this.fok<0.4 )	this.fok+=0.08;
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

	if(this.active && this.y>acar.y-kornegyz[this.k].height && this.y<acar.y+car[kocssize].height/2){

		if(this.k==0 && acar.jbenvan==this.jsav){

			score++;
			this.active=false;
			
		}

		if(this.k==1 && acar.jbenvan==this.jsav && acar.jbenvan==acar.jsav){
			console.log(1);
			 vege();
		}

		if(this.k==2 && bcar.jbenvan==this.jsav){

			score++;
			this.active=false;
		}

		if(this.k==3 && bcar.jbenvan==this.jsav && bcar.jbenvan==bcar.jsav){
              console.log(2);
			  vege();
		}

		if(this.k==4 && ccar.jbenvan==this.jsav){

			score++;
			this.active=false;
		}

		if(this.k==5 && ccar.jbenvan==this.jsav && ccar.jbenvan==ccar.jsav){
              console.log(3);
			  vege();
		}

		if(this.k==6 && dcar.jbenvan==this.jsav){

			score++;
			this.active=false;
		}

		if(this.k==7 && dcar.jbenvan==this.jsav && dcar.jbenvan==dcar.jsav){
              console.log(4);
			  vege();
		}



	}
	else if(this.active && this.k%2==0 && this.y>acar.y+car[0].height){//height-kornegyz[0].height){
	    p= new po();
		p.x=this.x;
		p.y=this.y;
		vill.push(p);
		vege();
	}


	};



function main3(){
	document.addEventListener("touchstart",  doTouchStart,  false);
	//document.addEventListener("touchmove",   doTouchMove,   false);
	document.addEventListener("touchend",    doTouchEnd,    false);
	document.addEventListener("touchcancel", doTouchCancel, false);
    
	document.addEventListener("mousedown",   doMouseDown,    false);
	/*document.addEventListener("mousemove",   doMouseMove,    false);
	document.addEventListener("mouseup",     doMouseUp,      false);*/

	canvas = document.createElement("canvas");
	width=window.innerWidth;
	height=window.innerHeight;
	console.log(width);
	if(width>600) //kicsi 320*480
	{
		width=480;
		height=800-50;
		canvas.style.border="1px solid #000";
	}

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
		initSprites3(this);
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
		
		render3();
		
		nyil1.draw(ctx,acar.x+car[0].width/2,acar.y-nyil1.height);
		nyil2.draw(ctx,ccar.x-car[0].width,ccar.y-nyil2.height);

        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";

		ctx.fillRect(0,0,width,height);

		//kezd.draw(ctx,width/2-kezd.width/2,20);
		ctx.fillStyle="white";
		ctx.font="50px Fira Sans Light";
		ctx.textAlign = 'center';
		ctx.fillText("Best: "+best,width/2,width/2-50);

		ctx.fillText("Start",width/2,height/2+80);

		
		//clstart.draw(ctx,width/2-clstart.width/2,height/2-clstart.height/2);


	}
	img.src="map.png";


	
}

function main4(){
	document.addEventListener("touchstart",  doTouchStart,  false);
	//document.addEventListener("touchmove",   doTouchMove,   false);
	document.addEventListener("touchend",    doTouchEnd,    false);
	document.addEventListener("touchcancel", doTouchCancel, false);
    
	document.addEventListener("mousedown",   doMouseDown,    false);
	/*document.addEventListener("mousemove",   doMouseMove,    false);
	document.addEventListener("mouseup",     doMouseUp,      false);*/

	canvas = document.createElement("canvas");
	width=window.innerWidth;
	height=window.innerHeight;
	console.log(width);
	if(width>600) //kicsi 320*480
	{
		width=480;
		height=800-50;
		canvas.style.border="1px solid #000";
	}

	canvas.width=width;
	canvas.height=height;
	ctx=canvas.getContext("2d");
	document.body.appendChild(canvas);
	best=localStorage.getItem("best4");

	if(best==null)
		best=0;

  //console.log("init");
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
		
		render4();
		
		nyil1.draw(ctx,acar.x+car[0].width/2,acar.y-nyil1.height);
		nyil2.draw(ctx,dcar.x-car[0].width,dcar.y-nyil2.height);

        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";

		ctx.fillRect(0,0,width,height);

		//kezd.draw(ctx,width/2-kezd.width/2,20);
		ctx.fillStyle="white";
		ctx.font="50px Fira Sans Light";
		ctx.textAlign = 'center';
		ctx.fillText("Best: "+best,width/2,width/2-50);

		ctx.fillText("Start",width/2,height/2+80);

		
		//clstart.draw(ctx,width/2-clstart.width/2,height/2-clstart.height/2);


	}
	img.src="map.png";


	
}
var vantouch=false;
function nyom(e)
{
vantouch=true;
	if(!jatek)
		{
			var akt_touch = e.changedTouches[0];
							if(akt_touch.pageY<50)
							{
								  window.location = "main/index.html";
							}
							
						if(   
							akt_touch.pageY>height/2+50 && akt_touch.pageY<restart.height+height/2+50 && 
								akt_touch.pageX>width/2-restart.width/2 && akt_touch.pageX<width/2+restart.width/2
						   )
							{
								if(cardb==3)
						    		run3();	
						    	else
						    		run4();

						    	game1=true;		
							}	

		
		}
	else
		tchev1(e);

}
function enged(e)
{}
function doTouchStart(e) {nyom(e);}
function doTouchCancel(e) {enged(e);}
function doTouchEnd(e) {enged(e);}
//function doTouchMove(e) {nyom(e);}
function doMouseDown(e) {
if(!vantouch){
    
  //e.clientX, e.clientY
   if(!jatek)
		{
			
							if(e.clientY<50)
							{
								  window.location = "main/index.html";
							}
						if(   
							e.clientY>height/2+50 && e.clientY<restart.height+height/2+50 && 
								e.clientX>window.innerWidth/2-restart.width/2 && e.clientX<window.innerWidth/2+restart.width/2
						   )
							{
						    	if(cardb==3)
						    		run3();	
						    	else
						    		run4();	
						    	game1=true;		
							}	

		
		}
	else
		ctchev1(e);
 } 
}

document.onkeydown = function (e) {
if(cardb==3){

if(!jatek)
		{
			run3();	
			game1=true;	
		}
else{
	    if (e.keyCode == 65)
	        acar.valt();

	    if (e.keyCode == 83)
	        bcar.valt();

	    if (e.keyCode == 68)
	        ccar.valt();
      }
  }
  else
  {
if(!jatek)
		{
			run4();	
			game1=true;	
		}
else{
	    if (e.keyCode == 65)
	        acar.valt();

	    if (e.keyCode == 83)
	        bcar.valt();

	    if (e.keyCode == 68)
	        ccar.valt();

	    if (e.keyCode == 70)
	        dcar.valt();
      }
  }
};


var be=0;

function villogas(){

if(cardb==3){
render3();

if(be%2==0)
   			{
   				ctx.fillStyle=bg;
   				for(var i=0;i<vill.length;i++)
					ctx.fillRect(vill[i].x,vill[i].y,40,40);
   			}


   			fedorajzv();
   			be++;
}
else
{
render4();	
if(be%2==0)
   			{
   				ctx.fillStyle=bg;
   				for(var i=0;i<vill.length;i++)
					ctx.fillRect(vill[i].x,vill[i].y,25,25);
   			}


   			fedorajzv();
   			be++;
}
		
}

function vege()
{
	if(cardb==3){
	
		   clearInterval(intervup);
		   clearInterval(intervaldr);
		   jatek=false;
		   console.log("vege");
		  
		   acar.update();
		   bcar.update();
		   ccar.update();
		   
		 if(best<score)
				   {
				   	localStorage.setItem("best3", score);
				   	best=score;
					}

		  render3();

}
else
{

		   clearInterval(intervup);
		   clearInterval(intervaldr);
		   jatek=false;
		   console.log("vege");
		  
		   acar.update();
		   bcar.update();
		   ccar.update();
		   dcar.update();
		   
		 if(best<score)
				   {
				   	localStorage.setItem("best4", score);
				   	best=score;
					}

		  render4();

}
  fedorajzv();


if(vill.length>0){
   	clearInterval(villog);

   	villog=setInterval(villogas,300);
   }

}