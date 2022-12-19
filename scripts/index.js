function openCity(evt, blockOrder) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("main__wrapper--section-3--content-table--tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("main__wrapper--section-3--content--tab--tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(blockOrder).style.display = "flex";
    evt.currentTarget.className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";  
  dots[slideIndex - 1].className += " active";
}

const cost_range_function = () => {
  let x = document.getElementById("c_range").ariaValueMax;
  document.getElementById("")
}


if ('WebSocket' in window) {
	(function () {
		function refreshCSS() {
			var sheets = [].slice.call(document.getElementsByTagName("link"));
			var head = document.getElementsByTagName("head")[0];
			for (var i = 0; i < sheets.length; ++i) {
				var elem = sheets[i];
				var parent = elem.parentElement || head;
				parent.removeChild(elem);
				var rel = elem.rel;
				if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
					var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
					elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
				}
				parent.appendChild(elem);
			}
		}
		var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
		var address = protocol + window.location.host + window.location.pathname + '/ws';
		var socket = new WebSocket(address);
		socket.onmessage = function (msg) {
			if (msg.data == 'reload') window.location.reload();
			else if (msg.data == 'refreshcss') refreshCSS();
		};
		if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
			console.log('Live reload enabled.');
			sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
		}
	})();
}
else {
	console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}

