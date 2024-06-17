$(function(){
    $.ajax({
      type:"GET",
      url:"../bigscreen/Third/JS/JSON/tb3.json",
      dataType: "json",
      //请求成功完成后要执行的方法
      success: function(data){
          //动态生成表格
          var html = '';
          $.each(data,function(i,item){
              html += '<tr><td  align="left">'+item['title']+'</td>'+
              '<td >'+item['test1']+'</td>'+
              '<td >'+item['test2']+'</td>'+
              '<td >'+item['test3']+'</td>'+
              '<td >'+item['test4']+'</td>'+
              '<td >'+item['test5']+'</td>'+
              '<td >'+item['test6']+'</td></tr>'
              // 可以是item.address，也可以是item【‘address’】
              ;
          });
          $('#title').after(html);

      }
  });
});