document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData = new FormData(this);
  
    fetch("http://coinloot.atwebpages.com/login.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById("result").innerText = "✅ تسجيل دخول ناجح!";
      } else {
        document.getElementById("result").innerText = "❌ فشل في تسجيل الدخول.";
      }
    })
    .catch(error => {
      document.getElementById("result").innerText = "⚠️ خطأ في الاتصال بالسيرفر.";
      console.error("Error:", error);
    });
  });
  