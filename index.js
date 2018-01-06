strimg ="#" 
try
{


	url = "https://api.unsplash.com/photos/random/?client_id=f8c37e9ef128f09611217b491dcb047b5237346a86df3b89c347f1a6722f03da"
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, false);
	xmlHttp.send(null);

	resp = xmlHttp.responseText;

	strimg = JSON.parse(resp)["urls"]["regular"]

	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage = 'url(' + strimg + ')';

}
catch(e)
{
	console.log("image load failure")
}

var random = Math.floor(Math.random() * 78);

document.getElementById('id').innerHTML = data[random].name;
document.getElementById('law-title').innerHTML = data[random].title;
document.getElementById('law-desc').innerHTML = data[random].desc;

