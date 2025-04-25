const ul = document.querySelector("ul");
const input = document.querySelector(".fancy-input");
const addBtn = document.querySelector(".add-item");
const resetBtn = document.querySelector(".reset");

addBtn.addEventListener("click", function () {
  const liCount = ul.children.length; // ulタグ内のliタグの数を取得
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const image = document.createElement("img");
  const error = document.querySelector(".error");

  if (input.value === "") {
    error.textContent = "買い物を入力してください";
    return;
  }
  checkbox.type = "checkbox";
  checkbox.classList.add("styled-checkbox");
  checkbox.name = "item" + (liCount + 1);
  checkbox.id = "item" + (liCount + 1);
  checkbox.value = input.value;
  li.appendChild(checkbox);

  label.htmlFor = "item" + (liCount + 1);
  label.textContent = input.value;
  li.appendChild(label);
  input.value = "";

  image.src = "images/trash-icon.svg";
  image.alt = "ゴミ箱アイコン";
  image.classList.add("trash-icon");
  image.setAttribute("data-trash", liCount + 1);
  li.appendChild(image);

  ul.appendChild(li);
  if (error.textContent !== "") {
    error.textContent = "";
  }
});

resetBtn.addEventListener("click", function () {
  ul.innerHTML = "";
});

// ゴミ箱アイコンをクリックしたら、そのliタグを削除する
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("trash-icon")) {
    const trash = e.target.getAttribute("data-trash");
    const li = document.querySelector(`#item${trash}`).parentElement;
    ul.removeChild(li);
  }
});
