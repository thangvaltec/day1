function dangNhap() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const thongbao = document.getElementById("thongbao");

    if (username === "admin" && password === "0000") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("menuHeThong").style.display = "block";
    } else {
        thongbao.innerText = "Sai tên đăng nhập hoặc mật khẩu.";
    }
}

function dangXuat() {
    document.getElementById("menuHeThong").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("thongbao").innerText = "";
}
