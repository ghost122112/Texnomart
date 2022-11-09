function openCity(evt, blockOrder) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("main__wrapper--section-3--content-table--tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("main__wrapper--section-3--content--tab--tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(blockOrder).style.display = "flex";
    evt.currentTarget.className += " active";
}