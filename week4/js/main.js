const form = document.forms['search'];
const [input,button] = form.elements;
const input = form['searchInput']
form.addEventListener ('submit', search, false);
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}