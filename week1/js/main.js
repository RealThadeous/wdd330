function showCongratulations (theButtonClicked) {
    document.getElementById("result_display").innerHTML =
        "Congratulations, you did it!<p>You got the page to update!</p>."
        theButtonClicked.innerHTML = "Click Me Again"
}
function loadStory() {
    var storyName = document.getElementById("story_name").value
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_input").value = storyHTML 
}
function saveStory() {
    var storyName = document.getElementById("story_name").value
    var storyHTML = document.getElementById("story_input").value
    localStorage.setItem(storyName, storyHTML)
}
function displayStory() {
    var storyHTML = document.getElementById("story_input").value
    document.getElementById("story_display").innerHTML = storyHTML
}