$(function(){
    $.ajax({
      type:"GET",
      url:"../bigscreen/Third/JS/JSON/tb5.json",
      dataType: "json",
      //请求成功完成后要执行的方法
      success: function(data){
          //动态生成表格
          var html = '';
          $.each(data,function(i,item){
              html += '<tr><td  align="left">'+item['title']+'</td>'+
              '<td >'+item['2021']+'</td>'+
              '<td >'+item['2022']+'</td>'+
              '<td >'+item['2023']+'</td>'+
              '<td >'+item['2024']+'</td>'+
              '<td >'+item['2025']+'</td></tr>'
              // 可以是item.address，也可以是item【‘address’】
              ;
          });
          $('#title').after(html);

      }
  });
});