const quizBD =[

{question:"When hydrogen chloride gas is prepared on a humid day, the gas is usually passed through the guard tube containing calcium chloride. The role of calcium chloride taken in the guard tube is to",
	a:"absorb the evolved gas",
	b:" moisten the gas",
	c:"absorb moisture from the gas",
	d:"absorb Cl– ions from the evolved gas",	
	ans:"ans3"
},
{question:"Which one of the following salts does not con-tain water of crystallisation?",
	a:"Blue vitriol",
	b:"Baking soda",
	c:"Washing soda",
	d:"Gypsum",	
	ans:"ans2"
},
{question:"In terms of acidic strength, which one of the following is in the correct increasing order?",
	a:"Water < Acetic acid < Hydrochloric acid",
	b:"Water < Hydrochloric acid < Acetic acid",
	c:"Acetic acid < Water < Hydrochloric acid",
	d:"Hydrochloric acid < Water < Acetic acid",	
	ans:"ans1"
},
{question:"What is formed when zinc reacts with sodium hydroxide?",
	a:"Zinc hydroxide and sodium",
	b:"Sodium zincate and hydrogen gas",
	c:"Sodium zinc-oxide and hydrogen gas",
	d:"Sodium zincate and water",	
	ans:"ans2"
},
{question:"Tomato is a natural source of which acid?",
a:"Acetic acid",
b:"Citric acid",
c:"Tartaric acid",
d:"Oxalic acid",	
ans:"ans4"
},
{question:"Brine is an",
	a:"aqueous solution of sodium hydroxide",
	b:"aqueous solution of sodium carbonate",
	c:"aqueous solution of sodium chloride",
	d:"aqueous solution of sodium bicarbonate",	
	ans:"ans3"
},
{question:"Na2CO3 . 10H2O is",
	a:"washing soda",
	b:" baking soda",
	c:"bleaching powder",
	d:"tartaric acid",	
	ans:"ans1"
},
{question:"At what temperature is gypsum heated to form Plaster of Paris?",
	a:"90°C",
	b:"100°C",
	c:"110°C",
	d:"120°C",	
	ans:"ans2"
},
{question:"How many water molecules does hydrated cal-cium sulphate contain?",
	a:"5",
	b:"10",
	c:"7",
	d:"2",	
	ans:"ans4"
},
{question:" Sodium carbonate is a basic salt because it is a salt of a",
	a:"strong acid and strong base",
	b:"weak acid and weak base",
	c:"strong acid and weak base",
	d:"weak acid and strong base",	
	ans:"ans4"
},
{question:"Lime water reacts with chlorine to give",
	a:"bleaching powder",
	b:"baking powder",
	c:"baking soda",
	d:" washing soda",	
	ans:"ans3"
},
{question:"Tooth enamel is made up of",
	a:"calcium phosphate",
	b:"calcium carbonate",
	c:"calcium oxide",
	d:" potassium",	
	ans:"ans1"
},
{question:"Rain is called acid rain when its:",
	a:"pH falls below 7",
	b:"pH falls below 6",
	c:"pH falls below 5.6",
	d:"pH falls above 7",	
	ans:"ans3"
},
{question:"An aqueous solution turns red litmus solution blue. Excess addition of which of the following solution would reverse the change?",
	a:" Baking powder",
	b:"Lime",
	c:"Ammonium hydroxide solution",
	d:" Hydrochloric acid",	
	ans:"ans4"
}
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let questionCount=0;
let score=0;
const loadQuestion=() =>{
	const questionList=quizBD[questionCount];
	question.innerText=questionList.question;

	option1.innerText = questionList.a;
	option2.innerText = questionList.b;
	option3.innerText = questionList.c;
	option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer=()=>{
	let answer;
	answers.forEach((curAnsElem)=>{
		if(curAnsElem.checked){
			answer=curAnsElem.id;
		}
		
	});
	return answer;
};

const deselectAll =()=>{
	answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
submit.addEventListener('click',()=>{
	const checkedAnswer=getCheckAnswer();
	console.log(checkedAnswer);

	if(checkedAnswer=== quizBD[questionCount].ans){
		score++;
	};

	questionCount++;

	deselectAll();

	if(questionCount<quizBD.length){
		loadQuestion();
	}else{
		showscore.innerHTML=`
		<h3> YOU SCORED ${score}/${quizBD.length}&#128525</h3>
		<button class="btn" onclick="location.reload()">Play Again </button>`;

		showscore.classList.remove('scorearea');
	}
    
});
