document.addEventListener("scroll", function() {
    let items = document.querySelectorAll(".item");
    let triggerBottom = window.innerHeight * 0.9;

    items.forEach(item => {
        let itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add("show");
        }
    });
});