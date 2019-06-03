$(function(){
  // チェックボタンを押したとき
  $('input[name="topping"]').change(function(){
    // すべてのチェックボックスに対して
    $('input[name="topping"]').each(function(){
      　//  チェックがあれば
      if($(this).prop('checked')){
        // 表示
        $("." + $(this).val()).css('display', 'block');
    　  // チェックがなければ
      }else{
        // 非表示
        $("." + $(this).val()).css('display', 'none');
      }
    });
  });
});
