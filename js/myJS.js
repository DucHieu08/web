$(document).ready(function($) {
	$("#btnDangKi").click(function() {
			var name = $("#name").val();
			var regexname = /^[^0-9]{2,}$/;
			var email = $("#email").val();
			var regexemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var pass = $("#passWord").val();
			var regexpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
			var phone = $("#phone").val();
			var regexPhoneNumber = /^[0-9]{10}$/;
			if(name.trim() === "" || name == null)
			{
				alert("Bạn chưa nhập tên!");
				$("#name").focus();
				return false;
			}
			else if(email.trim() === "" || email == null)
			{
				alert("Bạn chưa nhập email!");
				$("#email").focus();
				return false;
			}
			else if(pass == "")
			{
				alert("Bạn chưa nhập mật khẩu!");
				$("#passWord").focus();
				return false;
			}
			else if(phone == "" || phone.trim() === "")
			{
				alert("Bạn chưa nhập số điện thoại!");
				$("#phone").focus();
				return false;
			}
			else if(!regexname.test(name)){
				alert("Tên không được chứa số. Mời bạn nhập lại!");
				$("#name").focus();
				return false;
			}
			else if(!regexemail.test(email)){
				alert("Email bạn đã nhập sai. Mời bạn nhập lại!");
				$("#email").focus();
				return false;
			}
			else if(!regexpass.test(pass)){
				alert("Mật khẩu của bạn phải có ít nhất 8 kí tự; ít nhất 1 kí tự chữ thường, 1 kí tự chữ hoa, 1 kí tự số")
				$("#passWord").focus();
				return false;

			}
			else if (!regexPhoneNumber.test(phone)) {
				alert("Số điện thoại bạn phải đảm bảo 10 số. Mời bạn nhập lại!");
				$("#phone").focus();
				return false;
			}
			else
			{
				$("#myModalhp").modal();
				$("#tenTV").html(name);
				$("#mailTV").html(email);
				return false;
			}
	});
	$("#btndong").click(function(){
		$("#myModal").modal();

	});
	
	$("#DatMua").click(function() {
			$("#myModalInfo").modal();
	});
	$("#ok").click(function() {
		var name = $("#name").val();
		var regexname = /^[^0-9]{2,}$/;
		var address = $("#ad").val();
		var phoneNumber = $("#phone").val();
		var regexPhoneNumber = /^[0-9]{10}$/;
		if (name.trim() === "" || name == null) {
			alert("Bạn chưa nhập tên!");
			$("#name").focus();
			return false;
		}
		else if (address.trim() === "" || address == null) {
			alert("Bạn chưa nhập địa chỉ!");
			$("#ad").focus();
			return false;
		}
		else if (phoneNumber.trim() === "" || phoneNumber == null) {
			alert("Bạn chưa nhập số điện thoại!");
			$("#phone").focus();
			return false;
		}
		else if(!regexname.test(name)){
			alert("Tên không được chứa số. Mời bạn nhập lại");
			$("#name").focus();
			return false;
		}
		else if (!regexPhoneNumber.test(phoneNumber)) {
			alert("Số điện thoại bạn phải đảm bảo 10 số. Mời bạn nhập lại!");
			$("#phone").focus();
			return false;
		}
		else
		{
			$("#myModalInfo").modal("hide");
			$("#myModalsp").modal();
		}
	});
});