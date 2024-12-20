<template>
    <div class="draw-temp">
        <canvas ref="myCanvas" style="border:0px solid #d3d3d3;"></canvas>
    </div>
</template>

<script>
function getCtrlPoint(ps,i,a,b) {
    if(!a||!b){
        a=0.25;
        b=0.25;
    }
    var p0 = ps[i-1] || ps[0];
    var p1 = ps[i];
    var p2 = ps[i+1] || ps[ps.length-1];
    var p3 = ps[i+2] || ps[ps.length-1];
    var pAx=p1.x+(p2.x-p0.x)*a;
    var pAy=p1.y+(p2.y-p0.y)*a;
    var pBx=p2.x-(p3.x-p1.x)*b;
    var pBy=p2.y-(p3.y-p1.y)*b;
    return {pA:{x:pAx,y:pAy},pB:{x:pBx,y:pBy}}
}

function drawNumber(ctx, point, weatherData, direction) {
    ctx.fillStyle = 'black'; // 设置数字颜色
    ctx.font = '12px Arial'; // 设置字体大小和样式

    let number, yAxis;
    if (direction == 0) {
        number = weatherData.tempMax;
        yAxis = point.y - 15;
    }
    else {
        number = weatherData.tempMin;
        yAxis = point.y + 20;
    }
    ctx.fillText(number, point.x - 7, yAxis);
}

function drawCurve(ctx, points, fillStyle, strokeStyle, weatherData, direction) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 4;

    for (let i = 0; i < points.length; i++) {
        ctx.fillStyle = fillStyle;
        ctx.beginPath();
        ctx.arc(points[i].x,points[i].y, 10, 0, 2*Math.PI, true);
        ctx.closePath();
        ctx.fill();
        drawNumber(ctx, points[i], weatherData[i], direction);
    }

    ctx.beginPath();
    ctx.lineTo(points[0].x,points[0].y);

    for (let i = 1; i < points.length; i++) {
        var ctrlP=getCtrlPoint(points,i-1);
        ctx.bezierCurveTo(ctrlP.pA.x,ctrlP.pA.y,ctrlP.pB.x,ctrlP.pB.y,points[i].x,points[i].y);
    }

    ctx.stroke();
}

export default {
    props: {
        sevenDaysWeather: {
            type: Object,
            required: true
        }
    },

    watch: {
        sevenDaysWeather() {
            this.draw();
        }
    },

    methods: {
        draw() {
            const canvas = this.$refs.myCanvas;
            const width = window.innerWidth * 0.97;
            canvas.width = width; // 设置 canvas 实际的绘图宽度（单位：px）
            canvas.height = 300;  // 设置 canvas 实际的绘图高度（单位：px）
            const ctx = canvas.getContext('2d');
            
            
            let minTemp = 1000, maxTemp = -1000;

            for (let i = 0; i < 7; i++) {
                minTemp = Math.min(minTemp, Number(this.sevenDaysWeather[i].tempMin));
                maxTemp = Math.max(maxTemp, Number(this.sevenDaysWeather[i].tempMax));
            }
            
            let maxTemps = [];
            let minTemps = [];

            let drawAreaPixel = 50;
            let tempDiff = maxTemp - minTemp; 

            let tempScale = drawAreaPixel / tempDiff;
            for (let i = 0; i < 7; i++) {
                let xAxis = (width/7) * (i) + (width/7) / 2;
                let maxTempYAxis = 140 - (Number(this.sevenDaysWeather[i].tempMax) + Math.abs(minTemp)) * tempScale;
                
                maxTemps.push({x:xAxis, y:maxTempYAxis});

                let minTempYAxis = 160 + (drawAreaPixel - (Number(this.sevenDaysWeather[i].tempMin) + Math.abs(minTemp)) * tempScale);
                minTemps.push({x:xAxis, y:minTempYAxis});
            }
            //console.log(dayTemp);
            
            drawCurve(ctx, maxTemps, "orange", "orange", this.sevenDaysWeather, 0);
            drawCurve(ctx, minTemps, "#0f1", "#f01", this.sevenDaysWeather, 1);
        }
    },

    mounted() {
        window.addEventListener("resize", this.draw);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.draw);
    },


}

</script>

<style>
.draw-temp {
    margin-top: 20px;
}
</style>

