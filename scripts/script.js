// Menu data structure
  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//-------------PART 1 GETTING STARTED------------
    // Select and cache the <main> element in a variable named mainEl.
    let mainEl = document.querySelector(`main`);
    console.log(mainEl);
    // Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
    // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
    mainEl.style.backgroundColor = 'var(--main-bg)';
    // Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
    mainEl.innerHTML = `<h1>DOM MANIPULATION</h1>`;
    // Add a class of flex-ctr to mainEl.
    // Hint: Use the Element.classList API.
    mainEl.classList.add(`flex-ctr`);
    // Next, create a blank menu bar that we can use to later add some interactivity to the page:
    // Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
    let topMenuEl = document.getElementById(`top-menu`);
    // Set the height of the topMenuEl element to be 100%.
    topMenuEl.style.height = `100%`;
    // Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
    topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
    // Add a class of flex-around to topMenuEl.
    topMenuEl.classList.add(`flex-around`);
    // Iterate over the entire menuLinks array and for each "link" object:
    for (obj of menuLinks){
        let link = document.createElement(`a`);// Create an <a> element.
        link.setAttribute(`href`,obj.href); // On the new element, add an href attribute with its value set to the href property of the "link" object.
        link.textContent= obj.text; // Set the new element's content to the value of the text property of the "link" object.
        topMenuEl.appendChild(link); // Append the new element to the topMenuEl element.
    }

//PART 2 ADDED ADDITIONAL HTML AND CSS 

//------------PART 3 CREATING THE SUBMENU------------
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById(`sub-menu`);
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height=`100%`;
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor=`var(--sub-menu-bg)`;
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add(`flex-around`);

// Change the position of the submenu to temporarily hide it.
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position=`absolute`;
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top=`0`;

//----------PART 4 ADDING MENU INTERACTION---------------
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.getElementsByTagName(`a`);
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener(`click`, handleClick);


function handleClick(event){
// The first line of code of the event listener function should call the event object's preventDefault() method.
    event.preventDefault();
// The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (event.target.tagName !== `A`){return}
// Log the content of the <a> to verify the handler is working.
    console.log(event.target.textContent);
    
// Now that we have references to each of these links, and a registered event listener, add a toggled "active" state to each menu item.
    for (let link of topMenuLinks){
        if (link !== event.target){
            link.classList.remove(`active`); // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not. 
        } else {
            event.target.classList.toggle('active'); //The event listener should add the active class to the <a> element that was clicked and remove it if it was already active.

            if (event.target.classList.contains('active')) {
                for (let obj of menuLinks){
                    if (event.target.textContent == obj.text){
                        if (obj.subLinks){ //If the clicked <a> element's "link" object within menuLinks has a subLinks property...
                            buildSubmenu(obj) //helper functions to build sublinks
                            subMenuEl.style.top = (`100%`) //show submenu
                        } else
                        {
                            subMenuEl.style.top = (`0`)
                            mainEl.innerHTML=`<h1>${event.target.textContent.toUpperCase()}</h1>` //If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
                        }               
                    }
                    }   
            } else { //hide submenu if element is clicked again
                subMenuEl.style.top = (`0`)
            }
            
        }      
    }
}        

    

//------------Part 5: Adding Submenu Interaction---------------

// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
function buildSubmenu(obj) {
    subMenuEl.innerHTML = ``; // Clear the current contents of subMenuEl.
    obj.subLinks.forEach(sublink => {
        let link = document.createElement(`a`);// Create an <a> element.
        link.setAttribute(`href`,sublink.href); // Add an href attribute to the <a>.
        link.textContent= sublink.text; // Set the new element's content to the value of the text property of the "link" object.
        subMenuEl.appendChild(link); // Append the new element to the subMenuEl element.
    });
}


// The menu is almost complete! Now, we need to add interactions to the submenu items themselves:
// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener(`click`, handlesubClick);



// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.

function handlesubClick(event){
    // The first line of code of the event listener function should call the event object's preventDefault() method.
        event.preventDefault();
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
        if (event.target.tagName !== `A`){return}
    // Log the content of the <a> to verify the handler is working.
        console.log(event.target.textContent);
    // Next, the event listener should set the CSS top property of subMenuEl to 0.    
        subMenuEl.style.top = `0`;
        for (let link of topMenuLinks){
            link.classList.remove(`active`); // Remove the active class from each <a> element in topMenuLinks. 
        }
        mainEl.innerHTML=`<h1>${event.target.textContent.toUpperCase()}</h1>` //Update the contents of mainEl to the contents of the <a> element clicked within subMenuEl.          
}
