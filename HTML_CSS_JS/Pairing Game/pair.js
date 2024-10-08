var count0=0,count1=0,count2=0,count3=0;
var pre='';
var cur='';
var image=["watch1.jpg","ear21.jpg","bag1.jpg","hi.jpg"];
var b=0;

	for(let i=1;i<=8;i++)
	{
	b=Math.floor(Math.random()*image.length);
	console.log(image[b]);
	if(b==0){
		count0++;
		document.getElementById("Child"+i).style.backgroundImage="url('"+image[b]+"')";
    	if(count0==2){
   		image.splice(b,1);
   		count0=count1;
   		count1=count2;
   		count2=count3;
   		continue;
   	}
	}
	else if(b==1)
	{
		count1++;
		document.getElementById("Child"+i).style.backgroundImage="url('"+image[b]+"')";
      	if(count1==2)
   {
   		image.splice(b,1);
   		count1=count2;
   		count2=count3;
   		continue;
   	}
	}
	else if(b==2)
	{
		count2++;
		document.getElementById("Child"+i).style.backgroundImage="url('"+image[b]+"')";
      	if(count2==2)
   {
   		image.splice(b,1);
   		count2=count3;
   		continue;
   	}
	}
	else if(b==3)
	{
		count3++;
		document.getElementById("Child"+i).style.backgroundImage="url('"+image[b]+"')";
      	if(count3==2)
   {
   		image.splice(b,1);
   		continue;
   	}
	}
}
function game(val)
{ 
  document.getElementById("Child"+val).style.display="block";	
  if(pre== '')
  {
  	pre=val;
  }
  else
  {
  	cur=val;
  	setTimeout(isSame,1000);
  }

}

function isSame()
{
	var current=document.getElementById("Child"+cur).style.backgroundImage;
	var previous=document.getElementById("Child"+pre).style.backgroundImage;
	if(current==previous)
	{
		 var current=document.getElementById("Child"+cur).style.display='none';
		var previous=document.getElementById("Child"+pre).style.display='none';

		document.getElementById("Parent"+cur).style.backgroundColor='green';
	document.getElementById("Parent"+pre).style.backgroundColor='green';


		document.getElementById("Parent"+cur).style.pointerEvents='none';
	document.getElementById("Parent"+pre).style.pointerEvents='none';
	}
	else
	{
		var current=document.getElementById("Child"+cur).style.display='none';
		var previous=document.getElementById("Child"+pre).style.display='none';

		document.getElementById("Parent"+cur).style.backgroundColor='black';
	document.getElementById("Parent"+pre).style.backgroundColor='black';
	
	}
	pre='';
	cur='Child'+pre;

	
}
