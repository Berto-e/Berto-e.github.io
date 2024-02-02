document.getElementById("spellbook").addEventListener("click", function () {
  let panelSkills = document.getElementById("skillPanel-2");
  panelSkills.style.height =
    panelSkills.style.height == 0 || panelSkills.style.height == "0px"
      ? "200px"
      : "0px";
});

