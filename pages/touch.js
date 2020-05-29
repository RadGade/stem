import { touchJ } from "../data";
const touch = `
<canvas></canvas>
<div class = "background" >
<h1 class="det-title">Touch Sensor</h1>
<div class="QA">

<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${touchJ[1]}</p>
<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${touchJ[2]}</p>
<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${touchJ[3]}</p>
</div>
    <div class="parallelogram " onclick="location.href='${touchJ.link}';">
<img class="det-img" src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/45507?$PDPDefault$" />
		</div>
    
</div>
    <button onclick="location.href='/';" class="back">Back</button>
     
`;

export default touch;
