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

// Lấy các phần tử DOM cần sử dụng
const resultInput = document.getElementById("result");
let currentInput = "";

// Hàm thêm số vào biểu thức hiện tại
function appendNumber(number) {
  currentInput += number;
  updateResult();
}

// Hàm thêm dấu thập phân vào biểu thức hiện tại
function appendDecimal(decimal) {
  if (!currentInput.includes(decimal)) {
    currentInput += decimal;
    updateResult();
  }
}

// Hàm thực hiện các phép tính +, -, *, /, %
function operate(operator) {
  currentInput += operator;
  updateResult();
}

// Hàm chuyển đổi dấu của số hiện tại
function toggleSign() {
  if (currentInput !== "") {
    const firstCharacter = currentInput.charAt(0);
    if (firstCharacter === "-") {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = "-" + currentInput;
    }
    updateResult();
  }
}

// Hàm xử lý phép tính và hiển thị kết quả
function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateResult();
  } catch (error) {
    currentInput = "";
    resultInput.value = "Error";
  }
}

// Hàm cập nhật giá trị hiển thị
function updateResult() {
  resultInput.value = currentInput;
}

// Hàm xóa dữ liệu đầu vào
function clearInput() {
  currentInput = "";
  updateResult();
}
