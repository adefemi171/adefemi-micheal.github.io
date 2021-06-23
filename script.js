let activeLink = "homeLink"

function handleRoute(id){
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    toggleSideBar()
}

function showStack(id){
    document.getElementById(id).classList.add("show")
}

function closeStack(id){
    document.getElementById(id).classList.remove("show")
}

function handleScroll(){
    let sidebarLinks = ["home", "about", "experience", "projects", "skills", "education", "blog"]
    // isScrolledIntoView("projects")
    for(let i = 0; i<sidebarLinks.length; i++){
        if(activeLink === sidebarLinks[i]+"Link")continue;
        if(isScrolledIntoView(sidebarLinks[i])){
            setActiveSideLink(sidebarLinks[i]+"Link")
            break;
        }
    }
}

function setActiveSideLink(id){
    if(id === "homeLink"){
        if(activeLink === id)return;
        activeLink = id;
        cleanSideLinks()
        return;
    }

    if(activeLink === id) return;

    cleanSideLinks()
    
    document.getElementById(id).classList.add("active")
    activeLink = id;
}

function cleanSideLinks(){
    let sideLinks = document.getElementsByClassName("side-items")

    for (let i=0; i<sideLinks.length; i++){
        if(sideLinks[i].classList.contains("active")){
            sideLinks[i].classList.remove("active")
        }
    } 
}

function isScrolledIntoView(id) {
    let el = document.getElementById(id)
    const { top, bottom } = el.getBoundingClientRect()
    let height = window.innerHeight / 3.5;
    let status = top <= height && bottom >= height
    return status
}

function toggleSideBar(){
    let sideBar = document.getElementById("sideBar");

    if(sideBar.classList.contains("open")){
        sideBar.classList.remove("open")
    }
    else{
        sideBar.classList.add("open")
    }
}
