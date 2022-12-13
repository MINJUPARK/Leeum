$(function() {
  $('.side-tab .tab-wrap').find('li').on('click', function(e) {
      var $this = $(this);
      var $all_tab= $this.parents('.tab-wrap').find('.tab');

      if($this.parents('login')) {
          $all_tab.removeClass('on');
          $this.addClass('on');
      }
  });
  
  
  function dropdown() {
      $(this).children('.dropdown').toggleClass('active');
      $(this).next().slideToggle();
  }
  $('.agr .plus').on('click', dropdown);

  $('.agr-whole').on(click, "#tot-storage", function() {
      var checked = $(this).is(":checked");
      if(checked){
          $(this).parents(".agr-whole").find('input').prop("checked", true);
      } else {
          $(this).parents(".agr-whole").find('input').prop("checked", false);
      }
  });
}) 

function checkSelectAll()  {
  const checkboxes 
    = document.querySelectorAll('input[name="agree"]');
  const checked 
    = document.querySelectorAll('input[name="agree"]:checked');
  const selectAll 
    = document.querySelector('input[name="selectall"]');
  
  if(checkboxes.length === checked.length)  {
    selectAll.checked = true;
  }else {
    selectAll.checked = false;
  }

}

function selectAll(selectAll)  {
  const checkboxes 
     = document.getElementsByName('agree');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}

function check() {
var agreeAll = document.agreeAll;
if(!agreeAll.termStorage.checked) {
    alert("약관에 동의하세요!");
    agreeAll.termStorage.focus();
    return false;
}

if(!agreeAll.perInfoStorage.checked) {
    alert("개인정보에 동의하세요!");
    agreeAll.perInfoStorage.focus();
    return false;
}
location.href = "http://127.0.0.1:5501/sub/register/register_join_cert.html";
}


// join_cert
function certify() {
var name = document.getElementById("name");
var front = document.getElementById("front");
var back = document.getElementById("back");
var phone = document.getElementById("phone");
var phoneBack = document.getElementById("phoneBack");

if (name.value == "") {
  alert("이름을 입력하세요.");
  name.focus();
  return false;
};

if (front.value == "") {
  alert("생년월일을 입력하세요.");
  front.focus();
  return false;
};

if (back.value == "") {
  alert("생년월일을 입력하세요.");
  back.focus();
  return false;
};

if (phone.value == "") {
  alert("휴대폰 번호를 입력하세요.");
  phone.focus();
  return false;
};

if (phoneBack.value == "") {
  alert("휴대폰 번호를 입력하세요.");
  phoneBack.focus();
  return false;
};

location.href = "http://127.0.0.1:5501/sub/register/register_join_info.html";
}

// join_info
function joinform_check() {

var join_cert = document.join_cert;
if(!join_cert.id.value) {
    alert("아이디를 입력하세요!");
    join_cert.id.focus();
    return false;
}

 var idCheck = /^(?=.*[a-zA-Z])(?=.*[0-6]).{5,12}$/;

if (!idCheck.test(id.value)) {
  alert("아이디는 영문+숫자 조합으로 5~12자리 사용해야 합니다.");
  id.focus();
  return false;
};

var pw = document.getElementById("pw");
var pw_confirm = document.getElementById("pw_confirm");
var mail = document.getElementById("mail");
var postcode = document.getElementById("postcode");
var restAddress = document.getElementById("restAddress");
var female = document.getElementById("female");
var male = document.getElementById("male");
/*   var agree = document.getElementById("agree"); */
/*  var non_agree = document.getElementById("non_agree"); */

if (pw.value == "") {
  alert("비밀번호를 입력하세요.");
  pw.focus();
  return false;
};

var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[0-11]).{10,12}$/;

if (!pwdCheck.test(pw.value)) {
  alert("비밀번호는 영문+숫자 조합으로 10~12자리 사용해야 합니다.");
  pw.focus();
  return false;
};

if (pw_confirm.value !== pw.value) {
  alert("비밀번호가 일치하지 않습니다.");
  pw_confirm.focus();
  return false;
};

if (mail.value == "") {
  alert("이메일 주소를 입력하세요.");
  mail.focus();
  return false;
}

if (email_add.value == "") {
  alert("이메일 주소를 입력하세요.");
  email_add.focus();
  return false;
}

if (postcode.value == "") {
  alert("주소를 입력하세요.");
  postcode.focus();
  return false;
}

if (restAddress.value == "") {
  alert("주소를 입력하세요.");
  restAddress.focus();
  return false;
}

if (!female.checked && !male.checked) {
  alert("성별을 선택해 주세요.");
  female.focus();
  return false;
}

/*  if (!agree.checked) {
  alert("약관 동의를 체크하세요.");
  agree.focus();
  return false;
} */

location.href = "http://127.0.0.1:5501/index.html";
}

function change_email() {
var email_add = document.getElementById("email_add");
var email_sel = document.getElementById("email_sel");

var idx = email_sel.options.selectedIndex;
var val = email_sel.options[idx].value;

email_add.value = val;
}


function id_check() {
//window.open("팝업될 문서 경로", "팝업될 문서 이름", "옵션");
window.open("", "", "width=600, height=200, left=200, top=100");
}

// 주소
function postalCodeFind() {
new daum.Postcode({
    oncomplete: function(data) {
        var addr = ''; 
        var extraAddr = ''; 

        if (data.userSelectedType === 'R') {
            addr = data.roadAddress;
        } else {
            addr = data.jibunAddress;
        }

        if(data.userSelectedType === 'R'){
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraAddr += data.bname;
            }

            if(data.buildingName !== '' && data.apartment === 'Y'){
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            
            if(extraAddr !== ''){
                extraAddr = ' (' + extraAddr + ')';
            }
            
            document.getElementById("extraAddress").value = extraAddr;

        } else {
            document.getElementById("extraAddress").value = '';
        }

        document.getElementById('postcode').value = data.zonecode;
        document.getElementById("defaultAddress").value = addr;

        document.getElementById("restAddress").focus();
    }
}).open();
}
