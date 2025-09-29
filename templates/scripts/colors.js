const $ = (id) => document.getElementById(id)

switch (window.location.pathname.split("/")[1] ?? "")
{
    case "": {
        $("navbar-header").classList.add("header-bg-custom1")
        $("nav-item-button1").classList = "nav-link active btn btn-light text-dark fw-bold px-3 py-1 rounded-pill"
        $("bottom-footer").classList.add("footer-bg-custom1")
        
        break
    }

    case "about-us": {
        $("navbar-header").classList.add("header-bg-custom2")
        $("nav-item-button2").classList = "nav-link active btn btn-light text-dark fw-bold px-3 py-1 rounded-pill"
        $("bottom-footer").classList.add("footer-bg-custom2")
        
        break
    }

    case "event": {
        $("navbar-header").classList.add("header-bg-custom3")
        $("nav-item-button3").classList = "nav-link active btn btn-light text-dark fw-bold px-3 py-1 rounded-pill"
        $("bottom-footer").classList.add("footer-bg-custom3")
        
        break
    }

    case "pacil": {
        $("navbar-header").classList.add("header-bg-custom4")
        $("nav-item-button4").classList = "nav-link active btn btn-light text-dark fw-bold px-3 py-1 rounded-pill"
        $("bottom-footer").classList.add("footer-bg-custom4")
        
        break
    }
}
// nav-link active btn btn-light text-dark fw-bold px-3 py-1 rounded-pill
