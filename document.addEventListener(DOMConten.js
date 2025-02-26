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
  "type": "bubble",
  "size": "giga",
  "hero": {
    "type": "video",
    "url": "https://drive.google.com/uc?export=view&id=1kO3ojhYCU0dFjMQ3O7H4gdHMt4ytqJW_",
    "previewUrl": "https://img2.pic.in.th/pic/436069857_120209174198490067_1158552242571835133_n.jpg",
    "altContent": {
      "type": "image",
      "size": "full",
      "aspectRatio": "9:10",
      "aspectMode": "cover",
      "url": "https://img2.pic.in.th/pic/436069857_120209174198490067_1158552242571835133_n.jpg",
      "animated": true
    },
    "action": {
      "type": "uri",
      "label": "สมัครคลิ๊ก 👈",
      "uri": "https://play.worldstake88.com/aff/1gdcb5sff"
    }
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "image",
        "url": "https://lh3.googleusercontent.com/d/1RM-L4qrmz5INtdLAlaiKbTb1QydzIgGH",
        "animated": true,
        "aspectMode": "cover",
        "size": "full",
        "aspectRatio": "7.1:2",
        "action": {
          "type": "uri",
          "label": "action",
          "uri": "https://play.worldstake88.com/aff/1gdcb5sff"
        }
      }
    ],
    "backgroundColor": "#ffffffaa",
    "paddingAll": "0%"
  }
}
        ]).then(() => {
            alert("แชร์สำเร็จ!");
        }).catch((err) => {
            console.error("แชร์ไม่สำเร็จ", err);
        });
    });
});
