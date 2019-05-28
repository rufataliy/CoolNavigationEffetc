
var menuItem = document.querySelectorAll(".item")
var menu = document.getElementById("menu")

menu.addEventListener("click", start);

// ADD CLASSES

function active () {
  for(var i = 0; i <menuItem.length;i++) {
    menuItem[i].classList.toggle("active");
  };
};

function hidden () {
  if (activeCheck() === true) {
    for(var i = 0; i <menuItem.length;i++) {
      menuItem[i].classList.toggle("hidden");
    }
  };
};

// CHECK CLASSES
 function activeCheck () {
   for (var i = 0; i < menuItem.length; i++) {
     if (menuItem[i].classList.contains("active")) {
       return true
     }
     else {
       return false
     }
  };
};

function hiddenCheck () {
  for (var i = 0; i < menuItem.length; i++) {
    if (menuItem[i].classList.contains("hidden")) {
      return true
    }
    else {
      return false
    }
 };
};

// DISPLAY NONE DELAY function

// function delay () {
//   for(var i = 0; i <menuItem.length;i++) {
//     menuItem[i].style.display = "none";
//   };
// }

function displayNone () {
  setTimeout(function () {
    for(var i = 0; i <menuItem.length;i++) {
      menuItem[i].style.display = "none";
    };
  }, 900);
};

// MAIN function

function start () {
  if (activeCheck()===false && hiddenCheck()===false) {
    for (var i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.add("active")
    }
  }

  else if (activeCheck()===true && hiddenCheck()===false) {
    for (var i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.add("hidden")
      menuItem[i].classList.remove("active")
      displayNone();
    }
  }

  else if (activeCheck()===false && hiddenCheck()===true) {
    for (var i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.add("active")
      menuItem[i].classList.remove("hidden")
      menuItem[i].style.display = "block"
    }
  }
}
