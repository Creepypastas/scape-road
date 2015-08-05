function render3(){

     	ctx.fillStyle=bg;
		ctx.fillRect(0,0,width,height);


		ctx.fillStyle='#C8C8C8';
		//track
		

		ctx.fillRect(width/3,0,4,height);
		ctx.fillRect(2*width/3,0,4,height);
		
		for(var i=0;i*60<height;i+=2)
		{
			ctx.fillRect(width/6,i*60+hatpos,2,60);
			ctx.fillRect(3*(width/6),i*60+hatpos,2,60);
			ctx.fillRect(5*(width/6),i*60+hatpos,2,60);
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


		for (var i =0; i <cszembej.length; i++) {
			cszembej[i].draw(ctx);	

			if(cszembej[i].active==false || cszembej[i].y>height)
				cszembej.splice(i,1); //szembej leszedese		
		}

		acar.draw(ctx);
		bcar.draw(ctx);
		ccar.draw(ctx);

	    ctx.fillStyle='#ff0000';
		ctx.textAlign = 'center';
		ctx.fillStyle="white";
		ctx.font="30px Fira Sans Light";
		ctx.fillText(score,width-30,30)



}

function render4(){

     	ctx.fillStyle=bg;
		ctx.fillRect(0,0,width,height);


		ctx.fillStyle='#C8C8C8';
		//track
		

		ctx.fillRect(width/4,0,4,height);
		ctx.fillRect(2*width/4,0,4,height);
		ctx.fillRect(3*width/4,0,4,height);
		
		for(var i=0;i*60<height;i+=2)
		{
			ctx.fillRect(width/8,i*60+hatpos,2,60);
			ctx.fillRect(3*(width/8),i*60+hatpos,2,60);
			ctx.fillRect(5*(width/8),i*60+hatpos,2,60);
			ctx.fillRect(7*(width/8),i*60+hatpos,2,60);
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

		for (var i =0; i <cszembej.length; i++) {
			cszembej[i].draw(ctx);	
			if(cszembej[i].active==false || cszembej[i].y>height)
				cszembej.splice(i,1); 		
		}

	    for (var i =0; i <dszembej.length; i++) {
			dszembej[i].draw(ctx);	

			if(dszembej[i].active==false || dszembej[i].y>height)
				dszembej.splice(i,1); //szembej leszedese		
		}


		acar.draw(ctx);
		bcar.draw(ctx);
		ccar.draw(ctx);
		dcar.draw(ctx);

	    ctx.fillStyle='#ff0000';
		ctx.textAlign = 'center';
		ctx.fillStyle="white";
		ctx.font="30px Fira Sans Light";
		ctx.fillText(score,width-30,30)



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