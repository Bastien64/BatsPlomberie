// Charger la navbar
var navbarContainer = document.getElementById("navbarbox");
var navbarXhr = new XMLHttpRequest();
navbarXhr.open("GET", "../htmlelement/navbar.html", true);
navbarXhr.onreadystatechange = function () {
    if (navbarXhr.readyState === 4 && navbarXhr.status === 200) {
        navbarContainer.innerHTML = navbarXhr.responseText;
    }
};
navbarXhr.send();

// Charger le footer
var footerContainer = document.getElementById("footerbox");
var footerXhr = new XMLHttpRequest();
footerXhr.open("GET", "../htmlelement/footer.html", true);
footerXhr.onreadystatechange = function () {
    if (footerXhr.readyState === 4 && footerXhr.status === 200) {
        footerContainer.innerHTML = footerXhr.responseText;
    }
};
footerXhr.send();

// Charger le divbleutop
var divbleutopContainer = document.getElementById("divbleutopbox");
var divbleutopXhr = new XMLHttpRequest();
divbleutopXhr.open("GET", "../htmlelement/divbleutop.html", true);
divbleutopXhr.onreadystatechange = function () {
    if (divbleutopXhr.readyState === 4 && divbleutopXhr.status === 200) {
        divbleutopContainer.innerHTML = divbleutopXhr.responseText;
    }
};
divbleutopXhr.send();


// Charger le contact
var contactContainer = document.getElementById("contactbox");
var contactXhr = new XMLHttpRequest();
contactXhr.open("GET", "../htmlelement/contact.html", true);
contactXhr.onreadystatechange = function () {
    if (contactXhr.readyState === 4 && contactXhr.status === 200) {
        contactContainer.innerHTML = contactXhr.responseText;
    }
};
contactXhr.send();