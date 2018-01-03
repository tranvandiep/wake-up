if(!$(".input-arrname").val())
{	var f1 = $(this).closest("tr").find(".bang-id").html() - 1;
	$(arrname).html(
	arr[f1].name
	)
)

			if(!$(".input-arrdetail").val())
			{	var f1 = $(this).closest("tr").find(".bang-id").html() - 1;
				$(arrdetail).html(arr[f1].details);

			} 
			if(!$(".input-arrname").val() && !$(".input-arrdetail").val()) {