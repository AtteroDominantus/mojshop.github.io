  const dropdownCategoriesBtns = document.querySelectorAll('.dropdown-categories-btn');
  const dropdownMenuSubcategoriesMainCont =  document.querySelectorAll('.dropdown-sub-categories-main-cont');

  const tabBtnMenu = document.querySelector(".dropdown-menu-categories")
  const userAccountDiv = document.querySelector(".user-account-section-dropdown")
  const openHambiMenu = document.querySelector(".hamburger-cont");
  const closeHambiMenu = document.querySelector(".hambi-cross-div");
  const originalUserAccountContent = userAccountDiv.innerHTML;
  const secondCategories = document.querySelectorAll(".dropdown-sub-categories-main-cont");


  const dropdownSubSubcategorys = document.querySelectorAll(".dropdownp-sub-sub");

 

openHambiMenu.addEventListener("click", () => {
    tabBtnMenu.classList.add("show")
   
});
closeHambiMenu.addEventListener("click", () => {
  tabBtnMenu.classList.remove("show");
 
});

dropdownCategoriesBtns.forEach((li, index) => {
  li.addEventListener('click', () => {
      secondCategories.forEach((secondCategory, liIndex) => {
          if (index === liIndex) {
              secondCategory.classList.toggle("show");
              userAccountDiv.textContent =" < " + li.textContent;
              userAccountDiv.classList.add("backbtnItems");
          }

          userAccountDiv.addEventListener("click", () => {
                secondCategory.classList.remove("show");
                userAccountDiv.innerHTML = originalUserAccountContent;

            });
      });

      closeHambiMenu.addEventListener("click", () => {
          secondCategories.forEach(secondCategory => {
              secondCategory.classList.remove("show");
              userAccountDiv.innerHTML = originalUserAccountContent;
          });
      });
  });
});
  

    
    
 
 