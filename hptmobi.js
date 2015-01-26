

$("li").bind ("click", function (event)

{
	
  alert (this.innerHTML);

});


$(document).bind( "pagebeforechange", function( e, data ) {


$('#playlist').bind('pageshow', function () {
		alert('show event');
		$.get("http://localhost/index.php/abstracts/viewAbstract/2", function (data) {
			
		 var tim = '1:00 - 2:00';
		 var loca = 'Ampitheatre';
		 var obj = jQuery.parseJSON(data);
	
		
			 $("#playlist h1").html("<p style='white-space:wrap; color:white; font-size:small'>"+ tim+ "</p><p> "+ loca + "</p>"); 

		  $("#playlist").find('[data-role="content"]').html("<p>" + obj.ab_title + "</p> <p>" + obj.name + obj.credentials + "</p><p>" + obj.pnames + "</p> <p> "+ obj.synopsis + "</p>");
			
		});
	});

function lookup(itm) {	
		   $("#lg").click();
}

