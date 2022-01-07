function make_get_request(url, callback) {
	var xhr = new XMLHttpRequest()	
	xhr.onreadystatechange = function() {
		if (this.readyState != 4)
			return
		callback({responseText: xhr.responseText, status: xhr.status})
	}
	xhr.onerror = function() {
		callback({responseText: undefined, status: xhr.status})
	}
    xhr.open("GET", url, true)
	xhr.send()
}
