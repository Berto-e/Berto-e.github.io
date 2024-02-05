document.getElementById("spellbook").addEventListener("click", function () {
  let panelSkills = document.getElementById("skillPanel-2");
  
    if(panelSkills.style.display == "none"){
      panelSkills.style.display = "block";
      panelSkills.style.height = "200px";
    }
    else{
      panelSkills.style.display = "none";
      setTimeout(() => {
        panelSkills.style.height = "0px";
      }, 150);
    }
});

