function tchev1(e){

for (var i = 0; i <e.changedTouches.length;i++) {

					var akt_touch = e.changedTouches[i];

						if(akt_touch.pageX<window.innerWidth/2)
							{
						    	acar.valt();		
							}	
							else
						    {
								bcar.valt();			
							}

			};

}

function ctchev1(e){



					

						if(e.clientX<window.innerWidth/2)
							{
						    	acar.valt();		
							}	
							else
						    {
								bcar.valt();			
							}



}

function aujsz(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2);

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/8-kornegyz[0].width/2)+(width/4)*js;
	u.jsav=js;
	aszembej.push(u);
}

function bujsz(){

	u=new szb();
	u.k=Math.floor((10*Math.random())%2)+2;

	js=(Math.floor((10*Math.random())%2));

	u.x=(width/8-kornegyz[0].width/2)+(width/4)*js+width/2;
	u.jsav=js;
	bszembej.push(u);
}


function run1(){
		score=0;
		be=0;
		clearInterval(villog);
		aszembej.length=0;
		bszembej.length=0;
		vill.length=0;
		interup=11;
		seb=2.7;

	jatek=true;


	intervaldr=setInterval(render,interup);
	intervup=setInterval(update1,interup);
}
function update1(){
    

		if(aszembej.length<1 || (aszembej[aszembej.length-1].y>100) && Math.floor((10*Math.random())%10)==1)
		{
					aujsz();
		}

		if(bszembej.length<1 || (bszembej[bszembej.length-1].y>100) && Math.floor((10*Math.random())%10)==1)
		{
					bujsz();
					
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


		acar.update();
		bcar.update();

}
