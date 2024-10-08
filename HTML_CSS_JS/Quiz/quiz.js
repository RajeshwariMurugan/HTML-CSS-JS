//Questions Answers
const Question=[
		{question:"What does HTML stands for?",
		 answers:[
		 {text:"Home Tool Markup Language",correct:false},
		 {text:"Hyperlinks and Text Markup Language",correct:false},
		 {text:"High Tags Markup Language",correct:false},
		 {text:"HyperText Markup Language",correct:true},
		]},

		{question:"Who is the father of computer?",
		 answers:[
		 {text:"Charles Babbage ",correct:true},
		 {text:"Right Brothers",correct:false},
		 {text:"Galilio",correct:false},
		 {text:"Markoni",correct:false},
		]},

		{question:"what is abbreviation of JS?",
		 answers:[
		 {text:"Java structure",correct:false},
		 {text:"javascript",correct:true},
		 {text:"Java study",correct:false},
		 {text:"java step",correct:false},
		]},

		{question:"What is the correct HTML element tag for inserting  a line break?",
		 answers:[
		 {text:"br",correct:true},
		 {text:"lb",correct:false},
		 {text:"break",correct:false},
		 {text:"interval",correct:false},
		]},

		{question:"How to create a function in javascript?",
		 answers:[
		 {text:"function=myfunction()",correct:false},
		 {text:"function:myfunction()",correct:false},
		 {text:"function myFunction",correct:true},
		 {text:"function.create()",correct:false},
		]},
		{question:"Who is the father of java programming?",
		 answers:[
		 {text:"James Gosling",correct:true},
		 {text:"M.P.java",correct:false},
		 {text:"Dennis Ritchie",correct:false},
		 {text:"Charles Babbage",correct:false},
		]},
		{question:"Which of the following is not primitive data type?",
		 answers:[
		 {text:"byte",correct:false},
		 {text:"string",correct:true},
		 {text:"float",correct:false},
		 {text:"integer",correct:false},
		]},

{question:"Which one is a template for creating different Objects?",
		 answers:[
		 {text:"Array",correct:false},
		 {text:"interface",correct:false},
		 {text:"class",correct:true},
		 {text:"Mathod",correct:false},
		]},

{question:"In how many possible ways the word can be arrage--MACHINE?",
		 answers:[
		 {text:"5040",correct:true},
		 {text:"56",correct:false},
		 {text:"8",correct:false},
		 {text:"4050",correct:false},
		]},

{question:"CSS -full form?",
		 answers:[
		 {text:"Class String Subject",correct:false},
		 {text:"Classic Sheet style",correct:false},
		 {text:"Cascading Style Sheet",correct:true},
		 {text:"Classify Style Sheet",correct:false},
		]}


];
//Id la ulla value va store panrathuku
const kelvi=document.getElementById('que');
const pathil=document.getElementById('keys');
const result=document.getElementById('next');
//starting Zero panikirom
var currentQuestion=0;
var score=0;
//functions!!!
//1.start function call agum-> Go to Show question
function start()
{
 currentQuestionIndex=0;
	score=0;
	result.innerHTML="Next";
	showQuestion();  
}

function showQuestion()   
 {
	reset();
	//2nd step
	let currentQuestion=Question[currentQuestionIndex];
	let questionNo=currentQuestionIndex+1;
	kelvi.innerHTML=questionNo+"."+currentQuestion.question;

	currentQuestion.answers.forEach(answer=>
	{
		const button=document.createElement("button");
		button.innerHTML=answer.text;
		button.classList.add("ans");
		pathil.appendChild(button);
		if (answer.correct)
		{
			button.dataset.correct=answer.correct;
		}
		button.addEventListener("click",select);
	});
	
}
function reset()
{
	result.style.display="none";
	while(pathil.firstChild)
	{
		pathil.removeChild(pathil.firstChild);
	}
}
function select(r) {
const selected=r.target;
const isCorrect=selected.dataset.correct==="true";
if(isCorrect)
{
	selected.classList.add("correct");
	score++;
}
else
{
	selected.classList.add("incorrect");
}
Array.from(pathil.children).forEach(button=>{
	if(button.dataset.correct==="true")
	{
		selected.classList.add("correct");
	}
	button.disabled="true";
});
result.style.display="block";
}
function marks()
{
	reset();
	kelvi.innerHTML=`you score ${score} out of ${Question.length}!`;
    result.innerHTML="play again";
	result.style.display="block";
}
function aduthathu()
{
	currentQuestionIndex++
	if(currentQuestionIndex<Question.length)
	{
		showQuestion();
	}
	else
	{
		marks();
	}
}

result.addEventListener("click",()=>
{
	if(currentQuestionIndex<Question.length)
	{
		aduthathu();
	}
	else
	{
		start();
	}
});
start();

