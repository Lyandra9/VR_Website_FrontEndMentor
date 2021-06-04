const checkbox = document.querySelector("#menu-header-toggle");
const menu_content = document.querySelector(".menu-content");

function open_menu() {
  if (checkbox.checked) {
    menu_content.classList.add("show");
  } else {
    if (menu_content.classList.contains("show")) {
      menu_content.classList.remove("show");
    }
  }
}
