import { gyroJ } from "../data";
const gyro = `
<canvas></canvas>
<div class = "background" >
<h1 class="det-title">Touch Sensor</h1>
<div class="QA">

<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${gyroJ[1]}</p>
<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${gyroJ[2]}</p>
<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${gyroJ[3]}</p>
</div>
    <div class="parallelogram " onclick="location.href='${gyroJ.link}';">
<img class="det-img" src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/45507?$PDPDefault$" />
		</div>
    
</div>
    <button onclick="location.href='/';" class="back">Back</button>
     
`;

export default gyro;
