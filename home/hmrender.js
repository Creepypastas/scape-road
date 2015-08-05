function render2(){

     	ctx.fillStyle=bg;
		ctx.fillRect(0,0,width,height);


		ctx.fillStyle='#C8C8C8';
		//track
		

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

		ctx.fillStyle = "rgba(0, 0, 0, 0.6)";

		ctx.fillRect(0,0,width,height);

		ctx.fillStyle="white";
		ctx.font="50px Fira Sans Light";
		ctx.textAlign = 'center';
		ctx.fillText("2 Cars",width/2,width/2-50);



}

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

		ctx.fillStyle = "rgba(0, 0, 0, 0.6)";

		ctx.fillRect(0,0,width,height);

		ctx.fillStyle="white";
		ctx.font="50px Fira Sans Light";
		ctx.textAlign = 'center';
		ctx.fillText("3 Cars",width/2,width/2-50);
		wf.draw(ctx,width-40,10);




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

		ctx.fillStyle = "rgba(0, 0, 0, 0.6)";

		ctx.fillRect(0,0,width,height);

		ctx.fillStyle="white";
		ctx.font="50px Fira Sans Light";
		ctx.textAlign = 'center';
		ctx.fillText("4 Cars",width/2,width/2-50);
	wf.draw(ctx,width-40,10);


}