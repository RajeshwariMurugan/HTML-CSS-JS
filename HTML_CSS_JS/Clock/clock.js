function Time() {
			var date=new Date();
			var hour=date.getHours();
			var min =date.getMinutes();
			var sec=date.getSeconds();
			var session=document.getElementById("ses").innerHTML;
			if(hour>=12)
			{   
			
				session.innerHTML="PM";
			}
			else
			{
				session.innerHTML="AM";
			}
			if(hour>12)
			{
				hour=hour-12;
			}
			hour=(hour<10)?"0"+hour:hour;
			min=(min<10)?"0"+min:min;
			sec=(sec<10)?"0"+sec:sec;
			
			document.getElementById('hour').innerHTML=hour;
			document.getElementById('min').innerHTML=min;
			document.getElementById('sec').innerHTML=sec;
			document.getElementById('ses').innerHTML=session;
		}
		setInterval(Time,10);
		
