  hideSideBarView = function() {
    document.getElementById("sidebarId").style.display = "none";
    document.querySelector("remover").style.display = "none";
    document.querySelector("activator").style.display = "block";
  }

  appearSideBarView = function() {
    document.getElementById("sidebarId").style.display = "flex";
    document.querySelector("activator").style.display = "none";
    document.querySelector("remover").style.display = "block";
  }