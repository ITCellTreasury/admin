
      function validate_BRN(secondInp)
	{
	 var val = parseFloat($('#secondInp').val());
   if (isNaN(val) || (val === 0))
    {
    swal("Enter a valid BRN!", "Please provide atleast last 4 BRN digits!", "warning"); 
    document.getElementById("secondInp").value = '';
    $("#secondInp").focus();
    }
		
	}
  function validate_DDO_Code(firstInp)
	{
	 var val = parseFloat($('#firstInp').val());
   if (isNaN(val) || (val === 0))
    {
    swal("Enter a valid DDO Code!", "Please provide 10 digit DDO Code!", "warning"); 
    document.getElementById("firstInp").value = '';
    $("#firstInp").focus();
    }
		
	}
      function validate_amount(fifthInp)
	{
	 if(!fifthInp.match(/^[1-9 ]([0-9]{0,100})+$/))
            {
          swal("Warning!", "Enter a valid Amount!", "warning");      
			  
       document.getElementById("fifthInp").value = '';
			   $("#fifthInp").focus();
			   // $("#amt_edt").focus();
			}
	}
 function str_to_upper(id, value) {
        if (value != '' && typeof value != 'undefined') {
            $('#' + id).val(value.toUpperCase());
        }
    }
 function GetFruit(color) 
    {
    
    google.script.run.withSuccessHandler(function(ar) 
    {

    console.log(ar);
    
    fruit.length = 0;
    
    let option = document.createElement("option");
    option.value = "";
    option.text = "";
    fruit.appendChild(option);
    
    ar.forEach(function(item, index) 
    {    
      let option = document.createElement("option");
      option.value = item;
      option.text = item;
      fruit.appendChild(option);    
    });
    
    }).getFruits(color);
    
    };
  function checkLength(el) {
  if (el.value.length != 10) {
    document.getElementById("add_button").disabled = true;
   // alert("")
   swal("Invalid DDO Code!", "DDO Code must be exactly 10 digits!", "warning");   
      $("#firstInp").focus();
  } 
  else 
  { 
    document.getElementById("add_button").disabled = false;
}
}
function getlToken(){
  
}
function callbackToken(showToken) {
document.getElementById("divt").innerHTML=showToken;

}
function go() {
  google.script.run.withSuccessHandler(callback).writeSomething();
  
}
     function AddRow()
    {
      
      
      
      //document.getElementById("add_button").disabled = true;
      var firstInp = document.getElementById("firstInp").value;
      var secondInp = document.getElementById("secondInp").value;
      var thirdInp = document.getElementById("thirdInp").value;
      var fruit = document.getElementById("fruit").value;
      var fifthInp = document.getElementById("fifthInp").value;
      var sixthInp = document.getElementById("sixthInp").value;
      var seventhInp = document.getElementById("seventhInp").value;
      if(firstInp != '' && secondInp != '' && thirdInp != '' && fruit != '' && fifthInp != '' && sixthInp != '' && seventhInp != '')
      {
       
        google.script.run.withSuccessHandler(function(return_string) 
        {
         // SearchRecords();
         //ClearRecord(); 
         document.getElementById("secondInp").value = '';
         document.getElementById("fifthInp").value = '';
         document.getElementById("seventhInp").value = '***';
         document.getElementById("add_button").disabled = false;
         document.getElementById("display_error_box").style="display:none";
        }).AddRecord(firstInp, secondInp, thirdInp, fruit, fifthInp, sixthInp, seventhInp);  
     
       
 google.script.run.withSuccessHandler(callbackToken).get_Token_no();
 
  Swal.fire({
  title: "Bill Details Added Successfully!",
  
  icon: "success",
  html:
    '<table width="100%" style="font-family:arial;font-weight: bold;" align="center">' +
    '<tr align="center">' +
    '<td width="40%">' +
    '<div align="center" style="color: #d63030;font-size: 1.3em;"id="token">Token No.</div> ' +
    '</td>' +
    '<td width="5%">' +
    '<div align="center">:</div> ' +
    '</td>' +
    '<td width="50%">' +
    '<div id="divt"style="text-align: justify;font-size: 1.3em;font-weight: bold; color: #01274c;"></div> ' +
    '</td>' +
    '</tr>' +
    '</table>'
});
//google.script.run.withSuccessHandler(callback).writeSomething();
      }
      else
      {
          swal("Error", "Please provide all details!", "error");
        
        document.getElementById("display_error_box").style="display:block";
        document.getElementById("display_error").innerHTML = "Please Enter All Information!";
        //document.getElementById("add_button").disabled = false;
      }
      google.script.run.withSuccessHandler(callback).writeSomething();
    }
    
    function ClearRecord()
    {
        document.getElementById("firstInp").value = '';
        document.getElementById("secondInp").value = '';
        document.getElementById("thirdInp").value = '';
        document.getElementById("fruit").value = '';
        document.getElementById("fifthInp").value = '';
        document.getElementById("sixthInp").value = '***';
        document.getElementById("seventhInp").value = '***';
        document.getElementById("display_error").innerHTML = "";
        document.getElementById("display_error_box").style="display:none";
    }
    
   
 
    function addList() {
      google.script.run
        .withFailureHandler(onFailure)
        .withSuccessHandler(addListValues)
        .getList();
    }
    function addListValues(values) {
      var list = document.getElementById('dropdownList');   
        for (var i = 0; i < values.length; i++) {
          list.appendChild('<option value="' + values[i] + '" />');
        }
    }
    function onFailure(err) {
      alert('There was an error!' + err.message);
    }
   