
var 
hatpos=-60,
width, //ablak szelesseg
height,//ablak magassag
aszembej=[],  //szembej listaja
bszembej=[],
acar,
bcar,
bg='#143256',
piros='#C4273C',
kek='#00C6FF',
score=0,
jatek=false,
interup=10,
vill=[],
villog,
seb=2;


function po(){
this.x=0;
this.y=0;
};



 function kocs(){
		this.x=width/8-car[0].width/2;
		this.y=height-height/3;
		this.jsav=true;
		this.jbenvan=true;
		this.k=0;
		this.fok=0;
		}

	kocs.prototype.draw= function(ctx) {

		ctx.save();
		
		ctx.translate(this.x+car[0].width/2,this.y+car[0].height/2);
		
		ctx.rotate(this.fok);
		
		car[this.k].draw(ctx,-car[0].width/2,-car[0].height/2);


		ctx.restore();
	};

	kocs.prototype.update = function() {
	
			if(this.jsav)
					{
						hollenne=(width/8-car[0].width/2)+this.k*(width/2)+(width/4);
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

							if(this.x>hollenne-width/8)
							{
								this.jbenvan=true;
								//this.fok=0;
								
							}

					}
				else
					{
						hollenne=(width/8-car[0].width/2)+this.k*(width/2);
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

						if(this.x<hollenne+width/8)
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

	if(this.active && this.y>acar.y-kornegyz[this.k].height && this.y<acar.y+car[0].height/2){

		if(this.k==0 && acar.jbenvan==this.jsav){

			score++;
			this.active=false;
			if(score%3==0)
		      {
				  seb+=0.05;
			   }
		}

		if(this.k==1 && acar.jbenvan==this.jsav && acar.jbenvan==acar.jsav){

			 vege();
		}

		if(this.k==2 && bcar.jbenvan==this.jsav){

			score++;
			this.active=false;
		}

		if(this.k==3 && bcar.jbenvan==this.jsav && bcar.jbenvan==bcar.jsav){

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



function main(){
	document.addEventListener("touchstart",  doTouchStart,  false);
	//document.addEventListener("touchmove",   doTouchMove,   false);
	document.addEventListener("touchend",    doTouchEnd,    false);
	document.addEventListener("touchcancel", doTouchCancel, false);
    
	document.addEventListener("mousedown",   doMouseDown,    false);
	/*document.addEventListener("mousemove",   doMouseMove,    false);
	document.addEventListener("mouseup",     doMouseUp,      false);*/

	canvas = document.createElement("canvas");
	width=window.innerWidth;
	height=window.innerHeight-51;
	console.log(width);
	if(width>700) //kicsi 320*480
	{
		width=480;
		height=800-50;
		canvas.style.border="1px solid #000";
	}

	canvas.width=width;
	canvas.height=height;
	ctx=canvas.getContext("2d");
	document.body.appendChild(canvas);
	best=localStorage.getItem("best");

	if(best==null)
		best=0;

  console.log("init");
	var img=new Image();
	img.onload=function(){
		initSprites(this);
		ctx.fillStyle=bg;

		acar=new kocs();
		acar.jsav=false;
		acar.k=0;
		acar.update();
	    
	    bcar=new kocs();
		bcar.jsav=true;
		bcar.k=1;
		bcar.x=(width/8-car[0].width/2)+(width/2)+(width/4);
		bcar.update();
		
		render();
		
		nyil1.draw(ctx,acar.x+car[0].width/2,acar.y-nyil1.height);
		nyil2.draw(ctx,bcar.x-car[0].width,bcar.y-nyil2.height);

        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";

		ctx.fillRect(0,0,width,height);

		//kezd.draw(ctx,width/2-kezd.width/2,20);
		ctx.fillStyle="white";
		ctx.font="50px Fira Sans Light";
		ctx.textAlign = 'center';
		ctx.fillText("Best: "+best,width/2,width/2-50);

		ctx.fillText("Start",width/2,height/2+80);

		vnyil.draw(ctx,width/2-vnyil.width/2,10);
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
								  window.location = "index.html";
							}
						if(   
							akt_touch.pageY>height/2+50 && akt_touch.pageY<restart.height+height/2+50 && 
								akt_touch.pageX>width/2-restart.width/2 && akt_touch.pageX<width/2+restart.width/2
						   )
							{
						    	run1();	
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
								  window.location = "index.html";
							}
						if(   
							e.clientY>height/2+50 && e.clientY<restart.height+height/2+50 && 
								e.clientX>width/2-restart.width/2 && e.clientX<width/2+restart.width/2
						   )
							{
						    	run1();	
						    	game1=true;		
							}	

		
		}
	else
		ctchev1(e);
 } 
}

document.onkeydown = function (e) {
		
if(!jatek)
		{
			run1();	
			game1=true;	
		}
else{
		if (e.keyCode == 39)
	        bcar.valt();
	    if (e.keyCode == 37)
	        acar.valt();
			
		if (e.keyCode == 65)
	        acar.valt();
	    if (e.keyCode == 83)
	        bcar.valt();
      }
};

var be=0;

function villogas(){


render();
		if(be%2==0)
   			{
   				ctx.fillStyle=bg;
   				for(var i=0;i<vill.length;i++)
					ctx.fillRect(vill[i].x,vill[i].y,40,40);
   			}


   			fedorajzv();
   			be++;

   			

}
function fedorajzv(){
ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
		ctx.fillRect(0,0,width,height);
 
  
		ctx.fillStyle="white";
		ctx.font="30px Fira Sans Light";
		ctx.textAlign = 'center';
		ctx.fillText("Best: "+best,width/2,height/2-30);

		ctx.font="40px Fira Sans Light";
		ctx.textAlign = 'center';
		ctx.fillText("Score: "+score,width/2,height/2-100);

		restart.draw(ctx,width/2-restart.width/2,height/2+50);
		vnyil.draw(ctx,width/2-vnyil.width/2,10);

}
function vege()
{
	
   clearInterval(intervup);
   clearInterval(intervaldr);
   jatek=false;
   console.log("vege");
  
   acar.update();
   bcar.update();
   
 if(best<score)
		   {
		   	localStorage.setItem("best", score);
		   	best=score;
			}

  render();
  fedorajzv();


if(vill.length>0){
   	clearInterval(villog);

   	villog=setInterval(villogas,300);
   }

}



function render(){




		ctx.fillStyle=bg;
		ctx.fillRect(0,0,width,height);


		ctx.fillStyle='#C8C8C8';
		ctx.fillRect(width/2,0,4,height);
		for(var i=0;i*60<height;i+=2)
		{
			ctx.fillRect(width/4,i*60+hatpos,2,60);
			ctx.fillRect(3*(width/4),i*60+hatpos,2,60);
		}


		for (var i =0; i <bszembej.length; i++) {
			bszembej[i].draw(ctx);	
			if(bszembej[i].active==false || bszembej[i].y>height)
				bszembej.splice(i,1); 		
		}

	    for (var i =0; i <aszembej.length; i++) {
			aszembej[i].draw(ctx);	

			if(aszembej[i].active==false || aszembej[i].y>height)
				aszembej.splice(i,1); //szembej leszedese		
		}

		acar.draw(ctx);
		bcar.draw(ctx);

	    ctx.fillStyle='#ff0000';
		ctx.textAlign = 'center';
		ctx.fillStyle="white";
		ctx.font="30px Fira Sans Light";
		ctx.fillText(score,width-30,30)



}