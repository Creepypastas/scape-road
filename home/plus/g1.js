function tchev1(e){

for (var i = 0; i <e.changedTouches.length;i++) {

					var akt_touch = e.changedTouches[i];

						if(cardb==3){
							if(akt_touch.pageX<window.innerWidth/2-width/6)
							{
						    	acar.valt();		
							}	
							else if(akt_touch.pageX<window.innerWidth/2+width/6)
						    {
								bcar.valt();			
							}
							else
								ccar.valt();
						}
						else if(cardb==4){


							if(akt_touch.pageX<window.innerWidth/2-width/4)
							{
						    	acar.valt();		
							}	
							else if(akt_touch.pageX<window.innerWidth/2)
						    {
								bcar.valt();			
							}
							else if(akt_touch.pageX<window.innerWidth/2+width/4)
						    {
								ccar.valt();			
							}
							else
								dcar.valt();
						}
					


			};

}

function ctchev1(e){



					

					
				
							
							
							if(cardb==3){
							if(e.clientX<window.innerWidth/2-width/6)
							{
						    	acar.valt();		
							}	
							else if(e.clientX<window.innerWidth/2+width/6)
						    {
								bcar.valt();			
							}
							else
								ccar.valt();
						}
						else if(cardb==4){


							if(e.clientX<window.innerWidth/2-width/4)
							{
						    	acar.valt();		
							}	
							else if(e.clientX<window.innerWidth/2)
						    {
								bcar.valt();			
							}
							else if(e.clientX<window.innerWidth/2+width/4)
						    {
								ccar.valt();			
							}
							else
								dcar.valt();
						}



}

function aujsz(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2);

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/12-kornegyz[0].width/2)+(width/6)*js;
	u.jsav=js;
	aszembej.push(u);
}

function bujsz(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2)+2;

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/12-kornegyz[0].width/2)+(width/6)*js+width/3;
	u.jsav=js;
	bszembej.push(u);
}

function cujsz(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2)+4;

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/12-kornegyz[0].width/2)+(width/6)*js+2*width/3;
	u.jsav=js;
	cszembej.push(u);
}




function run3(){
		score=0;
		be=0;
		clearInterval(villog);
		aszembej.length=0;
		bszembej.length=0;
		cszembej.length=0;
		vill.length=0;
		interup=11;
		seb=2.1;

	jatek=true;


	intervaldr=setInterval(render3,interup);
	intervup=setInterval(update3,interup);
}
function update3(){
    

		if(aszembej.length<1 || (aszembej[aszembej.length-1].y>120) && Math.floor((10*Math.random())%10)==1)
		{
					aujsz();
		}

		if(bszembej.length<1 || (bszembej[bszembej.length-1].y>120) && Math.floor((10*Math.random())%10)==1)
		{
					bujsz();
					
		}

		if(cszembej.length<1 || (cszembej[cszembej.length-1].y>120) && Math.floor((10*Math.random())%10)==1)
		{
					cujsz();
					
		}
		

		 if(hatpos<60)
		 	hatpos+=seb;
		 else
		 	hatpos=-60;

		for (var i =0; jatek && i <aszembej.length; i++) {
			aszembej[i].update();

		}

		for (var i =0;jatek && i <bszembej.length; i++) {
			bszembej[i].update();

		}

			for (var i =0;jatek && i <cszembej.length; i++) {
			cszembej[i].update();

		}


		acar.update();
		bcar.update();
		ccar.update();
		
}

function run4(){
		score=0;
		be=0;
		clearInterval(villog);
		aszembej.length=0;
		bszembej.length=0;
		cszembej.length=0;
		dszembej.length=0;
		vill.length=0;
		interup=11;
		seb=1.5;

	jatek=true;


	intervaldr=setInterval(render4,interup);
	intervup=setInterval(update4,interup);
}




function aujsz4(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2);

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/16-kornegyz[0].width/2)+(width/8)*js;
	u.jsav=js;
	aszembej.push(u);
}

function bujsz4(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2)+2;

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/16-kornegyz[0].width/2)+(width/8)*js+width/4;
	u.jsav=js;
	bszembej.push(u);
}

function cujsz4(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2)+4;

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/16-kornegyz[0].width/2)+(width/8)*js+2*width/4;
	u.jsav=js;
	cszembej.push(u);
}


function dujsz4(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2)+6;

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/12-kornegyz[0].width/2)+(width/8)*js+3*width/4;
	u.jsav=js;
	dszembej.push(u);
}


function update4(){
    

		if(aszembej.length<1 || (aszembej[aszembej.length-1].y>120) && Math.floor((10*Math.random())%10)==1)
		{
					aujsz4();
		}

		if(bszembej.length<1 || (bszembej[bszembej.length-1].y>120) && Math.floor((10*Math.random())%10)==1)
		{
					bujsz4();
					
		}

		if(cszembej.length<1 || (cszembej[cszembej.length-1].y>120) && Math.floor((10*Math.random())%10)==1)
		{
					cujsz4();
					
		}
		
		if(dszembej.length<1 || (dszembej[dszembej.length-1].y>120) && Math.floor((10*Math.random())%10)==1)
		{
					dujsz4();
					
		}
		

		 if(hatpos<60)
		 	hatpos+=seb;
		 else
		 	hatpos=-60;

		for (var i =0; jatek && i <aszembej.length; i++) {
			aszembej[i].update();

		}

		for (var i =0;jatek && i <bszembej.length; i++) {
			bszembej[i].update();

		}

		for (var i =0;jatek && i <cszembej.length; i++) {
			cszembej[i].update();

		}

		for (var i =0;jatek && i <dszembej.length; i++) {
			dszembej[i].update();

		}

		acar.update();
		bcar.update();
		ccar.update();
		dcar.update();
		
}
