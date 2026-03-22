let input = document.getElementById("itemInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("list");

button.addEventListener("click", function() {
  let value = input.value.trim();

  if (value === "") {
    alert("Please enter something");
    return;
  }

  // Create list item
  let li = document.createElement("li");
  li.innerText = value;

  // Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  // Add delete functionality
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });

  // Append delete button inside li
  li.appendChild(deleteBtn);

  // Add li to list
  list.appendChild(li);

  input.value = "";
});