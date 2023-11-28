function chay() {
  var a;
  a = window.document.cau2.T1.value;
  alert(" so ban vua nhap la: " + a);
}
function chay3() {
  var a;
  a = window.document.cau3.T1.value * 1;
  if (a % 2 == 0) {
    alert(a + " la so chan ");
  } else {
    alert(a + " la so le ");
  }
}
// function chay4() {
//   var d = new Date();
//   var time = d.getHours();
//   if (time < 10) {
//     document.write("<b>Good morning</b > ");
//   } else if (time >= 10 && time < 16) {
//     document.write("<b>Good day</b>");
//   } else {
//     document.write("<b>Hello World!</b > ");
//   }
// }
// window.onload = function () {
//   document.getElementById("result-4").innerHTML = chay4();
// };

function mouseOver() {
  document.b1.src = "img/a.gif";
}
function mouseOut() {
  document.b1.src = "img/b.gif";
}

function timedText() {
  var t1 = setTimeout("window.document.lam.txt.value='2 seconds!'", 2000);
  var t2 = setTimeout(
    "document.getElementById('txt').value='4 seconds!'",
    4000
  );
  var t3 = setTimeout(
    "document.getElementById('txt').value='6 seconds!'",
    6000
  );
}

function startTime() {
  debugger;
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("txt11").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout("startTime()", 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function timedMsg() {
  var t = setTimeout("alert('5 seconds!')", 5000);
}

function disp_confirm() {
  var r = confirm("Press a button");
  if (r == true) {
    document.write("You pressed OK!");
  } else {
    document.write("You pressed Cancel!");
  }
}

function disp_prompt() {
  var name = prompt("VUI LONG NHAP TEN CUA BAN", "LE THANH LAM");
  if (name != null && name != "") {
    document.write("XIN CHAO " + name + "! How are you today?");
  }
}

var phone = new Array();
phone["lam"] = "090540468";
phone["duc"] = "0905274747";
phone["thinh"] = "0904909086";
phone["hien"] = "0905146560";
phone["daotao"] = "05113519929";
function disphone(thephone, entry) {
  var num = thephone[entry];
  window.document.myform.numbox.value = num;
}

//7.3
function validateClass(event) {
  event.preventDefault(); // Ngăn chặn việc submit form mặc định

  // Lấy giá trị từ các trường nhập liệu
  var maLop = document.getElementById("ClassID").value;
  var tenLop = document.getElementById("ClassName").value;
  var khoaHoc = document.getElementById("ClassKey").value;
  var gvcn = document.getElementById("teacher").value;

  // Kiểm tra dữ liệu đầu vào
  if (maLop.trim() === "") {
    alert("Vui lòng nhập mã lớp!");
    return;
  }

  if (maLop.trim().length !== 6) {
    alert("Mã lớp phải có độ dài 6 ký tự!");
    return;
  }

  if (tenLop.trim() === "") {
    alert("Vui lòng nhập tên lớp!");
    return;
  }

  if (tenLop.trim().length > 50) {
    alert("Tên lớp không được vượt quá 50 ký tự!");
    return;
  }

  if (isNaN(khoaHoc) || khoaHoc < 0) {
    alert("Khóa học phải là một số nguyên không âm!");
    return;
  }

  if (gvcn.trim() === "") {
    alert("Vui lòng nhập tên giáo viên chủ nhiệm!");
    return;
  }

  if (gvcn.trim().length > 50) {
    alert("Tên giáo viên chủ nhiệm không được vượt quá 50 ký tự!");
    return;
  }
  document.getElementById("class-form").reset();
}

//7.4
function validateFile() {
  debugger;

  var mahs = document.getElementById("studentID").value;
  var hoten = document.getElementById("fullName").value;
  var ngaysinh = document.getElementById("date").value;
  var diachi = document.getElementById("address").value;
  var lop = document.getElementById("class").value;
  var diemtoan = document.getElementById("numberMath").value;
  var diemLy = document.getElementById("numberLy").value;
  var diemhoa = document.getElementById("numberHoa").value;

  if (
    mahs === "" ||
    hoten === "" ||
    diachi === "" ||
    lop === "" ||
    diemLy === "" ||
    diemhoa === "" ||
    diemtoan === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  // Kiểm tra định dạng MAHS (8 ký tự)
  if (mahs.length !== 8) {
    alert("Mã học sinh phải có độ dài 8 ký tự.");
    return;
  }

  // Kiểm tra định dạng NGAYSINH (yyyy-mm-dd)
  var ngaySinhRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!ngaySinhRegex.test(ngaysinh)) {
    alert("Vui lòng nhập định dạng ngày sinh đúng (yyyy-mm-dd).");
    return;
  }

  // Kiểm tra định dạng LOP (6 ký tự)
  if (lop.length !== 6) {
    alert("LOP phải có độ dài 6 ký tự.");
    return;
  }

  // Kiểm tra DIEMTOAN là số
  var diemtoanFloat = parseFloat(diemtoan);
  if (isNaN(diemtoanFloat)) {
    alert("Điểm toán phải là kiểu số.");
    return;
  }
  document.getElementById("file-form").reset();
}

// form nhap
window.onload = function () {
  // Set focus to the fullname input field when the page loads
  document.getElementById("fullname").focus();

  // Add event listeners for input fields
  var inputs = document.getElementsByClassName("required");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        // Enter key
        focusNextInput(this);
      }
    });
  }

  // Blur event for fullname input field
  document.getElementById("fullname").addEventListener("blur", function () {
    normalizeName(this);
  });

  // Focus event for birthdate input field
  document.getElementById("birthdate").addEventListener("focus", function () {
    this.style.color = "black";
    if (this.value === "nn/tt/nnnn") {
      this.value = "";
    }
  });

  // Blur event for birthdate input field
  document.getElementById("birthdate").addEventListener("blur", function () {
    if (this.value === "") {
      this.value = "nn/tt/nnnn";
      this.style.color = "gray";
    } else {
      autoFormatDate(this);
    }
  });

  // Click event for accept button
  document
    .getElementById("accept-button")
    .addEventListener("click", function () {
      validateForm();
    });
};

function normalizeName(inputElement) {
  var name = inputElement.value.trim();
  var normalized = name.replace(/\s+/g, " ").replace(/(^|\s)\S/g, function (c) {
    return c.toUpperCase();
  });
  inputElement.value = normalized;
}

function autoFormatDate(inputElement) {
  var value = inputElement.value.trim();
  if (value.length === 2 || value.length === 5) {
    inputElement.value = value + "/";
  }
}

function focusNextInput(currentInput) {
  var form = currentInput.form;
  var inputs = form.getElementsByClassName("required");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] === currentInput) {
      if (i + 1 < inputs.length) {
        inputs[i + 1].focus();
        break;
      }
    }
  }
}

function validateForm() {
  var form = document.getElementById("registration-form");
  var inputs = form.getElementsByClassName("required");
  var isValid = true;

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var errorSpan = input.nextElementSibling;

    if (input.value.trim() === "") {
      errorSpan.textContent = "Vui lòng nhập thông tin.";
      isValid = false;
    } else {
      errorSpan.textContent = "";
    }
  }

  if (isValid) {
    // Perform further validation or submit the form
    form.submit();
  }
}

// tab

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// danh sách
window.onload = function () {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var firstCheckbox = checkboxes[0];

  // firstCheckbox.addEventListener("change", function () {
  //   var isChecked = firstCheckbox.checked;

  //   checkboxes.forEach(function (checkbox) {
  //     checkbox.checked = isChecked;
  //     toggleHighlight(checkbox);
  //   });
  // });

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      toggleHighlight(checkbox);
      updateFirstCheckbox();
      updateCheckboxes(checkbox);
    });
  });

  function toggleHighlight(checkbox) {
    var row = checkbox.parentNode.parentNode;

    if (checkbox.checked) {
      row.classList.add("highlight");
    } else {
      row.classList.remove("highlight");
    }
  }

  function updateFirstCheckbox() {
    var checkedCount = 0;

    checkboxes.forEach(function (checkbox, index) {
      if (index !== 0 && checkbox.checked) {
        checkedCount++;
      }
    });

    firstCheckbox.checked = checkedCount === checkboxes.length - 1;
  }

  function updateCheckboxes(checkbox) {
    var rowIndex = checkbox.parentNode.parentNode.rowIndex;

    if (rowIndex === 0) {
      checkboxes.forEach(function (otherCheckbox) {
        if (checkbox.checked) {
          otherCheckbox.checked = true;
        } else {
          otherCheckbox.checked = false;
        }

        toggleHighlight(otherCheckbox);
      });
    } else {
      var firstRowCheckbox = checkboxes[0];
      var isAllChecked = true;

      checkboxes.forEach(function (otherCheckbox, index) {
        if (index !== 0 && index > rowIndex) {
          if (checkbox.checked) {
            otherCheckbox.checked = true;
          } else {
            otherCheckbox.checked = false;
          }

          toggleHighlight(otherCheckbox);

          if (!otherCheckbox.checked) {
            isAllChecked = false;
          }
        }
      });

      firstRowCheckbox.checked = isAllChecked;
    }
  }
};

// hoạt cảnh
let intervalId = null;
const drawings = document.getElementsByClassName("drawing");
let currentIndex = 0;
let direction = 1;

function animateDrawings() {
  drawings[currentIndex].style.backgroundColor = "red";

  if (currentIndex === 0 || currentIndex === drawings.length - 1) {
    direction *= -1;
  }

  drawings[currentIndex].style.backgroundColor = "";

  currentIndex += direction;
}

function jump() {
  setInterval(animateDrawings, 500);
}

function stop() {
  clearInterval(setInterval(animateDrawings, 500));
}

// 7.10. máy tính
function appendNumber(number) {
  document.getElementById("result").value += number;
}

function appendOperator(operator) {
  const result = document.getElementById("result").value;

  const lastCharacter = result.slice(-1);

  if (lastCharacter !== operator) {
    document.getElementById("result").value += operator;
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLastCharacter() {
  const result = document.getElementById("result").value;

  document.getElementById("result").value = result.slice(0, -1);
}

function calculate() {
  const result = document.getElementById("result").value;

  const calculatedResult = eval(result);

  document.getElementById("result").value = calculatedResult;
}

// 7.8 menu
function selectMenu(menuId) {
  debugger;
  // Lấy danh sách tất cả các mục menu
  var menuItems = document.getElementsByClassName("menu-item");

  // Xóa lớp "selected" khỏi tất cả các mục menu
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("selected");
  }

  // Thêm lớp "selected" cho mục menu được chọn
  var selectedMenuItem = document.getElementById("menu-item-" + menuId);
  selectedMenuItem.classList.add("selected");

  // Hiển thị tiêu đề của thực đơn được chọn
  var selectedMenuTitle = selectedMenuItem.innerHTML;
  document.getElementById("selected-menu-title").innerHTML = selectedMenuTitle;
}

// 7.9 Cây thư mục
// Lấy tất cả các nút toggle
var toggles = document.getElementsByClassName("toggle");

// Gắn sự kiện click cho các nút toggle
for (var i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", toggleNode);
}

// Gắn sự kiện click cho các nút node
var nodes = document.getElementsByClassName("node");

for (var j = 0; j < nodes.length; j++) {
  nodes[j].addEventListener("click", selectNode);
}

// Hàm xử lý sự kiện click cho các nút toggle
function toggleNode() {}
