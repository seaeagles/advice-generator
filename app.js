// Variable declarations
const adviceID = document.querySelector(".advice-tag");
const adviceQuote = document.querySelector(".advice-quote");
const btn = document.querySelector("button");

// API details and options
const API_URL = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=de';

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'd92cd91f47mshf3f0e794d03ee44p16dacajsn6bc7e2a1ee61',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

// Advice generation functions
async function getAdvice() {
    try {
        const response = await fetch(API_URL, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function updateAdvice(advice) {
    adviceID.textContent = `Advice # ${advice.id}`;
    adviceQuote.textContent = `"${advice.content}" - ${advice.originator.name}`;
}

// Run when button clicked
btn.addEventListener("click", async () => {
    const advice = await getAdvice();
    updateAdvice(advice);
});