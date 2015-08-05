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