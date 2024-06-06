loginTabs = document.querySelectorAll(".login-methods-tab__login-method");
loginInputs = document.querySelectorAll(".login-form__row > input");
deleteNudgeIcon = document.querySelector(
  ".login-methods-tab__nudge span:last-child"
);

loginTabs.forEach((loginTab) => {
  loginTab.addEventListener("click", (evt) => {
    let t = evt.target;
    while (t.parentNode.className !== "login-methods-tab") {
      t = t.parentNode;
    }
    t.classList.add("active");
    allSiblings = Array.prototype.filter.call(
      t.parentNode.children,
      (child) => {
        return (child != t) & (child.className != "login-methods-tab__nudge");
      }
    );
    allSiblings.forEach((sibling) => {
      sibling.classList.remove("active");
    });
  });
});

deleteNudgeIcon.addEventListener("click", (evt) => {
  evt.target.parentNode.style = "display:none";
});

loginInputs.forEach((loginInput) => {
  loginInput.addEventListener("input", (evt) => {
    const target = evt.target;
    const deleteIcon = target.nextElementSibling;
    if (target.value === "") {
      // hide icon
      deleteIcon.style = "display:none;";
    } else {
      // show icon
      deleteIcon.style = "";
      deleteIcon.addEventListener("click", () => {
        target.value = "";
        deleteIcon.style = "display:none;";
      });
    }
  });
});
