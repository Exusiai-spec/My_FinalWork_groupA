$(function(){ 
var myChart = echarts.init(document.getElementById('main2')); 
        var option = {
            title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
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
  xAxis: {
    type: 'category',
    data:[]
  },
  yAxis: {
    type:'value'
  },
  series: [
    {
      name: '峰值',
      type: 'line',
      data: []
    },
    {
      name: '低谷',
      type: 'line',
      data: []
    }
  ]
};
myChart.setOption(option);
$.ajax({
    method:"GET",
    url:"../bigscreen/WindowsJS/JSON/w3.json",
    dataType:"json"
}).done(function(res){//返回数据
    list=res.data;
    const xData = [];
    const yDatabe = [];
    const yDatadle = [];
    for(let i in list){
        yDatabe.push(list[i].yDatabe);
        yDatadle.push(list[i].yDatadle);
        xData.push(list[i].xData);

    }
    myChart.setOption({
        xAxis:{
            data:xData
        },
        series:[
            {data:yDatabe},
            {data:yDatadle}
        ]
    });
})
})