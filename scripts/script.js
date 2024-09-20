// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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

//PART 2 ADDING ADDITIONAL HTML AND CSS