/* ------ register_join_login ------ */
function login1() {
  var id = document.getElementById("id");
  var pwd = document.getElementById("pwd");
  
  if (id.value == "") {
    alert("아이디를 입력하세요.");
    id.focus();
    return false;
  };
  
  if (pwd.value == "") {
    alert("비밀번호를 입력하세요.");
    pwd.focus();
    return false;
  };

  location.href = "../../index.html";
}


/* ------ register_join_terms ------ */
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
  const checkboxes = document.querySelectorAll('input[name="agree"]');
  const checked = document.querySelectorAll('input[name="agree"]:checked');
  const selectAll = document.querySelector('input[name="selectall"]');
  
  if(checkboxes.length === checked.length) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
}

function selectAll(selectAll)  {
  const checkboxes = document.getElementsByName('agree');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}

function check() {
  var agreeAll = document.agreeAll;
  if(!agreeAll.termStorage.checked) {
      alert("이용약관 동의가 필요합니다.");
      agreeAll.termStorage.focus();
      return false;
  }

  if(!agreeAll.perInfoStorage.checked) {
      alert("개인정보 수집 이용에 대한 동의가 필요합니다.");
      agreeAll.perInfoStorage.focus();
      return false;
  }
    location.href = "../register/register_join_cert.html";
}


/* ------ register_join_cert ------ */
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

  var frontCheck = /^(?=.*[0-9]).{6}$/;
  var backCheck = /^(?=.*[1-6]).{1}$/;
  var phoneCheck = /^(?=.*[0-9]).{3,4}$/;
  var phoneBackCheck = /^(?=.*[0-9]).{4}$/;

  if (front.value == "" || back.value == "") {
    alert("주민번호를 입력하세요.");
    front.focus();
    return false;
  };

  if (!frontCheck.test(front.value)) {
    alert("주민번호 앞자리를 입력하세요. (ex. 901218)");
    front.focus();
    return false;
  };

  if (!backCheck.test(back.value)) {
    alert("주민번호 뒷자리 중 첫번째 자리만 입력하세요.");
    back.focus();
    return false;
  };

  if(phone.value == "" || phoneBack.value == "") {
    alert("휴대폰번호를 입력하세요.")
    phone.focus();
    return false;
  };

  if(!phoneCheck.test(phone.value) || !phoneBackCheck.test(phoneBack.value)) {
    alert("휴대폰번호 형식이 올바르지 않습니다. 4자리씩 입력하세요.")
    phone.focus();
    return false;
  };

  location.href = "../register/register_join_info.html";
}

/* ------ register_join_info ------ */
function joinform_check() {
  var name = document.getElementById("name");
  var date = document.getElementById("date");
  var join_cert = document.join_cert;
  var id = document.getElementById("id");
  var pw = document.getElementById("pw");
  var pw_confirm = document.getElementById("pw_confirm");
  var phone = document.getElementById("phone");
  var mail = document.getElementById("mail");
  var postcode = document.getElementById("postcode");
  var restAddress = document.getElementById("restAddress");

  var dateCheck = /^(?=.*[0-9]).{6}$/;
  var idCheck = /^(?=.*[a-zA-Z])(?=.*[0-6]).{5,12}$/;
  var pwCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,12}$/;
  var phoneCheck = /^(?=.*[0-9]).{10,11}$/;

  if (name.value == "") {
    alert("이름을 입력하세요.");
    name.focus();
    return false;
  } else if (date.value == "") {
    alert("생년월일을 입력하세요.");
    date.focus();
    return false;
  } else if (!dateCheck.test(date.value)) {
    alert("생년월일 형식이 올바르지 않습니다. (ex. 901218)");
    date.focus();
    return false;
  } else if(!join_cert.id.value) {
    alert("아이디를 입력하세요.");
    join_cert.id.focus();
    return false;
  } else if (!idCheck.test(id.value)) {
    alert("아이디는 영문+숫자 조합으로 5~12자리 사용해야 합니다.");
    id.focus();
    return false;
  } else if (pw.value == "") {
    alert("비밀번호를 입력하세요.");
    pw.focus();
    return false;
  } else if (!pwCheck.test(pw.value)) {
    alert("비밀번호는 영문+숫자 조합으로 10~12자리 사용해야 합니다.");
    pw.focus();
    return false;
  } else if (pw_confirm.value == "") {
    alert("비밀번호를 한번 더 입력하세요.");
    pw_confirm.focus();
    return false;
  } else if (pw_confirm.value !== pw.value) {
    alert("비밀번호가 일치하지 않습니다.");
    pw_confirm.focus();
    return false;
  } else if (phone.value == "") {
    alert("휴대폰 번호를 입력하세요.");
    phone.focus();
    return false;
  } else if (!phoneCheck.test(phone.value)) {
    alert("휴대폰 번호 형식이 올바르지 않습니다. (숫자 10~11자리)");
    phone.focus();
    return false;
  } else if (mail.value == "") {
    alert("이메일 주소의 아이디를 입력하세요.");
    mail.focus();
    return false;
  } else if (email_add.value == "") {
    alert("이메일 주소의 도메인을 입력하세요.");
    email_add.focus();
    return false;
  } else if (postcode.value == "") {
    alert("주소를 입력하세요.");
    postcode.focus();
    return false;
  } else {
    alert("리움미술관 회원이 되신 것을 환영합니다!");
    location.href = "../../index.html";
  }
}

function change_email() {
  var email_add = document.getElementById("email_add");
  var email_sel = document.getElementById("email_sel");

  var idx = email_sel.options.selectedIndex;
  var val = email_sel.options[idx].value;

  email_add.value = val;
}

function id_check() {
  var uid = document.getElementById("id");
  var id = getId.value;
  var regExp = /&[a-zA-Z0-9]{3,12}$/;

  if (!regExp.test(id)) {
    alert("이미 존재하는 아이디 입니다.");
    uid.value = "";
    uid.focus();
    return false;
  }
}

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