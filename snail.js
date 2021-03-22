$(function(){
    // 監聽 送出訂單 按鈕點擊
    // 下面這段主要在組合資料，還有擋使用者不填資料不能送出
    $('.btn').click(function(e){
    e.preventDefault();
    let status = true;

    let id = $('#id').val();

    let fightNum = $('#fightNum').val(); 

    // 擋住不填資料邏輯
    if(id == ''){
      $('#id').css('border','1px solid #ff0000');
      status = false;
    }
    if(fightNum == ''){
      $('#fightNum').css('border','1px solid #ff0000');
      status = false;
    }

    if(status){
      // 打包 要的資料
      let data = {
        'id' : id,
        'fightNum':fightNum,
      }
      // 呼叫 send ajax function
      send(data);
    }
  });
});
function send(data){
  url = `https://script.google.com/macros/s/AKfycbyWmrsViQknlK5xfrLXmdYA7lFAtucdLjJcm_ckCBBpWZVvCKCS/exec`
  $.ajax({
    // 這邊用get type
    type: "get",
    // api url - google appscript 產出的 url
    url: url,
    // 剛剛整理好的資料帶入
    data: data,
    // 資料格式是JSON 
    dataType: "JSON",
    // 成功送出 會回頭觸發下面這塊感謝
    success: function (response) {
      console.log(response);
      alert('成功填入');
    }
  });
}
