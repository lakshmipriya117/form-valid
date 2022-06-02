	
		var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
    var list5 = [];
		var list6 = [];
		var list7 = [];
		var list8 = [];
    var list9 = [];
		var list10 = [];
		var list11 = [];

		var n = 1;
		var x = 0;
		
	

		function AddRow(){
	
      var email = document.getElementById("email");
      var name = document.getElementById("name");
      var zip = document.getElementById("zip")
      var city = document.getElementById("city");
      var icountry = document.getElementById("icountry");
      var order = document.getElementById("order");
      var ivalue = document.getElementById("ivalue");
      var sdate = document.getElementById("sdate");
      var ttime = document.getElementById("ttime");
	  
     
	
      


      let reg =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
      if((email.value=="")||(name.value=="")||(zip.value=="")&&(city.value=="")||(icountry.value=="")||(order.value=="")||(ivalue.value=="")||(sdate.value=="")||(ttime.value==""))
	  {
       // alert("No field should be empty!");
        return false;
    }
    else if(reg.test(email.value)==false){
        alert("Enter a valid email!");
		//document.getElementById('email').style.borderColor='#e52213';
        return false;
    }
	//else if(reg.test(email.value)==true){
        
		//document.getElementById('email').style.borderColor='green';
//}
	
	
    

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("name").value;
			list2[x] = document.getElementById("email").value;
			list3[x] = document.getElementById("sname").value;
			list4[x] = document.getElementById("sno").value;
      		list5[x] = document.getElementById("zip").value;
			list6[x] = document.getElementById("city").value;
			list7[x] = document.getElementById("order").value;
			list8[x] = document.getElementById("icountry").value;
      		list9[x] = document.getElementById("sdate").value;
			list10[x] = document.getElementById("ttime").value;
			list11[x] = document.getElementById("ivalue").value;
		

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
      		var cel5 = NewRow.insertCell(4);
			var cel6 = NewRow.insertCell(5);
			var cel7 = NewRow.insertCell(6);
			var cel8 = NewRow.insertCell(7);
      		var cel9 = NewRow.insertCell(8);
			var cel10 = NewRow.insertCell(9);
			var cel11 = NewRow.insertCell(10);
	

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
      		cel5.innerHTML = list5[x];
			cel6.innerHTML = list6[x];
			cel7.innerHTML = list7[x];
			cel8.innerHTML = list8[x];
      		cel9.innerHTML = list9[x];
			cel10.innerHTML = list10[x];
			cel11.innerHTML = list11[x];
		

			n++;
			x++;
			
			
		}

		var checkTextarea = (e) => {
			const content = $("#ivalue").val().trim();
			
			//$('#my-button').prop('disabled', content === '');
			$('#btnSubmit').prop('disabled', content === '');

			document.getElementById("show1").classList.toggle("hidden");
		  };
		  
		  
		  $(document).on('keyup', '#ivalue', checkTextarea);

		
function val(){

	if((email.value=="")||(name.value=="")||(zip.value=="")&&(city.value=="")||(icountry.value=="")||(order.value=="")||(ivalue.value=="")||(sdate.value=="")||(ttime.value=="")||(invalidCheck.value=="False"))
			 {
				 alert("enter completely")
			 } 
			else{
				
				alert("saved successfully")
				
			}
}


		