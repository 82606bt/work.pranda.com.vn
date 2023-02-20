function show() {
  document.getElementById("create_todo").style.display = "block";
}
function hide() {
  document.getElementById("create_todo").style.display = "none";
}
function addtodo() {
  document.getElementById("add_todo").style.display = "block";
}
function hidetodo() {
  document.getElementById("add_todo").style.display = "none";
}
function TodoMoveInprogress() {
  var tasks = document.querySelectorAll("#task_1");

  var task_progress = document.getElementById("d_progress");
  tasks.forEach((task) => {
    task_progress.append(task);
  });
  var parent = document.getElementById("td-tool");
  var firt = document.getElementById("todo-progress");
  firt.setAttribute("href", "javascript:InprogressMoveTodo()");
  var parentchildren = document.querySelector("#todo-progress i");
  parentchildren.setAttribute("data-original-title", "Move todo");
  parentchildren.setAttribute("class", "ri-arrow-left-line progress-todo");
  parent.insertBefore(firt, parent.children[0]);
  //set Thông báo chỉnh sửa
  var timeset = new Date().toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  var noidungcongviec =
    document.getElementById("d_noidungcongviec").textContent;
  document.querySelector("#notification_change > div >strong ").innerHTML =
    "Long";
  document.querySelector("#notification_change > div > small ").innerHTML =
    timeset;
  document.querySelector("#notification_change > div.toast-body ").innerHTML =
    "Đã cập nhật " + noidungcongviec + " sang In Progress";
  $("#notification_change").toast("show");
}
function InprogressMoveTodo() {
  var tasks = document.querySelectorAll("#task_1");
  var task_todo = document.getElementById("d_todo");
  tasks.forEach((task) => {
    task_todo.append(task);
  });

  var parent = document.getElementById("td-tool");
  var firt = document.getElementById("todo-progress");
  firt.setAttribute("href", "javascript:TodoMoveInprogress()");
  var parentchildren = document.querySelector("#todo-progress i");
  parentchildren.setAttribute("data-original-title", "Move inprogress");
  parentchildren.setAttribute("class", "ri-arrow-right-line todo-progress");
  parent.insertBefore(firt, parent.children[2]);
}

function Compeleted() {
  var tasks = document.querySelectorAll("#task_1");
  var task_compeleted = document.getElementById("d_completed");
  tasks.forEach((task) => {
    task_compeleted.append(task);
    document
      .getElementById("hidden_compeleted")
      .setAttribute("disabled", "disabled");
  });
  var parent = document.getElementById("td-tool");
  var firt = document.getElementById("todo-progress");
  firt.setAttribute("href", "javascript:TodoMoveInprogress()");
  var parentchildren = document.querySelector("#todo-progress i");
  parentchildren.setAttribute("data-original-title", "Move todo");
  parentchildren.setAttribute("class", "ri-arrow-left-line progress-todo");
  parent.insertBefore(firt, parent.children[0]);
}
$(document).ready(function () {
  flatpickr("#start_date", {
    theme: "airbnb",
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  });
  flatpickr("#end_date", {
    theme: "airbnb",
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  });
  var add_todo = document.getElementById("add_todo");
  document.addEventListener("click", function (event) {
    if (!add_todo.contains(event.target)) {
      document.getElementById("add_todo").style.display = "none";
    }
  });
  formatDateStart();
  formatDateEnd();
});

function addMember() {
  var listmember = document.getElementById("d_addmembertodo");
  var newMember = document.createElement("a");
  var memberText = document.createElement("img");
  newMember.setAttribute("href", "#");
  newMember.setAttribute("class", "iq-media");
  memberText.setAttribute("class", "img-fluid avatar-40 rounded-circle");
  memberText.setAttribute("src", "/images/user/longdoan.jpg");
  newMember.appendChild(memberText);
  listmember.appendChild(newMember);
}
function themnhanvien() {
  $("#d_addmembertodo").html("");
  addMember();
}
function checkPriority(stt) {
  var check = document.querySelector("#d_setpri_" + stt);
  var element = document.querySelector(".ri-check-fill");
  if (element) {
    element.removeAttribute("class", "ri-check-fill");
    var tick = document.createElement("i");
    tick.setAttribute("class", "ri-check-fill");
  }
  if (stt == 5) {
    element.removeAttribute("class", "ri-check-fill");
  } else {
    var tick = document.createElement("i");
    tick.setAttribute("class", "ri-check-fill");
    check.appendChild(tick);
  }
}
function addPriority(stt) {
  var i = document.querySelector("#d_setpri_" + stt + ">i");
  var y = document.querySelector("#d_setpri_" + stt);
  var icon = i.getAttribute("class");
  var tooltip = y.getAttribute("data-original-title");
  var setPriority = document.getElementById("d_priority");
  if (stt == 5) {
    var setPriority = document.getElementById("d_priority");
    setPriority.setAttribute("class", "ri-flag-2-line");
    setPriority.setAttribute("data-original-title", tooltip);
    checkPriority(stt);
    return;
  }
  setPriority.setAttribute("class", icon);
  setPriority.setAttribute("data-original-title", tooltip);
  checkPriority(stt);
}
function formatDateEnd() {
  var ngayketthuc = document.getElementById("d_ngayketthuc");
  var setFormat_nkt = document.getElementById("d_ngayketthuc").textContent;
  var parts = setFormat_nkt.split("/");
  var date = new Date(parts[2], parts[1] - 1, parts[0]);
  var today = new Date();
  var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  if (date.toDateString() === today.toDateString()) {
    ngayketthuc.innerHTML = "Today";
    ngayketthuc.style.color = "#fb926a";
  } else if (date.toDateString() === yesterday.toDateString()) {
    ngayketthuc.innerHTML = "Yesterday";
    ngayketthuc.style.color = "#ed4141";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    ngayketthuc.innerHTML = "Tomorrow";
    ngayketthuc.style.color = "#fb926a";
  } else {
    var diff = Math.round((today - date) / (24 * 60 * 60 * 1000));
    if (diff > 0) {
      ngayketthuc.innerHTML = diff + " days ago";
      ngayketthuc.style.color = "#ed4141";
    } else {
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return dd + "/" + mm + "/" + yyyy;
    }
  }
}
function formatDateStart() {
  var ngaybatdau = document.getElementById("d_ngaybatdau");
  var setFormat_nbd = document.getElementById("d_ngaybatdau").textContent;
  var parts = setFormat_nbd.split("/");
  var date = new Date(parts[2], parts[1] - 1, parts[0]);
  var today = new Date();
  var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  if (date.toDateString() === today.toDateString()) {
    ngaybatdau.innerHTML = "Today";
    ngaybatdau.style.color = "#fb926a";
  } else if (date.toDateString() === yesterday.toDateString()) {
    ngaybatdau.innerHTML = "Yesterday";
    ngaybatdau.style.color = "#ed4141";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    ngaybatdau.innerHTML = "Tomorrow";
    ngaybatdau.style.color = "#fb926a";
  } else {
    var diff = Math.round((today - date) / (24 * 60 * 60 * 1000));
    if (diff > 0) {
      ngaybatdau.innerHTML = diff + " days ago";
      ngaybatdau.style.color = "#ed4141";
    } else {
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return dd + "/" + mm + "/" + yyyy;
    }
  }
}
