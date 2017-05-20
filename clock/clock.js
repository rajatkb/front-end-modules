window.onload= function(){
	clock('#round-clock' , 12 , 20 , 3); // sending the time and the container
};

function clock( roundClock , hour , minute , second)
{
	var clock = document.querySelector(roundClock);
	var hourHand = clock.querySelector('#hour-hand');
	var minuteHand = clock.querySelector('#minute-hand');
	var secondHand = clock.querySelector('#second-hand');
	
	// seting the initial seed time
	var secondDeg = 6*(second);
	var minuteDeg = 6 * minute ;
	var hourDeg = 30*hour + 6*(minuteDeg / 72);
	secondHand.style.transform = "rotate("+ secondDeg.toString() +"deg)";
	minuteHand.style.transform = "rotate("+ minuteDeg.toString() +"deg)";
	hourHand.style.transform = "rotate("+ hourDeg.toString() +"deg)";
	//
	
	var interval;
	interval = setInterval(function(){			
				
				secondDeg =  secondDeg + 6 ;
				secondHand.style.transform = "rotate("+ secondDeg.toString() +"deg)";
				console.log(secondDeg);
				if(secondDeg % 360 == 0)
					{
						
						minuteDeg =  minuteDeg + 6 ;
						minuteHand.style.transform = "rotate("+ minuteDeg.toString() +"deg)";
						if( minuteDeg % 72 == 0 )
						{
							hourDeg = hourDeg + 6;
							hourHand.style.transform = "rotate("+ hourDeg.toString() +"deg)";
						}
					}	
	} , 1000);
}