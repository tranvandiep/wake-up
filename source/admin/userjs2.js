$(document).ready(function(){
	var arr = [];
	var obj = {
		"id":1,
	    "name":"Khách VIP",
	    "details":"Chi tiết",	
	};
	arr[arr.length] = obj;
	var obj = {
		"id":2,
	    "name":"Khách Thường Xuyên Sử Dụng",
	    "details":"Chi tiết",	
	};
	arr[arr.length] = obj;
	var obj = {
		"id":3,
	    "name":"Khách Mới Sử dụng",
	    "details":"Chi tiết",	
	};
	arr[arr.length] = obj;
	var count = 3;
	var obj = {};
  var add1 = $("#add-name-col2-1").val();
  var add2 = $("#add-detail-col2-2").val();
  $("#edit-form").hide();

  $("#add-point").append(
	      '<tr>'
	      +
	      '<td class="bang-id">'
	      +
	      1
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      '<a href="table.html">'
	      +
	      arr[0].name
	      +
	      '</i>'
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      arr[0].details
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      '<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
	      +
	      '</td>'
	      +
	      '<td>'
	      +
	      '<i class="fa-icon fa fa-close" title="Xóa"></i>'
	      +
	      '</td>'                                 
	      +
	      '</tr>'
	      +
	      '<tr>'
	      +
	      '<td class="bang-id">'
	      +
	      2
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      '<a href="table.html">'
	      +
	      arr[1].name
	      +
	      '</i>'
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      arr[1].details
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      '<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
	      +
	      '</td>'
	      +
	      '<td>'
	      +
	      '<i class="fa-icon fa fa-close" title="Xóa"></i>'
	      +
	      '</td>'                                 
	      +
	      '</tr>'
	      +'<tr>'
	      +
	      '<td class="bang-id">'
	      +
	      3
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      '<a href="table.html">'
	      +
	      arr[2].name
	      +
	      '</i>'
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      arr[2].details
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      '<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
	      +
	      '</td>'
	      +
	      '<td>'
	      +
	      '<i class="fa-icon fa fa-close" title="Xóa"></i>'
	      +
	      '</td>'                                 
	      +
	      '</tr>'
	    );

  //Tim dx xong
  $("#search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#nhom-table > tbody > tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  //Tim dx xong

  //xoa da xong
  $('table').on('click', '.fa-icon.fa.fa-close', function(){
  	var a = $(this).closest("tr").find('.bang-id').html() - 1;
	var r = confirm("Bạn có chắc muốn xóa nhóm khách hàng này chứ ?");
    if (r == true) {
      $(this).closest("tr").remove(); 
      arr.splice(a , 1);
    }
		
	});
  //xoa da xong

  $('table').on('click', '.fa-icon.fa.fa-pencil', function(){
      var a = $(this).closest("tr");
      $("#edited-id").html($(a).find('.bang-id').html());
      $(a).siblings().hide();
      $("#edit-form").show();
      $(".fa-icon.fa.fa-pencil").hide();
      $(".fa-icon.fa.fa-close").hide();
          $("#exit-edit").click(function(){
              $(a).siblings().show();
              $("#edit-form").hide();
              $(".fa-icon.fa.fa-pencil").show();
          $(".fa-icon.fa.fa-close").show();
        });

		$("#saved-change").click(function(){
			

		});	
	});


  //check da xong
  $("#add-form").submit(function(e){
  		e.preventDefault();
	    count = count + 1;
	    $("#add-point").append(
	      '<tr>'
	      +
	      '<td class="bang-id">'
	      +
	      count
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      '<a href="table.html">'
	      +
	      $("#add-name-col2-1").val()
	      +
	      '</i>'
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      $("#add-detail-col2-2").val()
	      +
	      '</td>'
	      + 
	      '<td>'
	      +
	      '<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
	      +
	      '</td>'
	      +
	      '<td>'
	      +
	      '<i class="fa-icon fa fa-close" title="Xóa"></i>'
	      +
	      '</td>'                                 
	      +
	      '</tr>'
	    );

	    obj = {
	    "id":count,
	    "name":$("#add-name-col2-1").val(),
	    "details":$("#add-detail-col2-2").val(),
	    };

	    arr.push(obj);
	    console.log(arr);
	    $("#add-name-col2-1").val("");
	    $("#add-detail-col2-2").val("");
	});


/*  $('table').on('click', '.fa-icon.fa.fa-close', function(){
  		var count2 = 0 , i;
  		var c = $(this).closest('tr').remove();	
  		for(i = 0 ; i < arr.length ; i++) {
  			count2 = count2 + 1;
  			arr[i].id = count2;
  		} 		

	});*/


  //check da xong

  //thoat va bat edit da xong
/*  $("#nhom-table > tbody > tr > td > .fa-icon.fa.fa-pencil").click(function(){
    var a = $(this).closest("tr");
      $(a).siblings().hide();
      $("#edit-form").show();
      $(".fa-icon.fa.fa-pencil").hide();
      $(".fa-icon.fa.fa-close").hide();
          $("#exit-edit").click(function(){
              $(a).siblings().show();
              $("#edit-form").hide();
              $(".fa-icon.fa.fa-pencil").show();
          $(".fa-icon.fa.fa-close").show();
        });

  });*/
  //thoat va bat edit da xong


});