// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "f9bbfaf7c602444ab359c839a798d311"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	
	
console.log(result);
console.log(JSON.stringify(result.status));
console.log(JSON.stringify(result.copyright));
console.log(JSON.stringify(result.last_updated));
console.log(JSON.stringify(result.num_results));
  
 $('#copyright').text(result.copyright);
 
 console.log(JSON.stringify(result.results[0].title));
   
 $('#maintitle').text(result.results[0].title);
 $('#maindate').text(result.results[0].created_date);
 $('#mainauthor').text(result.results[0].byline);
 
// if(something){
	 
 //}
 
 //if(something){
	 
 //}
 
 //if(something){
	 
 //}else{
	 
 //}
$('#wrapper').empty();



 
for(i = 1; i<result.results.length; i++) {
	
	
console.log(JSON.stringify(result.results[i].byline));

var template = '<div class="article">';
template += '<a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a>'
template += '<h2>' + result.results[i].title + '</h2>';
template += '<p class="author">' + result.results[i].byline + '</p>';
template += '<p class="date">' + result.results[i].created_data + '</p>';
template += '</div>';

$('#wrapper').append(template);


}
  
}).fail(function(err) {
  throw err;
});
