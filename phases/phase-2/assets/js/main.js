const API_KEY = "FI3ha98VUaTLy3YUAclQuA==t2gCQysJbh9dhz5i";

function selectOne(clicked){
    const api1 = document.getElementById('api1');
    const api2 = document.getElementById('api2');

    if (clicked === api1 && api1.checked){
        api2.checked = false;
    }
    else if (clicked === api2 && api2.checked){
        api1.checked = false;
    }
}

function getAPIData(event){
    event.preventDefault();

    const api1 = document.getElementById('api1');
    const api2 = document.getElementById('api2');
    const userInput = document.getElementById('userInput');
    const responseDiv = document.getElementById('response');

    responseDiv.innerHTML = "Loading...";

    // --- Jokes ---
    if (api1.checked) {
        fetch('https://api.api-ninjas.com/v1/jokes', {
            headers: { "X-Api-Key": API_KEY },
        })
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    responseDiv.textContent = data[0].joke;
                } else {
                    responseDiv.textContent = 'No joke found!';
                }
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
                responseDiv.textContent = 'Failed to fetch joke.';
            });
    }

    // --- Horoscopes ---
    else if (api2.checked) {
        const sign = userInput.value.trim().toLowerCase();
        if (!sign) {
            responseDiv.textContent = "You need to enter a zodiac sign.";
            return;
        }

        fetch(`https://api.api-ninjas.com/v1/horoscope?zodiac=${sign}`, {
            headers: { "X-Api-Key": API_KEY },
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.horoscope) {
                    responseDiv.textContent = data.horoscope;
                } else {
                    responseDiv.textContent = 'No horoscope found!';
                }
            })
            .catch(error => {
                console.error('Error fetching horoscope:', error);
                responseDiv.textContent = 'Failed to fetch horoscope.';
            });
    } else {
        responseDiv.textContent = "Please select an API first.";
    }
}