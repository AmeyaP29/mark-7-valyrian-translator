let textField = document.querySelector("#input-area");

let serverURL = "https://api.funtranslations.com/translate/valyrian.json";

const translateButton = document.querySelector("#btn-translate");

translateButton.addEventListener("click", translate);

let outputArea = document.querySelector("#output-div");

// outputArea.innerText="For style testing purposes";

function createTranslationURL(input) {

return (serverURL + "?text=" + input);

}

function translate() {

    let inputText = textField.value;

    fetch(createTranslationURL(inputText))
        .then(response => response.json()) //the output from the server is a readable stream, hence converting it to JSON
        .then(json => {

            let translatedText = json.contents.translated; //extracting only the translated text from the server's json response
            outputArea.innerText = translatedText; //outputting the translated text in a div


        })
        .catch(errorHandler)

}

function errorHandler(error) {

    console.log(error);
    alert("The API that translates the text on this website is rate limited to 5 requests/hour. You have sent too many. Please wait an hour before trying again");

}