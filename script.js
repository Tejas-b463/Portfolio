function darkmode() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    var theme;
    if (SetTheme.classList.contains("dark-mode")) {
        console.log("Dark mode");
        theme = "DARK";
    } else {
        console.log("Light mode");
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    // console.log(GetTheme);
    if (GetTheme === "DARK") {
        document.body.classList = "dark-mode";


    } else {
        document.body.classList = "";
    }
}, 5);


const btn = document.getElementById('mybtn');

// ✅ Toggle button text on click
btn.addEventListener('click', function handleClick() {
    const initialText = 'Dark';

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = 'Light';
    } else {
        btn.textContent = initialText;
    }
});