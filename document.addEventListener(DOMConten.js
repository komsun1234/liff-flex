document.addEventListener("DOMContentLoaded", function () {
    const liffId = "2006965273-DeegjdoX"; // ใส่ LIFF ID ที่ได้จาก LINE Developers

    liff.init({ liffId }).then(() => {
        if (!liff.isLoggedIn()) {
            liff.login();
        }
    }).catch((err) => {
        console.error("LIFF Initialization failed", err);
    });

    document.getElementById("shareButton").addEventListener("click", function () {
        liff.shareTargetPicker([
            {
                type: "text",
                text: "📲 แชร์ไปที่ LINE! ลองดูนี่สิ 👉 https://your-website.com"
            }
        ]).then(() => {
            alert("แชร์สำเร็จ!");
        }).catch((err) => {
            console.error("แชร์ไม่สำเร็จ", err);
        });
    });
});
