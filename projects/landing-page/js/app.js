const navbar = document.querySelector("#navbar__list");

let sections = document.getElementsByTagName("section")
//convert sections nodeList to array
let sectionsArray = Array.from(sections)


/**
 * End Global Variables && Start Helper Functions
*/

//Adds "my-active-class" to li element on click, may need to use this for sections instead...
// const clickLi = (li) => {
//     li.addEventListener("click", function(event) {
//         console.log("clickLi successfully clicked")
//         //note this adds to the li element and not the section
//         li.classList.add("my-active-class")
        
//     })
// }

//need a fucntion that when LI is clicked, the corresponding SECTION has a class added

//Returns boolean if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//creates navbar anchor elements  
function createNav(sectionsArray) {
    for(let i=0; i < sectionsArray.length; i++) {
        let section = sectionsArray[i]
        const li = document.createElement('li');
        li.innerHTML+= `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navbar.appendChild(li);
    }
}
createNav(sectionsArray)

//If a section is in the viewport, adds "my-active-class"
//this was working, but it only ran once when the page loaded, want to add it to an onscroll. 
//Now it only returns "section not in view" when I checked, because I think none of the sections are in view when the page first loads

// function sectionsView(sections) {
//     for(let i=0; i <sections.length; i++) {
//         let section = sections[i]
//         //this was working, but it's only ran once when it starts...would have to do it on scroll...but now not workign for some reason..well it's returning the "not in view" console..
//         // isInViewport(section) ? section.classList.add("my-active-class") : section.classList.remove("my-active-class")
//         isInViewport(section) ? section.classList.add("my-active-class") : console.log("section not in view")
//     }
// }
// sectionsView(sections)


//get the li elements when clicked
let getLi = Array.from(document.querySelectorAll("li"))

function clickLi(arr) {
    for(let i=0; i < arr.length; i++) {
        let li = arr[i]
        li.addEventListener("click", function(event) {
            console.log("the li has been clicked")
        })
    }
}


//adds active-class to section element when clicking the corresponding "li"

function addSectionClass(sections) {
    for(let i=0; i < sections.length; i++) {
        let section = sections[i]
        clickLi(getLi) ? section.classList.add("my-active-class") : console.log("no class addded")
    }
}

addSectionClass(sections)

// const clickLi = (li) => {
//     li.addEventListener("click", function(event) {
//         console.log("clickLi successfully clicked")
//         //note this adds to the li element and not the section
//         li.classList.add("my-active-class")
        
//     })
// }


//This runs as soon as the app starts, not when scrolling
//is this not working because there is no "event" in the sectionsView(sections)?
// document.addEventListener("scroll", sectionsView(sections))





/**
 *Other attempts
*/

//do the above but for a singular element
// function sectionView(section) {
//     // isInViewport(section) ? console.log("aye section te puedo ver") : console.log("aye section no te puedo")
//     isInViewport(section) ? section.classList.add("my-active-class") : section.classList.remove("my-active-class")
// }

//Trying to work with lis instead of sections below...



//I think this is okay, but possibly add an "array from" ifneeded
// let getLi = document.querySelectorAll("li")

//gets all the li elements created, then makes them individual elements as they were in an array before
//then adds the click element to each li,so when click adds a class
//now we want that if section (or li) is in viewport, we add the class (for now it just logs something as it's a true/false thing)
// function liPlay(arr) {
//     for(let i=0; i < arr.length; i++) {
//         let li = arr[i]
//         // console.log("listas otra vex?")
//         // console.log(li)
//         clickLi(li)
//         sectionView(li)
//     }
// }

// liPlay(getLi)


// function applyActiveClass {
//     if(clickLi || isInViewport) {
//         //add the class to elelment clicked/in viewport
//     } else
//     //remove the class from all others
// }




//Now, if click or scroll into view, add my-active-class to that one (and remove it from others)

// function createLi(sectionsArray) {
//     for(let i=0; i < sectionsArray.length; i++) {
//         let section = sectionsArray[i]
//         console.log(section)
//         section.insertAdjacentHTML('beforebegin', "<li>");
//         section.insertAdjacentHTML('afterend', "</li>");
//         //returns your-active-class but not the data-nav
//         // let data = section.classList
//         // let data = section.className
//      // let data = section.querySelectorAll(".data-nav")
//         // console.log(data)
//     }
// }

// createLi(sectionsArray)


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


