const sidebar = document.querySelector('.sidebar');
const sidebarButton = document.querySelector('.menuBtn');

// pc
/* function showSidebar(){
    sidebar.style.display = 'flex';
  }
function hideSidebar(){
    sidebar.style.display = 'none';
  } */
// mobile
// - open
function toggleSidebar(){
    sidebar.style.display = 'flex';
}
/* const openSidebar = document.querySelector('.menuBtn'); */
sidebarButton.addEventListener('touchstart', function (event) {
    event.preventDefault;
    toggleSidebar();
});
// - close
function hideMobileMenu(){
    sidebar.style.display = 'none';
}
const closeSidebar = document.querySelector('.hideMenu');
closeSidebar.addEventListener('touchstart', function (event){
   event.preventDefault;
   hideMobileMenu();
})

// send email

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tica.ante19@gmail.com",
        Password : "6B48D1F22197EC2BD794E51B4F3CD3C18E18",
        To : 'tica.ante003@gmail.com',
        From : document.querySelector('.subInput').value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

// search 

function searchArticles() {
    const searchInput = document.querySelector('.searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.contUl .item');

    articles.forEach(article => {
        const title = article.querySelector('.headline').textContent.toLowerCase();

        if (title.includes(searchInput)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

document.querySelector('.searchInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        searchArticles();
    }
});


// show dropdown
function showDropdown() {
   const dropDown = document.querySelector('.dropDown');
   dropDown.style.display = 'flex';
  }

// from to

 const blogList = document.querySelector('.contUl');
      // Get the buttons
      const newestButton = document.querySelector('.fromOld');
      const oldestButton = document.querySelector('.fromNew');

      // Sort newest to oldest when the "Newest to Oldest" button is clicked
      newestButton.addEventListener('click', () => {
          sortBlogCards(true);
          console.log('oldest-proslo');
      });

      // Sort oldest to newest when the "Oldest to Newest" button is clicked
      oldestButton.addEventListener('click', () => {
          sortBlogCards(false);
          console.log('newest-proslo');
      });

      // Function to sort blog cards
      function sortBlogCards(newestFirst) {
          // Get all blog cards
          const cards = Array.from(blogList.querySelectorAll('.item'));

          // Sort the cards based on the date
          cards.sort((cardA, cardB) => {
              const dateA = getDateValue(cardA.querySelector('.date').textContent);
              const dateB = getDateValue(cardB.querySelector('.date').textContent);
              if (newestFirst) {
                  return dateB - dateA; // Sort in descending order (newest to oldest)
              } else {
                  return dateA - dateB; // Sort in ascending order (oldest to newest)
              }
          });

          // Re-append sorted cards to the blog list
          cards.forEach(card => {
              blogList.appendChild(card);
              console.log('apendano');

          });
      }

      // Function to convert date string to JavaScript Date object
      function getDateValue(dateString) {
          const [day, month, year] = dateString.split('/');
          return new Date(`${year}-${month}-${day}`);
      }



// onclick hide sidebar

/*  // Get the target div element
 const targetDiv = document.querySelector('.dropDown');

 // Attach a click event listener to the document
 document.addEventListener('click', function(event) {
     // Check if the clicked element is the target div or its descendant
     if (event.target === targetDiv || targetDiv.contains(event.target)) {
         // Click occurred inside the target div or its descendant
         targetDiv.style.visibility = 'vissible';
     } else {
         targetDiv.style.visibility = 'hidden';
     }
 });

 */


/* // hide sidebar
document.body.addEventListener('click', function(event) {
     // Button/icon that toggles sidebar
    const targetElement = event.target; // Element that was clicked

    // Check if the clicked element is not part of the sidebar and is not the sidebar toggle button/icon
    if (!sidebar.contains(targetElement) && targetElement !== sidebarButton) {
        // If the clicked element is not part of the sidebar and not the sidebar toggle button/icon, hide the sidebar
        sidebar.style.display = 'none';
    }
});

sidebarButton.addEventListener('click', function(event) {
    sidebar.style.display = 'flex';
    event.stopPropagation(); // Prevent body click event listener from triggering
});
 /*/