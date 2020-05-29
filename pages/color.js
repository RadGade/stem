import { colorJ } from "../data";
const color = `
<canvas></canvas>
<div class = "background" >
<h1 class="det-title">Touch Sensor</h1>
<div class="QA">

<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${colorJ[1]}</p>
<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${colorJ[2]}</p>
<p class="question">What is the purpose of this sensor?</p>
<p class="answer">${colorJ[3]}</p>
</div>
    <div class="parallelogram " onclick="location.href='${colorJ.link}';">
<img class="det-img" src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmyrobotcenter.a.ssl.fastly.net%2Fmedia%2Fcatalog%2Fproduct%2F4%2F5%2F45506_prod_colour-sensor_01_left_1.jpg&sp=1590751084Tf2d2400e0cd73250b3c0f6e8a416930c968a5cd4fab7ef1bf04113511ee7e820" />
		</div>
    
</div>
    <button onclick="location.href='/';" class="back">Back</button>
     
`;

export default color;
