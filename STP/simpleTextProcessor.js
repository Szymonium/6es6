const processText = (text, { uppercase = false, reverse = false, removeSpecialCharacters = false} = {}) => {
    console.log(text);
    text = uppercase ? text.toUpperCase() : text;
    text = reverse ? [...text].reverse().join("") : text;
    text = removeSpecialCharacters ? text.replace(/[^a-zA-Z0-9 ]/g, "") : text;

    console.log(`Processed text: ${text}`);
}

processText("sk_i$bi%di", {uppercase: true, reverse: true, removeSpecialCharacters: true});