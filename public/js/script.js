let $acortar = document.querySelector("#button-addon2"),    // Short button
    $copy = document.querySelector("#copyLink");        // copy link button

// Short button
$acortar.addEventListener("click", (e) => { 
    // if link input is blank... nothing happens
    if(document.querySelector("#input-enlace").value === "") e.preventDefault();
    // if link input is not blank...
    let $spinner = document.querySelector("#spinner");
    $spinner.classList.remove("visually-hidden");   // show spinner
});

// The first time when somebody enter to the page, this components doesn't exist so this code is for not get any error
try{
    // Copy link button
    $copy.addEventListener("click", (e) => {
        let $copyText = document.getElementById("resultado");
        navigator.clipboard.writeText($copyText.innerHTML);
        document.getElementById("myTooltip").innerHTML = "¡Copiado!";
    });
    // When curosr leaves the copy button, the tooltip disappears and change
    $copy.addEventListener("mouseout", () => { 
        document.getElementById("myTooltip").innerHTML = "Copiar enlace";
});
}catch(e){
    // Nothing to do
}