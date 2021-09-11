// FRONT END FILE TO INTERACT WITH THE DOM

const btn = document.querySelector('#btn')
const container = document.querySelector('section');

btn.addEventListener('click', (e)=> {
	let word = document.querySelector('#myWord').value;
	
	fetch(`https://nlp-translation.p.rapidapi.com/v1/translate?text=${word}&to=fr&from=en`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "6a43e896eamsh2154aa994cf1debp18ea95jsn0d253dbf0d83",
			"x-rapidapi-host": "nlp-translation.p.rapidapi.com"
		}
	})
	.then((response) => response.json())
	.then((data) => data.translated_text)
	.then((date)=> {
	  console.log(date.fr)
	  
	  container.insertAdjacentHTML('afterend', `
	  <section class="row">
	  <div class="left"><span>${word}</span></div>
	  <div class="right"><span>${date.fr}</span></div>
	  <div class="ajout"><span class="material-icons">add</span></div>
	  
	</section>`)
	
	const addi = document.querySelector('.ajout');
	addi.addEventListener('click', (e)=> {
		alert('ziaar')
		addi.setAttribute('class', 'clicked');
	})
})

.catch((error) => {
	console.error("Error:", error);
})


})

