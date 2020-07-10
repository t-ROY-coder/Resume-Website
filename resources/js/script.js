var waypoint = new Waypoint({
   element: document.querySelector("nav"),
   handler: (direction) => {
      if (direction === "down") {
         var rect = document.querySelector(".main-nav").getBoundingClientRect();
         //console.log(rect.top);
         document.querySelector(".main-nav").classList.add("sticky");
      } else {
         document.querySelector(".main-nav").classList.remove("sticky");
      }
   },
});
