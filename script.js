/*-------Navbar-----*/
const navButton = document.querySelector(".nav-button");
navButton.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    if(window.innerWidth < 850){
        document.querySelector(".header").classList.toggle("active");
    }
}

/*------Active Section------*/
document.addEventListener("click", (element) =>{
    if(element.target.classList.contains("link-item") && element.target.hash !== ""){
        toggleNavbar();
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(element.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
        },100);
        }
});
/* ------Button Items----*/
const buttonsContainer = document.querySelector(".about-items"),
aboutSection = document.querySelector(".about-me");

buttonsContainer.addEventListener("click", (element) =>{
    if(element.target.classList.contains("button-item") && !element.target.classList.contains(".active") ){
        buttonsContainer.querySelector(".active").classList.remove("active");
        element.target.classList.add("active");
        const target = element.target.getAttribute("data-target");
        aboutSection.querySelector(".button-information.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

const navLinks = document.querySelector(".nav-links");

navLinks.addEventListener("click", (element) =>{
    if(element.target.classList.contains("link-item") && !element.target.classList.contains(".active")){
        navLinks.querySelector(".active").classList.remove("active");
        element.target.classList.add("active");
    }
});

/*--------Portfolio Item Popup-----------*/
document.addEventListener("click", (element) =>{
    if(element.target.classList.contains("view-project-button")){
        portfolioItemChange();
        projectItemDetails(element.target.parentElement);
    }
})
function portfolioItemChange(){
    document.querySelector(".project-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".popup-close").addEventListener("click",portfolioItemChange);

document.addEventListener("click", (element) =>{
    if(element.target.classList.contains("popup-inner")){
        portfolioItemChange()
    }
})
function projectItemDetails(projectItem){
    document.querySelector(".popup-mini img").src =
    projectItem.querySelector(".project-item-mini img").src;

    document.querySelector(".popup-header h3").innerHTML =
    projectItem.querySelector(".project-item-title").innerHTML;

    document.querySelector(".popup-body").innerHTML =  
    projectItem.querySelector(".project-item-information").innerHTML; 
}