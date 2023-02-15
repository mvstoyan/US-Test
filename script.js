let timerId
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');

start.addEventListener('click', function() {
    timerId = setInterval(timerPlay, 1000);
})

pause.addEventListener('click', function() {
    stopTimer();
    document.querySelector('#player').pause();
})
const timer = 30;
let amountTime = timer * 60;

function timerPlay() {
    document.querySelector('#player').play();

    const countdown=document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    
    if (seconds<10) {
            seconds = "0" + seconds;
    }
    
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime<0) {
            stopTimer();
            amountTime = 0;
    }
}
function stopTimer(){
    clearInterval(timerId);
    document.querySelector('#player').pause();
}




const btn = document.querySelector('#btn');
btn.addEventListener('click', result);

const par = document.querySelector('#show');

function result(e) {
    e.preventDefault();

    let points = 0;

    if (document.querySelector('#answer1').checked) {
        points++
    }
    else {
        document.querySelector('#show1').textContent = 'False!'
        show1.style.color = 'red'
    }

    if(document.querySelector('#answer2').checked) {
        points++;
    }
    else {
        document.querySelector('#show2').textContent = 'False!'
        show2.style.color = 'red'
    }

    if(document.querySelector('#answer3').checked) {
        points++;
    }
    else {
        document.querySelector('#show3').textContent = 'False!'
        show3.style.color = 'red'
    }

    if(document.querySelector('#answer4').checked) {
        points++;
    }
    else {
        document.querySelector('#show4').textContent = 'False!'
        show4.style.color = 'red'
    }

    if(document.querySelector('#answer5').checked) {
        points++;
    }
    else {
        document.querySelector('#show5').textContent = 'False!'
        show5.style.color = 'red'
    }

    if(document.querySelector('#answer6').checked) {
        points++;
    }
    else {
        document.querySelector('#show6').textContent = 'False!'
        show6.style.color = 'red'
    }

    if(document.querySelector('#answer7').checked) {
        points++;
    }
    else {
        document.querySelector('#show7').textContent = 'False!'
        show7.style.color = 'red'
    }

    if(document.querySelector('#answer8').checked) {
        points++;
    }
    else {
        document.querySelector('#show8').textContent = 'False!'
        show8.style.color = 'red'
    }

    if(document.querySelector('#answer9').checked) {
        points++;
    }
    else {
        document.querySelector('#show9').textContent = 'False!'
        show9.style.color = 'red'
    }

    if(document.querySelector('#answer10').checked) {
        points++;
    }
    else {
        document.querySelector('#show10').textContent = 'False!'
        show10.style.color = 'red'
    }

    if(document.querySelector('#answer11').checked) {
        points++;
    }
    else {
        document.querySelector('#show11').textContent = 'False!'
        show11.style.color = 'red'
    }

    if(document.querySelector('#answer12').checked) {
        points++;
    }
    else {
        document.querySelector('#show12').textContent = 'False!'
        show12.style.color = 'red'
    }

    if(document.querySelector('#answer13').checked) {
        points++;
    }
    else {
        document.querySelector('#show13').textContent = 'False!'
        show13.style.color = 'red'
    }

    if(document.querySelector('#answer14').checked) {
        points++;
    }
    else {
        document.querySelector('#show14').textContent = 'False!'
        show14.style.color = 'red'
    }

    if(document.querySelector('#answer15').checked) {
        points++;
    }
    else {
        document.querySelector('#show15').textContent = 'False!'
        show15.style.color = 'red'
    }

    if(document.querySelector('#answer16').checked) {
        points++;
    }
    else {
        document.querySelector('#show16').textContent = 'False!'
        show16.style.color = 'red'
    }

    if(document.querySelector('#answer17').checked) {
        points++;
    }
    else {
        document.querySelector('#show17').textContent = 'False!'
        show17.style.color = 'red'
    }

    if(document.querySelector('#answer18').checked) {
        points++;
    }
    else {
        document.querySelector('#show18').textContent = 'False!'
        show18.style.color = 'red'
    }

    if(document.querySelector('#answer19').checked) {
        points++;
    }
    else {
        document.querySelector('#show19').textContent = 'False!'
        show19.style.color = 'red'
    }

    if(document.querySelector('#answer20').checked) {
        points++;
    }
    else {
        document.querySelector('#show20').textContent = 'False!'
        show20.style.color = 'red'
    }

    if(document.querySelector('#answer21').checked) {
        points++;
    }
    else {
        document.querySelector('#show21').textContent = 'False!'
        show21.style.color = 'red'
    }

    if(document.querySelector('#answer22').checked) {
        points++;
    }
    else {
        document.querySelector('#show22').textContent = 'False!'
        show22.style.color = 'red'
    }

    if(document.querySelector('#answer23').checked) {
        points++;
    }
    else {
        document.querySelector('#show23').textContent = 'False!'
        show23.style.color = 'red'
    }

    if(document.querySelector('#answer24').checked) {
        points++;
    }
    else {
        document.querySelector('#show24').textContent = 'False!'
        show24.style.color = 'red'
    }

    if(document.querySelector('#answer25').checked) {
        points++;
    }
    else {
        document.querySelector('#show25').textContent = 'False!'
        show25.style.color = 'red'
    }

    if(document.querySelector('#answer26').checked) {
        points++;
    }
    else {
        document.querySelector('#show26').textContent = 'False!'
        show26.style.color = 'red'
    }

    if(document.querySelector('#answer27').checked) {
        points++;
    }
    else {
        document.querySelector('#show27').textContent = 'False!'
        show27.style.color = 'red'
    }

    if(document.querySelector('#answer28').checked) {
        points++;
    }
    else {
        document.querySelector('#show28').textContent = 'False!'
        show28.style.color = 'red'
    }

    if(document.querySelector('#answer29').checked) {
        points++;
    }
    else {
        document.querySelector('#show29').textContent = 'False!'
        show29.style.color = 'red'
    }

    if(document.querySelector('#answer30').checked) {
        points++;
    }
    else {
        document.querySelector('#show30').textContent = 'False!'
        show30.style.color = 'red'
    }

    if(document.querySelector('#answer31').checked) {
        points++;
    }
    else {
        document.querySelector('#show31').textContent = 'False!'
        show31.style.color = 'red'
    }

    if(document.querySelector('#answer32').checked) {
        points++;
    }
    else {
        document.querySelector('#show32').textContent = 'False!'
        show32.style.color = 'red'
    }

    if(document.querySelector('#answer33').checked) {
        points++;
    }
    else {
        document.querySelector('#show33').textContent = 'False!'
        show33.style.color = 'red'
    }

    if(document.querySelector('#answer34').checked) {
        points++;
    }
    else {
        document.querySelector('#show34').textContent = 'False!'
        show34.style.color = 'red'
    }

    if(document.querySelector('#answer35').checked) {
        points++;
    }
    else {
        document.querySelector('#show35').textContent = 'False!'
        show35.style.color = 'red'
    }

    if(document.querySelector('#answer36').checked) {
        points++;
    }
    else {
        document.querySelector('#show36').textContent = 'False!'
        show36.style.color = 'red'
    }

    if(document.querySelector('#answer37').checked) {
        points++;
    }
    else {
        document.querySelector('#show37').textContent = 'False!'
        show36.style.color = 'red'
    }

    if(document.querySelector('#answer38').checked) {
        points++;
    }
    else {
        document.querySelector('#show38').textContent = 'False!'
        show38.style.color = 'red'
    }

    if(document.querySelector('#answer39').checked) {
        points++;
    }
    else {
        document.querySelector('#show39').textContent = 'False!'
        show39.style.color = 'red'
    }

    if(document.querySelector('#answer40').checked) {
        points++;
    }
    else {
        document.querySelector('#show40').textContent = 'False!'
        show40.style.color = 'red'
    }

    if(document.querySelector('#answer41').checked) {
        points++;
    }
    else {
        document.querySelector('#show41').textContent = 'False!'
        show41.style.color = 'red'
    }

    if(document.querySelector('#answer42').checked) {
        points++;
    }
    else {
        document.querySelector('#show42').textContent = 'False!'
        show42.style.color = 'red'
    }

    if(document.querySelector('#answer43').checked) {
        points++;
    }
    else {
        document.querySelector('#show43').textContent = 'False!'
        show43.style.color = 'red'
    }

    if(document.querySelector('#answer44').checked) {
        points++;
    }
    else {
        document.querySelector('#show44').textContent = 'False!'
        show44.style.color = 'red'
    }

    if(document.querySelector('#answer45').checked) {
        points++;
    }
    else {
        document.querySelector('#show45').textContent = 'False!'
        show45.style.color = 'red'
    }

    if(document.querySelector('#answer46').checked) {
        points++;
    }
    else {
        document.querySelector('#show46').textContent = 'False!'
        show46.style.color = 'red'
    }

    if(document.querySelector('#answer47').checked) {
        points++;
    }
    else {
        document.querySelector('#show47').textContent = 'False!'
        show47.style.color = 'red'
    }

    if(document.querySelector('#answer48').checked) {
        points++;
    }
    else {
        document.querySelector('#show48').textContent = 'False!'
        show48.style.color = 'red'
    }

    if(document.querySelector('#answer49').checked) {
        points++;
    }
    else {
        document.querySelector('#show49').textContent = 'False!'
        show49.style.color = 'red'
    }

    if(document.querySelector('#answer50').checked) {
        points++;
    }
    else {
        document.querySelector('#show50').textContent = 'False!'
        show50.style.color = 'red'
    }

    if(document.querySelector('#answer51').checked) {
        points++;
    }
    else {
        document.querySelector('#show51').textContent = 'False!'
        show51.style.color = 'red'
    }

    if(document.querySelector('#answer52').checked) {
        points++;
    }
    else {
        document.querySelector('#show52').textContent = 'False!'
        show52.style.color = 'red'
    }

    if(document.querySelector('#answer53').checked) {
        points++;
    }
    else {
        document.querySelector('#show53').textContent = 'False!'
        show53.style.color = 'red'
    }

    if(document.querySelector('#answer54').checked) {
        points++;
    }
    else {
        document.querySelector('#show54').textContent = 'False!'
        show54.style.color = 'red'
    }

    if(document.querySelector('#answer55').checked) {
        points++;
    }
    else {
        document.querySelector('#show55').textContent = 'False!'
        show55.style.color = 'red'
    }

    if(document.querySelector('#answer56').checked) {
        points++;
    }
    else {
        document.querySelector('#show56').textContent = 'False!'
        show56.style.color = 'red'
    }

    if(document.querySelector('#answer57').checked) {
        points++;
    }
    else {
        document.querySelector('#show57').textContent = 'False!'
        show57.style.color = 'red'
    }

    if(document.querySelector('#answer58').checked) {
        points++;
    }
    else {
        document.querySelector('#show58').textContent = 'False!'
        show58.style.color = 'red'
    }

    if(document.querySelector('#answer59').checked) {
        points++;
    }
    else {
        document.querySelector('#show59').textContent = 'False!'
        show59.style.color = 'red'
    }

    if(document.querySelector('#answer60').checked) {
        points++;
    }
    else {
        document.querySelector('#show60').textContent = 'False!'
        show60.style.color = 'red'
    }

    if(document.querySelector('#answer61').checked) {
        points++;
    }
    else {
        document.querySelector('#show61').textContent = 'False!'
        show61.style.color = 'red'
    }

    if(document.querySelector('#answer62').checked) {
        points++;
    }
    else {
        document.querySelector('#show62').textContent = 'False!'
        show62.style.color = 'red'
    }

    if(document.querySelector('#answer63').checked) {
        points++;
    }
    else {
        document.querySelector('#show63').textContent = 'False!'
        show63.style.color = 'red'
    }

    if(document.querySelector('#answer64').checked) {
        points++;
    }
    else {
        document.querySelector('#show64').textContent = 'False!'
        show64.style.color = 'red'
    }

    if(document.querySelector('#answer65').checked) {
        points++;
    }
    else {
        document.querySelector('#show65').textContent = 'False!'
        show65.style.color = 'red'
    }

    if(document.querySelector('#answer66').checked) {
        points++;
    }
    else {
        document.querySelector('#show66').textContent = 'False!'
        show66.style.color = 'red'
    }

    if(document.querySelector('#answer67').checked) {
        points++;
    }
    else {
        document.querySelector('#show67').textContent = 'False!'
        show67.style.color = 'red'
    }

    if(document.querySelector('#answer68').checked) {
        points++;
    }
    else {
        document.querySelector('#show68').textContent = 'False!'
        show68.style.color = 'red'
    }

    if(document.querySelector('#answer69').checked) {
        points++;
    }
    else {
        document.querySelector('#show69').textContent = 'False!'
        show69.style.color = 'red'
    }

    if(document.querySelector('#answer70').checked) {
        points++;
    }
    else {
        document.querySelector('#show70').textContent = 'False!'
        show70.style.color = 'red'
    }

    if(document.querySelector('#answer71').checked) {
        points++;
    }
    else {
        document.querySelector('#show71').textContent = 'False!'
        show71.style.color = 'red'
    }

    if(document.querySelector('#answer72').checked) {
        points++;
    }
    else {
        document.querySelector('#show72').textContent = 'False!'
        show72.style.color = 'red'
    }

    if(document.querySelector('#answer73').checked) {
        points++;
    }
    else {
        document.querySelector('#show73').textContent = 'False!'
        show73.style.color = 'red'
    }

    if(document.querySelector('#answer74').checked) {
        points++;
    }
    else {
        document.querySelector('#show74').textContent = 'False!'
        show74.style.color = 'red'
    }

    if(document.querySelector('#answer75').checked) {
        points++;
    }
    else {
        document.querySelector('#show75').textContent = 'False!'
        show75.style.color = 'red'
    }

    if(document.querySelector('#answer76').checked) {
        points++;
    }
    else {
        document.querySelector('#show76').textContent = 'False!'
        show76.style.color = 'red'
    }

    if(document.querySelector('#answer77').checked) {
        points++;
    }
    else {
        document.querySelector('#show77').textContent = 'False!'
        show77.style.color = 'red'
    }

    if(document.querySelector('#answer78').checked) {
        points++;
    }
    else {
        document.querySelector('#show78').textContent = 'False!'
        show78.style.color = 'red'
    }

    if(document.querySelector('#answer79').checked) {
        points++;
    }
    else {
        document.querySelector('#show79').textContent = 'False!'
        show79.style.color = 'red'
    }

    if(document.querySelector('#answer80').checked) {
        points++;
    }
    else {
        document.querySelector('#show80').textContent = 'False!'
        show80.style.color = 'red'
    }

    if(document.querySelector('#answer81').checked) {
        points++;
    }
    else {
        document.querySelector('#show81').textContent = 'False!'
        show81.style.color = 'red'
    }

    if(document.querySelector('#answer82').checked) {
        points++;
    }
    else {
        document.querySelector('#show82').textContent = 'False!'
        show82.style.color = 'red'
    }

    if(document.querySelector('#answer83').checked) {
        points++;
    }
    else {
        document.querySelector('#show83').textContent = 'False!'
        show83.style.color = 'red'
    }

    if(document.querySelector('#answer84').checked) {
        points++;
    }
    else {
        document.querySelector('#show84').textContent = 'False!'
        show84.style.color = 'red'
    }

    if(document.querySelector('#answer85').checked) {
        points++;
    }
    else {
        document.querySelector('#show85').textContent = 'False!'
        show85.style.color = 'red'
    }

    if(document.querySelector('#answer86').checked) {
        points++;
    }
    else {
        document.querySelector('#show86').textContent = 'False!'
        show86.style.color = 'red'
    }

    if(document.querySelector('#answer87').checked) {
        points++;
    }
    else {
        document.querySelector('#show87').textContent = 'False!'
        show87.style.color = 'red'
    }

    if(document.querySelector('#answer88').checked) {
        points++;
    }
    else {
        document.querySelector('#show88').textContent = 'False!'
        show88.style.color = 'red'
    }

    if(document.querySelector('#answer89').checked) {
        points++;
    }
    else {
        document.querySelector('#show89').textContent = 'False!'
        show89.style.color = 'red'
    }

    if(document.querySelector('#answer90').checked) {
        points++;
    }
    else {
        document.querySelector('#show90').textContent = 'False!'
        show90.style.color = 'red'
    }

    if(document.querySelector('#answer91').checked) {
        points++;
    }
    else {
        document.querySelector('#show91').textContent = 'False!'
        show91.style.color = 'red'
    }

    if(document.querySelector('#answer92').checked) {
        points++;
    }
    else {
        document.querySelector('#show92').textContent = 'False!'
        show92.style.color = 'red'
    }

    if(document.querySelector('#answer93').checked) {
        points++;
    }
    else {
        document.querySelector('#show93').textContent = 'False!'
        show93.style.color = 'red'
    }

    if(document.querySelector('#answer94').checked) {
        points++;
    }
    else {
        document.querySelector('#show94').textContent = 'False!'
        show94.style.color = 'red'
    }

    if(document.querySelector('#answer95').checked) {
        points++;
    }
    else {
        document.querySelector('#show95').textContent = 'False!'
        show95.style.color = 'red'
    }

    if(document.querySelector('#answer96').checked) {
        points++;
    }
    else {
        document.querySelector('#show96').textContent = 'False!'
        show96.style.color = 'red'
    }

    if(document.querySelector('#answer97').checked) {
        points++;
    }
    else {
        document.querySelector('#show97').textContent = 'False!'
        show97.style.color = 'red'
    }

    if(document.querySelector('#answer98').checked) {
        points++;
    }
    else {
        document.querySelector('#show98').textContent = 'False!'
        show98.style.color = 'red'
    }

    if(document.querySelector('#answer99').checked) {
        points++;
    }
    else {
        document.querySelector('#show99').textContent = 'False!'
        show99.style.color = 'red'
    }

    if(document.querySelector('#answer100').checked) {
        points++;
    }
    else {
        document.querySelector('#show100').textContent = 'False!'
        show100.style.color = 'red'
    }

    par.textContent = 'Your score is:: ' + points;

}


const button = document.querySelector('#end');
const p = document.querySelector('#p');

const quotes = [
"What is the supreme law of the land? - The Constitution",
"What does the Constitution do? - protects basic rights of Americans",
"The idea of self-government is in the first three words of the Constitution. What are these words? - We the People",
"What is an amendment? - A change (to the Constitution)",
"What do we call the first ten amendments to the Constitution? - The Bill of Rights",
"What is one right or freedom from the First Amendment? - Speech",
"How many amendments does the Constitution have? - 27",
"What did the Declaration of Independence do? - Declared our independence from Great Britain",
"What are two rights in the Declaration of Independence? - Life and liberty",
"What is freedom of religion? - You can practice any religion, or not practice a religion",
"What is the economic system in the United States? - Capitalist economy",
"What is the “rule of law”? - Everyone must follow the law",
"Name one branch or part of the government. - Congress",
"What stops one branch of government from becoming too powerful? - Separation of powers",
"Who is in charge of the executive branch? - the President",
"Who makes federal laws? - Congress",
"What are the two parts of the U.S. Congress? - The Senate and House of Representatives",
"How many U.S. Senators are there? - One hundred (100)",
"We elect a U.S. Senator for how many years? - Six (6)",
"Who is one of your state`s U.S. Senators now? - Mark Warner",
"The House of Representatives has how many voting members? - Four hundred thirty-five (435)",
"We elect a U.S. Representative for how many years? - Two (2)",
"Name your U.S. representative - Visit our Government Page to find out who is your U.S. Representative.",
"Who does a U.S. Senator represent? - All people of the state",
"Why do some states have more Representatives than other states? - Because they have more people",
"We elect a President for how many years? - Four (4)",
"In what month do we vote for President? - November",
"What is the name of the President of the United States now? - Joseph R. Biden, Jr.",
"What is the name of the Vice President of the United States now? - Kamala D. Harris",
"If the President can no longer serve, who becomes President? - The Vice President",
"If both the President and the Vice President can no longer serve, who becomes President? - The Speaker of the House",
"Who is the Commander in Chief of the military? - The President",
"Who signs bills to become laws? - The President",
"Who vetoes bills? - The President",
"What does the President`s Cabinet do? - Advises the President",
"What are two Cabinet-level positions? - Secretary of Commerce and Secretary of Defense",
"What does the judicial branch do? - Reviews laws",
"What is the highest court in the United States? - The Supreme Court",
"How many justices are on the Supreme Court? - 9",
"Who is the Chief Justice of the United States now? - John G. Roberts, Jr.",
"Under our Constitution, some powers belong to the federal government. What is one power of the federal government? - To create an army",
"Under our Constitution, some powers belong to the states. What is one power of the states? - Provide schooling and education",
"Who is the Governor of your state now? - Glenn Youngkin",
"What is the capital of your state? - Richmond",
"What are the two major political parties in the United States? - Democratic and Republican",
"What is the name of the Speaker of the House of Representatives now? - Nancy Pelosi",
"There are four amendments to the Constitution about who can vote. Describe one of them. - Any citizen can vote. (Women and men can vote.)",
"What is one responsibility that is only for United States citizens? - Vote in a federal election",
"Name one right only for United States citizens. - Run for federal office",
"What are two rights of everyone living in the United States? - Freedom of expression and freedom of speech",
"What do we show loyalty to when we say the Pledge of Allegiance? - The United States",
"What is one promise you make when you become a United States citizen? - Obey the laws of the United States",
"How old do citizens have to be to vote for President? - Eighteen (18) and older",
"What are two ways that Americans can participate in their democracy? - Vote and join a political party",
"When is the last day you can send in federal income tax forms - April 15",
"When must all men register for the Selective Service? - Between eighteen (18) and twenty-six (26)",
"What is one reason colonists came to America? - Freedom",
"Who lived in America before the Europeans arrived? - American Indians",
"What group of people was taken to America and sold as slaves? - Africans",
"Why did the colonists fight the British? - Because they didn`t have self-government",
"Who wrote the Declaration of Independence? - Thomas Jefferson",
"When was the Declaration of Independence adopted? - July 4, 1776",
"There were 13 original states. Name three. - New York, New Jersey and Virginia",
"What happened at the Constitutional Convention? - The Constitution was written.",
"When was the Constitution written? - 1787",
"The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers. - John Jay",
"What is one thing Benjamin Franklin is famous for? - U.S. diplomat",
"Who is the “Father of Our Country”? - George Washington",
"Who was the first President? - George Washington",
"What territory did the United States buy from France in 1803? - Louisiana",
"Name one war fought by the United States in the 1800s. - Civil War",
"Name the U.S. war between the North and the South. - the Civil War",
"Name one problem that led to the Civil War. - Slavery",
"What was one important thing that Abraham Lincoln did? - Freed the slaves (Emancipation Proclamation)",
"What did the Emancipation Proclamation do? - Freed the slaves",
"What did Susan B. Anthony do? - Fought for women`s rights",
"Name one war fought by the United States in the 1900s. - World War I",
"Who was President during World War I? - Woodrow Wilson",
"Who was President during the Great Depression and World War II? - Franklin Roosevelt",
"Who did the United States fight in World War II? - Japan, Germany, and Italy",
"Before he was President, Eisenhower was a general. What war was he in? - World War II",
"During the Cold War, what was the main concern of the United States? - Communism",
"What movement tried to end racial discrimination? - Civil rights movement",
"What did Martin Luther King, Jr. do? - Fought for civil rights",
"What major event happened on September 11, 2001, in the United States? - Terrorists attacked the United States.",
"Name one American Indian tribe in the United States. - Cherokee",
"Name one of the two longest rivers in the United States. - Mississippi River",
"What ocean is on the West Coast of the United States? - Pacific Ocean",
"What ocean is on the East Coast of the United States? - Atlantic Ocean",
"Name one U.S. territory. - Guam",
"Name one state that borders Canada. - New York",
"Name one state that borders Mexico. - California",
"What is the capital of the United States? - Washington, D.C.",
"Where is the Statue of Liberty? - New York Harbor",
"Why does the flag have 13 stripes? - Because there were 13 original colonies",
"Why does the flag have 50 stars? - Because there are 50 states",
"What is the name of the national anthem? - The Star-Spangled Banner",
"When do we celebrate Independence Day? - July 4",
"Name two national U.S. holidays. - Presidents Day and Thanksgiving"
]

button.addEventListener('click', () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    p.style.display = 'block';
    p.textContent = randomQuote;
})

const myButton = document.querySelector("#myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
    navbarTitle.style.display = "none";
    mainLogo.style.display = "none";
    } 
    else {
    myButton.style.display = "none";
    navbarTitle.style.display = "block";
    mainLogo.style.display = "block";
    }
}

myButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})