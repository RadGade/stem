import { ultraJ } from "../data";
const ultra = `
<canvas></canvas>
<div class = "background" >
<h1 class="det-title">Ultrasonic Sensor</h1>
<div class="QA">

<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${ultraJ[1]}</p>
<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${ultraJ[2]}</p>
<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${ultraJ[3]}</p>
</div>
    <div class="parallelogram " onclick="location.href='${ultraJ.link}';">
<img class="det-img" src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.generation-robots.com%2F14102-thickbox_default%2Fultrasonic-sensor-for-lego-mindstorms-ev3-robts.jpg&sp=1590750950T4d2ae65715a85ee226d6251010574b3023d6a420d12d468bfe69f8f4f48c48a5" />
		</div>
    
</div>
    <button onclick="location.href='/';" class="back">Back</button>
     
`;

export default ultra;
