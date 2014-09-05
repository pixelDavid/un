// JavaScript Document

if($("#pmmVehicleSearch").length > 0)
{
	
	
	var element = document.createElement("select");


	$("#pane-makes>.makes>li>a>span:nth-child(2)").each(function(){
		console.log($(this).text());
		
			$(element).append("<option>"+$(this).text()+"</option>")
		});
	
	$("#srchFilter").append($(element));
	
	//$("#srchFilter").append();
	
	
	var elementYear = document.createElement("input");

	
	$("#pane-years>.years>li>a>span:nth-child(2)").each(function(){
		console.log($(this).text());
		
			$(elementYear).append("<option>"+$(this).text()+"</option>")
		});
	
	$("#srchFilter").append($(elementYear));
	
	
	var elementYear = document.createElement("select");

	
	$("#pane-years>.years>li>a>span:nth-child(2)").each(function(){		
			$(elementYear).append("<option>"+$(this).text()+"</option>")
		});
	
	
	$("#srchFilter").append($(elementYear));
}