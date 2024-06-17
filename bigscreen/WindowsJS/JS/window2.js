$(function(){ 
    var myChart1 = echarts.init(document.getElementById('main1')); 
var option1 = {
    title: {
text: ''
},
tooltip: {
trigger: 'axis',//坐标轴触发
axisPointer: {
//坐标轴指示器
type: 'shadow'
}
},
legend: {},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
containLabel: true
},
yAxis: {
type: 'value',

},
xAxis: {
type: 'category',
data:[]
},
series: [
{
name: 'ONE',
type: 'bar',
data: []
},
{
name: 'TWO',
type: 'line',
data: []
}
]
};
myChart1.setOption(option1);
$.ajax({
method:"GET",
url:"../bigscreen/WindowsJS/JSON/w2.json",
dataType:"json"
}).done(function(res){//返回数据
list=res.data;
const yData = [];
const yDatadan = [];
const yDataduo = [];
for(let i in list){
yDatadan.push(list[i].yDatadan);
yDataduo.push(list[i].yDataduo);
yData.push(list[i].yData);

}
myChart1.setOption({
xAxis:{
    data:yData
},

series:[
    {data:yDatadan},
    {data:yDataduo}
]

});
})

})