$(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
            var actions = $("table td:last-child").html();
        $(".add-new").click(function(){
            $(this).attr("disabled", "disabled");
                var index = $("table tbody tr:last-child").index();
                var row =   '<tr>' +
                                '<td><input type="text" class="form-control" name="stt" id="stt"></td>' +
                                '<td><input type="text" class="form-control" name="name" id="name"></td>' +
                                '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td>' + actions + '</td>' +
                            '</tr>';
            $("table").append(row);     
            $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
            $('[data-toggle="tooltip"]').tooltip();
        });
        $(document).on("click", ".add", function(){
            var empty = false;
            var input = $(this).parents("tr").find('input[type="text"]');
            input.each(function(){
                if(!$(this).val()){
                    $(this).addClass("error");
                    empty = true;
                } else{
                    $(this).removeClass("error");
                }
        });
        $(this).parents("tr").find(".error").first().focus();
            if(!empty){
                input.each(function(){
                    $(this).parent("td").html($(this).val());
                });         
                $(this).parents("tr").find(".add, .edit").toggle();
                $(".add-new").removeAttr("disabled");
            }       
        });
        $(document).on("click", ".edit", function(){        
            $(this).parents("tr").find("td:not(:last-child)").each(function(){
                $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
            });     
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").attr("disabled", "disabled");
        });
        $(document).on("click", ".delete", function(){
            $(this).parents("tr").remove();
            $(".add-new").removeAttr("disabled");
        });
        $(".add").click(function(){
            $.post("demo_test_post.asp",
            {
            id : "",    
            Ten: "Trần Xuân Bách",
            Sodienthoai: "0987654321"
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: " + status);
        });
    });
     
        $("#hide").hide();
       
       
 
        
    });
   
   




var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

    app.controller('myCtrl', function($scope, $http) {
        $scope.data = [
            {"idkhachhang" :'1',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'2',"idnhomkhachhang" : '1',"ten" : 'Trần Văn Điệp', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'3',"idnhomkhachhang" : '2',"ten" : 'Nguyễn Quang Hưng', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'4',"idnhomkhachhang" : '1',"ten" : 'Vũ Hưng', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'5',"idnhomkhachhang" : '3',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'6',"idnhomkhachhang" : '3',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'7',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'8',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'9',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'10',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'11',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'12',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'13',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'14',"idnhomkhachhang" : '3',"ten" : 'Đỗ Thế Hùng', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'8',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'9',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'10',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'11',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'12',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'13',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'14',"idnhomkhachhang" : '3',"ten" : 'Đỗ Thế Hùng', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},            
            {"idkhachhang" :'8',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'9',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'10',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'11',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'12',"idnhomkhachhang" : '2',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'13',"idnhomkhachhang" : '1',"ten" : 'Trần Xuân Bách', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
            {"idkhachhang" :'14',"idnhomkhachhang" : '3',"ten" : 'Đỗ Thế Hùng', "sdt" : '0987654321', "ngaysinh" : '02-07-1999',"diachi" : 'hanoi', "email" : 'abc@gmail.com', "facebook": 'abc', "skype" : 'zxc', "soluongtn" : '', "ngayguitn" : ''},
        ];

        
        $scope.sort = function(keyname){
        $scope.sortKey = keyname;   
        $scope.reverse = !$scope.reverse; 
        }

        $scope.serial = 1;
        $scope.indexCount = function(newPageNumber){
            $scope.serial = newPageNumber * 10 - 9;
        }
        
    });

