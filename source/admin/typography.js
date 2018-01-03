$(document).ready(function(){
	var arr = [];
	var obj = {
		"id":1,
	    "name":"Tin Nhắn 1",
	    "details":"Nội Dung",	
	};
	arr[arr.length] = obj;
	var obj = {
		"id":2,
	    "name":"Tin Nhắn 2",
	    "details":"Nội Dung",	
	};
	arr[arr.length] = obj;
	var obj = {
		"id":3,
	    "name":"Tin Nhắn 3",
	    "details":"Nội Dung",	
	};
	arr[arr.length] = obj;
	for(i = 0 ; i < arr.length ; i++) {
		arr[i].id = i;
	}
	var count = 2 , i , idx = 1;
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
	      '<td class="arrname">'
	      +
	      arr[0].name
	      +
	      '</td>'
	      + 
	      '<td class="arrdetail">'
	      +
	      arr[0].details
	      +
	      '</td>'
	      + 
	      '<td class="arricon1">'
	      +
	      '<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
	      +
	      '</td>'
	      +
	      '<td class="arricon2">'
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
	      '<td class="arrname">'
	      +
	      arr[1].name
	      +
	      '</td>'
	      + 
	      '<td class="arrdetail">'
	      +
	      arr[1].details
	      +
	      '</td>'
	      + 
	      '<td class="arricon1">'
	      +
	      '<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
	      +
	      '</td>'
	      +
	      '<td class="arricon2">'
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
	      '<td class="arrname">'
	      +
	      arr[2].name
	      +
	      '</td>'
	      + 
	      '<td class="arrdetail">'
	      +
	      arr[2].details
	      +
	      '</td>'
	      + 
	      '<td class="arricon1">'
	      +
	      '<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
	      +
	      '</td>'
	      +
	      '<td class="arricon2">'
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

			$("tr").each(function(){
				$(this).find(".bang-id").html($(this).index() + 1);
			});
	    }
	});
  //xoa da xong

	$('table').on('click', '.fa-icon.fa.fa-pencil', function(){

		var a = $(this).closest("tr");
		var f = $(a).find(".bang-id").html() - 1;

		var arrname = $(a).find(".arrname");
		var arrdetail = $(a).find(".arrdetail");
		var arricon1 = $(a).find(".arricon1");
		var arricon2 = $(a).find(".arricon2");
		$(arricon1).html(
			'<i class="fa-icon fa fa-check" title="Lưu"></i>'
		);
		$(".fa-icon.fa.fa-check").hover(function(){
			$(this).css("font-size" , "20px");
		});
		$(".fa-icon.fa.fa-check").mouseout(function(){
			$(this).css("font-size" , "inherit");
		});

		$(arricon2).html(
			'<i class="fa-icon fa fa-remove" title="Thoát" style="margin-top:10px"></i>'
		);

		$(".fa-icon.fa.fa-remove").css("color" ,"#e43333");
		$(".fa-icon.fa.fa-remove").hover(function(){
			$(this).css("font-size" , "20px");
		});
		$(".fa-icon.fa.fa-remove").mouseout(function(){
			$(this).css("font-size" , "inherit");
		});

		$(arrname).html(
			'<input type="text" class="form-control input-arrname" placeholder="Tên mới">'
		);

		$(arrdetail).html(
			'<input type="text" class="form-control input-arrdetail" placeholder="Chi tiết mới">'
		);
		//doing
		$(a).find(".fa-icon.fa.fa-remove").closest("tr").find(".form-control.input-arrname").val(arr[f].name);
		$(a).find(".fa-icon.fa.fa-remove").closest("tr").find(".form-control.input-arrdetail").val(arr[f].details);
		//doing
		$(".fa-icon.fa.fa-remove").click(function(){
			var f1 = $(this).closest("tr").find(".bang-id").html() - 1;
			$(arrname).html(
				arr[f1].name
			);
			$(arrdetail).html(arr[f1].details);

			$(arricon1).html(
				'<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
			);
			$(arricon2).html(
				'<i class="fa-icon fa fa-close" title="Xóa"></i>'
			);


		});


		$(".fa-icon.fa.fa-check").click(function(){
				var f1 = $(this).closest("tr").find(".bang-id").html() - 1;
				arr[f1].name = $(".input-arrname").val();
				arr[f1].details = $(".input-arrdetail").val();
		  		var abc = $(".input-arrdetail").val();
		  		if(abc.length > 20) {
		  			var cdf = abc.substring(0, 20) + '....';
		  		} else {
		  			var cdf = $(".input-arrdetail").val();
		  		}
				//arr.name tai vi tri thu f1 , khong phai arr.name tai id = f1
				/*neu stt thu 2 bi xoa thi stt se la 1 - 3 - 4 va tri tri mang se la 0-1-2 
				vay khi stt 4 -1 = 3 , ma trong khi do trong mang lai khong co v.tri thu 3 nen 
				no se khong tim thay vi tri cuar $('.bang-id').html() -1*/
				$(arrname).html(

					arr[f1].name

				);
				$(arrdetail).html(
					cdf
				
				);



				$(arricon1).html(
					'<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
				);
				$(arricon2).html(
					'<i class="fa-icon fa fa-close" title="Xóa"></i>'
				);
		});
	
	});


  //check da xong
  $("#add-form").submit(function(e){
  		e.preventDefault();
  		count = count + 1;
  		var abc = $("#add-detail-col2-2").val();
  		if(abc.length > 20) {
  			var cdf = abc.substring(0, 20) + '....';
  		} else {
  			var cdf = $("#add-detail-col2-2").val();
  		}
	    $("#add-point").append(
	      '<tr>'
	      +
	      '<td class="bang-id">'
	      +
	      '</td>'
	      + 
	      '<td class="arrname">'
	      +
	      $("#add-name-col2-1").val()
	      +
	      '</td>'
	      + 
	      '<td class="arrdetail">'
	      +
	      cdf
	      +
	      '</td>'
	      + 
	      '<td class="arricon1">'
	      +
	      '<i class="fa-icon fa fa-pencil" title="Sửa"></i>'
	      +
	      '</td>'
	      +
	      '<td class="arricon2">'
	      +
	      '<i class="fa-icon fa fa-close" title="Xóa"></i>'
	      +
	      '</td>'                                 
	      +
	      '</tr>'
	    );

		$("tr").each(function(){
			$(this).find(".bang-id").html($(this).index() + 1);
		});

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