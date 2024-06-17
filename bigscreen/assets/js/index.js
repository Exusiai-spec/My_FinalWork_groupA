$(function(){
    /*标准*/
    option = {
        graphic: {
          elements: [
            {
              type: 'group',
              left: 'center',
              top: 'center',
              children: new Array(7).fill(0).map((val, i) => ({
                type: 'rect',
                x: i * 20,
                shape: {
                  x: 0,
                  y: -40,
                  width: 10,
                  height: 80
                },
                style: {
                  fill: '#5470c6'
                },
                keyframeAnimation: {
                  duration: 1000,
                  delay: i * 200,
                  loop: true,
                  keyframes: [
                    {
                      percent: 0.5,
                      scaleY: 0.3,
                      easing: 'cubicIn'
                    },
                    {
                      percent: 1,
                      scaleY: 1,
                      easing: 'cubicOut'
                    }
                  ]
                }
              }))
            }
          ]
        }
      };
    var radar = echarts.init(document.getElementById('radar'));
    $.ajax({
        method: 'get',
        url:'../bigscreen/assets/js/json/leidatu.json',
        dataType: 'json',
        success: function (data) {
            option = {
                title: {
                    text: '',
                    color:"#FFD700"
                },
                tooltip: {},
                legend: {
        
                    data: ['第一标准', '第二标准','第三标准'],
                    x:"center",
                    y:'bottom',
                    textStyle:{
                        color:"#fff"
                    }
                },
                color: ['#4c95d9', '#f6731b', '#8cd43f'],
                radar: {
                    name:{
                        textStyle: {
                            //设置颜色
                            color:'#fff'
                        }
                    },
                    indicator: [
                        { name: 'test1', max: 6500},
                        { name: 'test2', max: 16000},
                        { name: 'test3', max: 30000},
                        { name: 'test4', max: 38000},
                        { name: 'test5', max: 52000},
                        { name: 'test6', max: 25000}
                    ],
                    center: ['50%','50%'],
                    radius: "58%"
                },
                series: [{
                    name: '',
                    type: 'radar',
                    itemStyle : {
                        normal : {
                            splitLine: {
                                lineStyle: {
        
                                }
                            },
                            label: {
                                show: false,
                                textStyle:{
                                },
                                formatter:function(params) {
                                    return params.value;}
                            },
                        }
                    },
                    data :data.data,
                }]
            };
            radar.setOption(option);


}
});
    /* 飞鸟尽*/
    var graduateyear = echarts.init(document.getElementById('graduateyear'));
    option = {
        title : {
            text:"",
            x:'center',
            y:'top',
            textStyle:
            {
                color:'#fff',
                fontSize:13
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '5%',
            top:"13%",
            containLabel: true
        },
        color:["#72b332",'#35a9e0'],
        legend: {
            data:['test1','test2'],
            show:true,

            right:'15%',
            y:"0",
            textStyle:{
                color:"#999",
                fontSize:'13'
            },
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : [],
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#2d3b53'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0,
                    rotate:'15'
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#2d3b53'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:"#999"
                    }
                },
            }
        ],
        series : [
            {
                name:'test1',
                type:'line',
                smooth:true,
                symbol:'roundRect',
                data:[]
            },
            {
                name:'test2',
                type:'line',
                smooth:true,
                symbol:'roundRect',
                data:[]
            }
        ]
    };
    graduateyear.setOption(option);

    $.ajax({
        method:"GET",
        url:"../bigscreen/assets/js/json/line1.json",
        dataType:"json"
    }).done(function(res){//返回数据
        list=res.data;
        const xData = [];
        const t1 = [];
        const t2 = [];
        for(let i in list){
           t1.push(list[i].t1);
           t2.push(list[i].t2);
           xData.push(list[i].xData);
    
        }
        graduateyear.setOption({
            xAxis:{
                data:xData
            },
            series:[
                {data:t1},
                {data:t2}
            ]
        });
    }) 

    /*==*/
    var sexrate = echarts.init(document.getElementById('sexrate'));
    $.ajax({
        method: 'get',
        url:'../bigscreen/assets/js/json/yuanhuan1.json',
        dataType: 'json',
        success: function (data) {
    var total = {
        name: '对比一'
    };
    option = {
        title: [{
            text: total.name,
            left: '48%',
            top: '34%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }, {
            text: total.value,
            left: '48%',
            top: '44%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color:['#70a3ff','#ff7f4e'],
        legend: {
            orient: 'vertical',
            x:'center',
            bottom:'5%',
            selectedMode:false,
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value ;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name + "  "+oa[i].value+"  "+ (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            data: ['test1','test2'],
            show:true,
            textStyle:{
                color:'#fff',
                fontWeight:'bold'
            },
        },

        series : [
            {
                name: 'PK',
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '55%'],
                center: ['50%', '40%'],
                data:data.data,
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align:'left',
                        textStyle: {
                            rotate:true
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label:{
                            show: true,
                            formatter: '{b} {c}'
                        }
                    }

                }
            }
        ]
    };
    sexrate.setOption(option);
}
});
    
    var householdrate = echarts.init(document.getElementById('householdrate'));
    $.ajax({
        method: 'get',
        url:'../bigscreen/assets/js/json/yuanhuan2.json',
        dataType: 'json',
        success: function (data) {
    var total = {
        name: '对比二'
    };
    option = {
        title: [{
            text: total.name,
            left: '48%',
            top: '34%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }, {
            text: total.value,
            left: '48%',
            top: '44%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color:['#4f9de7','#4acf79'],
        legend: {
            orient: 'vertical',
            x:'center',
            bottom:'5%',
            selectedMode:false,
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value ;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name + "  "+oa[i].value+"  "+ (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            data: ['test1','test2'],
            show:true,
            textStyle:{
                color:'#fff',
                fontWeight:'bold'
            },
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                selectedMode: 'single',
                radius: ['45%', '55%'],
                center: ['50%', '40%'],
                data: data.data,
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align:'left',
                        textStyle: {
                            rotate:true
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label:{
                            show: true,
                            formatter: '{b} {c}'
                        }
                    }
                }
            }
        ]
    };
    householdrate.setOption(option);
}
});
    /*  =====-=*/
    var courserate = echarts.init(document.getElementById('courserate'));
    $.ajax({
        method: 'get',
        url:'../bigscreen/assets/js/json/bingtu1.json',
        dataType: 'json',
        success: function (data) {
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y:'middle',
            textStyle:{
                color:"#fff"
            },

            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value+oa[5].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            },
            data: ['test1','test2','test3','test4','test5','text6']
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '45%',
                color:['#27c2c1','#9ccb63','#fcd85a','#60c1de','#0084c8','#d8514b'],
                center: ['38%', '50%'],
                data:data.data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '{b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    courserate.setOption(option);
}
    });
    /* =======*/
    var professionrate = echarts.init(document.getElementById('professionrate'));
    $.ajax({
        method: 'get',
        url:'../bigscreen/assets/js/json/bingtu2.json',
        dataType: 'json',
        success: function (data) {
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y:'middle',
            textStyle:{
                color:"#fff"
            },
            data: ['test1','test2','test3'],
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            }
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '60%',
                center: ['35%', '50%'],
                data:data.data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '  {b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    professionrate.setOption(option);
}
});
    /* 比例变化*/
    var changedetail = echarts.init(document.getElementById('changedetail'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['',''],
            show:false
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'8%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:0
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '数量',
                nameTextStyle:{
                    color:'#fff'
                },
                interval: 5,
                max:50,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            },
            {
                min: 0,
                max: 2.5,
                interval: 0.5,
                type: 'value',
                name: '增减',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            }
        ],
        color:"yellow",
        series: [
            {
                name:'test1',
                type:'bar',
                data:[],
                boundaryGap: '45%',
                barWidth:'40%',

                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#6bc0fb','#7fec9d','#fedd8b','#ffa597','#84e4dd'
                            ];
                            return colorList[params.dataIndex]
                        },label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
                }
            },

            {
                name:'test2',
                type:'line',
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color:'#c39705'
                    }
                },
                data:[]
            }
        ]
    };
    changedetail.setOption(option);

    $.ajax({
        method:"GET",
        url:"../bigscreen/assets/js/json/lineandbar1.json",
        dataType:"json"
    }).done(function(res){//返回数据
        list=res.data;
        const xData = [];
        const t1 = [];
        const t2 = [];
        for(let i in list){
           t1.push(list[i].t1);
           t2.push(list[i].t2);
           xData.push(list[i].xData);
    
        }
        changedetail.setOption({
            xAxis:{
                data:xData
            },
            series:[
                {data:t1},
                {data:t2}
            ]
        });
    }) 

    /* ===*/
    var juniorservice = echarts.init(document.getElementById('juniorservice'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#eaff00','#22ac38'],
        legend: {
            right:'0',
            data: ['test1', 'test2'],
            textStyle:{
                color:'#00ffff'
            }
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '3%',
            top:'10%',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            splitLine:{
                show:true,
                lineStyle:{
                    color: '#1e2b43'
                }
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                textStyle:{
                    color:"#fff"
                },
                alignWithLabel: true,
                interval:0

            }
        },
        dataZoom: [{
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            x:'0',
            end: 60,
            handleStyle:{
                color:"#519cff",
                backgroundColor:'#519cff'
            },
            textStyle:{
                color:"#fff"},
            borderColor:"#519cff"
        }],
        yAxis: {
            type: 'category',
            data: [],
            splitLine:{
                show:false,
                lineStyle:{
                    color: '#1e2b43'
                }
            },

            axisTick: {
                show: false
            },
            axisLine: {
                show:true,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisLabel:{
                textStyle:{
                    color:"#419aff"
                },
                lineStyle:{
                    color: '#519cff'
                },
                alignWithLabel: true,
                interval:0
            }
        },
        series: [
            {
                name: 'test1',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        textStyle:{
                            color:'#333'
                        }
                    }

                },
                data: []
            },
            {
                name: 'test2',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle:{
                            color:'#00f0ff'
                        }

                    }
                },
                data: []
            }
        ]
    };
    juniorservice.setOption(option);
    $.ajax({
        method:"GET",
        url:"../bigscreen/assets/js/json/hengxiangbar.json",
        dataType:"json"
    }).done(function(res){//返回数据
        list=res.data;
        const yData = [];
        const t1 = [];
        const t2 = [];
        for(let i in list){
           t1.push(list[i].t1);
           t2.push(list[i].t2);
           yData.push(list[i].yData);
    
        }
        juniorservice.setOption({
            yAxis:{
                data:yData
            },
            series:[
                {data:t1},
                {data:t2},
            ]
        });
    }) 

    /* ===*/
    var edubalance = echarts.init(document.getElementById('edubalance'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['test1','test2','test3','test4','test5'],
            right:"15%",
            textStyle:{
                color:'#fff'
            }
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'8%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:0,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',

                nameTextStyle:{
                    color:'#fff'
                },
                interval: 5,
                max:50,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            },
            {
                min: 0,
                max: 100,
                interval: 20,
                type: 'value',
                name: '所',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            }
        ],
        color:"yellow",
        series: [
            {
                name:'test1',
                type:'bar',
                data:[],
                itemStyle: {
                    normal: {
                        color: '#76da91'
                        },label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
            },
            {
                name:'test2',
                type:'bar',
                data:[],
                itemStyle: {
                    normal: {
                        color: '#f8cb7f'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
            },
            {
                name:'test3',
                type:'bar',
                data:[],
                itemStyle: {
                    normal: {
                        color: '#f89588'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'

                    }
                }
            },
            {
                name:'test4',
                type:'bar',
                data:[],
                itemStyle: {
                    normal: {
                        color: '#7cd6cf'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                }
            },
            {
                name:'test5',
                type:'line',
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color:'#c39705'
                    }
                },
                data:[]
            }
        ]
    };
    edubalance.setOption(option);

    $.ajax({
        method:"GET",
        url:"../bigscreen/assets/js/json/lineandbar2.json",
        dataType:"json"
    }).done(function(res){//返回数据
        list=res.data;
        const xData = [];
        const t1 = [];
        const t2 = [];
        const t3 = [];
        const t4 = [];
        const t5 = [];
        for(let i in list){
           t1.push(list[i].t1);
           t2.push(list[i].t2);
           t3.push(list[i].t3);
           t4.push(list[i].t4);
           t5.push(list[i].t5);
           xData.push(list[i].xData);
    
        }
        edubalance.setOption({
            xAxis:{
                data:xData
            },
            series:[
                {data:t1},
                {data:t2},
                {data:t3},
                {data:t4},
                {data:t5}
            ]
        });
    }) 

    /* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
    var maps = echarts.init(document.getElementById('mapadd'));
    var chinaData = '../bigscreen/assets/js/json/map.json';
    let chinaMap = null;
    $.ajaxSettings.async = false;
    $.get(chinaData, function (csJson) {
      chinaMap = csJson;
    });
    echarts.registerMap('china', chinaMap);
    let points = [
      { value: [87.628579, 43.793301], itemStyle: { color: '#00EEFF' } },
      { value: [104.076452, 30.651696], itemStyle: { color: '#00EEFF' } },
      { value: [103.826777, 36.060634], itemStyle: { color: '#00EEFF' } },
      { value: [102.709372, 25.046432], itemStyle: { color: '#00EEFF' } },
      { value: [108.327537, 22.816659], itemStyle: { color: '#00EEFF' } },
      { value: [112.982951, 28.116007], itemStyle: { color: '#00EEFF' } },
      { value: [117.020725, 36.670201], itemStyle: { color: '#00EEFF' } },
      { value: [113.753094, 34.767052], itemStyle: { color: '#00EEFF' } },
      { value: [112.578781, 37.813948], itemStyle: { color: '#00EEFF' } },
      { value: [119.296194, 26.101082], itemStyle: { color: '#00EEFF' } },
      { value: [120.152575, 30.266619], itemStyle: { color: '#00EEFF' } },
      { value: [118.763563, 32.061377], itemStyle: { color: '#00EEFF' } },
      { value: [116.407387, 39.904179], itemStyle: { color: '#00EEFF' } },
      { value: [108.953939, 34.266611], itemStyle: { color: '#00EEFF' } },
      { value: [113.266887, 23.133306], itemStyle: { color: '#FFFA00' } },
    ]
    
    option = {
      backgroundColor: '#040f3c',
      geo: {
        map: 'china',
        aspectScale: 0.75, // 长宽比
        zoom: 1.2,
        roam: false,
        regions: [{
          name: '南海诸岛',
          itemStyle: {
            areaColor: 'rgba(0, 10, 52, 1)',
            borderColor: 'rgba(0, 10, 52, 1)',
            normal: {
              opacity: 0,
              label: {
                show: false,
                color: '#009cc9',
              },
            },
          },
    
        }],
      },
      series: [{
          type: 'map',
          roam: false,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#00008C',
              },
            },
            emphasis: {
              textStyle: {
                color: '#ffff',
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: '#0068FB',
              borderWidth: 1,
              areaColor: {
                type: 'points',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [{
                  offset: 0,
                  color: '#00008B', // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#00008B', // 100% 处的颜色
                }],
                globalCoord: true, // 缺省为 false
              },
            },
            emphasis: {
              areaColor: '#00008B',
              borderWidth: 0.1,
            },
          },
          zoom: 1.2,
          map: 'china', // 使用
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          showEffectOn: 'points',
          zlevel: 1,
          rippleEffect: {
            number: 3, // 波纹的数量。
            period: 5, // 动画的周期，秒数。
            scale: 17, // 动画中波纹的最大缩放比例。
            brushType: 'fill', // 波纹的绘制方式，可选 'stroke' 和 'fill'。
          },
          symbolSize: 2,
          data: points,
        }, // 地图线的动画效果
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          showEffectOn: 'render',
          zlevel: 1,
          rippleEffect: {
            number: 4,
            period: 5,
            scale: 21,
            brushType: 'fill',
          },
          symbolSize: 3,
          data: [{ value: [113.266887, 23.133306], itemStyle: { color: '#FFFA00' } }],
        },
        {
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.4, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'pin', // 箭头图标
            symbolSize: 6, // 图标大小
          },
          lineStyle: {
            normal: {
              color: '#1DE9B6',
              width: 1, // 线条宽度
              opacity: 0.1, // 尾迹线条透明度
              curveness: 0.3, // 尾迹线条曲直度
            },
          },
          data: [
            { coords: [[113.266887, 23.133306], [87.628579, 43.793301]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [104.076452, 30.651696]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [103.826777, 36.060634]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [102.709372, 25.046432]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [108.327537, 22.816659]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [112.982951, 28.116007]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [117.020725, 36.670201]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [113.753094, 34.767052]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [112.578781, 37.813948]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [119.296194, 26.101082]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [120.152575, 30.266619]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [118.763563, 32.061377]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [116.407387, 39.904179]], lineStyle: { color: '#FFF96B' } },
            { coords: [[113.266887, 23.133306], [108.953939, 34.266611]], lineStyle: { color: '#FFF96B' } },
          ],
        },
        ],
    };
    maps.setOption(option);

})