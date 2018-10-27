(function(window){
	console.log(data);
	var random = Math.floor(Math.random() * 48);
	document.getElementById('id').innerHTML = data[random].name;
	document.getElementById('law-title').innerHTML = data[random].title;
	document.getElementById('law-desc').innerHTML = data[random].desc;
	
	window.fbAsyncInit = function () {
		FB.init({
			appId      : '326214488180876', // App ID
			status     : false, 
			version:  'v2.0',
			cookie     : true, 
			xfbml      : false  // parse XFBML
		});
	}
	document.getElementById('fb-share-dialog').onclick = function() {
		var defaultUrl = "https://chrome.google.com/webstore/detail/random-48-laws-of-power/ldmplljofmghhnjapmbabolnigaeimed";
		var fullQuote = getCurrentQuote();
		FB.ui({
			method: 'share',
			display: 'popup',
			href: defaultUrl,
			quote: fullQuote,
		}, function(response){
			console.log(response);
		});
	}

	document.getElementById('twitter-share-dialog').onclick = function() {
		var defaultUrl = "https://chrome.google.com/webstore/detail/random-48-laws-of-power/ldmplljofmghhnjapmbabolnigaeimed";
		var fullQuote = getCurrentQuote('twitter');
		var twitterRedirectUrl = buildTwitterUrlParts(fullQuote, defaultUrl);
		window.open(twitterRedirectUrl, '_blank');
	}
	
	function getCurrentQuote(type){
		var type = type || 'facebook'
		document.getElementById('law-desc')
		var quoteId = " Law " + document.getElementById('id').textContent;
		var lawTitle = " Quote: " + document.getElementById('law-title').textContent;
		var lawDescription = "Description: " + document.getElementById('law-desc').textContent;
		var fullQuote =  quoteId + "\n" + lawTitle ;
		// Since twitter only allows 140 Characters Max, it doesn't sense to
		// add the description to it.
		if (type !== 'twitter') {
			fullQuote = fullQuote + "\n" + lawDescription;
		}
		return fullQuote;
	}

	function buildTwitterUrlParts(text, url){
		var baseUrl = "https://twitter.com/intent/tweet?"
		var textParam = "text="+text;
		var urlParam = "url="+url;
		return baseUrl+textParam+"&"+urlParam;
	}
	
})(window)

