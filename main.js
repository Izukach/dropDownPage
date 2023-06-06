// const featureBtn = document.getElementById("featureBtn");
const companyContent = document.querySelector(".companyContent");
const featureContent = document.querySelector(".featureContent");

const firstList = `   <ul>
<li>
  <img src="./image/icon-todo.svg" alt="" id="toDo" />
  <span id="todoText">Todo List</span>
</li>
<li>
  <img src="./image/icon-calendar.svg" alt="" id="calender" />
  <span id="todoText">Calender</span>
</li>

<li>
  <img src="./image/icon-reminders.svg" alt="" id="remainder" />
  <span id="todoText">Reminders</span>
</li>
<li>
  <img src="./image/icon-planning.svg" alt="" id="planning" />
  <span id="todoText">Planning</span>
</li>
</ul>   `;

// featureBtn.addEventListener("click", function () {
//   featureBtn.innerHTML = ` Features <i class="fa-solid fa-angle-down"></i>; `;
//   featureContent.innerHTML = firstList;
// });

function clickMe() {
  if (featureContent.classList.toggle("show")) {
    featureBtn.innerHTML = ` Features <i class="fa-solid fa-angle-down"></i> `;
  } else {
    featureBtn.innerHTML = ` Features <i class="fa-solid fa-angle-up"></i> `;
  }
}

function clickMe2() {
  // if (companyContent.classList.toogle("show")) {
  //   companyBtn.innerHTML = ` Company
  // <i class="fa-solid fa-angle-down"></i> `;
  // } else {
  //   companyBtn.innerHTML = ` Company
  // <i class="fa-solid fa-angle-up"></i> `;
  // }
  // companyContent.classList.toggle("show");
  if (companyContent.classList.toggle("show")) {
    companyBtn.innerHTML = ` Company
     <i class="fa-solid fa-angle-down"></i> `;
  } else {
    companyBtn.innerHTML = ` Company
     <i class="fa-solid fa-angle-up"></i> `;
  }
}
