// JSで属性を設定・取得・確認

// 設定 setAttribute(属性名,値)
// 取得 getAttribute(属性名)
// 確認 hasAttribute(属性名)

// document.querySelectorAll("ul li a").forEach(elemnt => {
//     elemnt.setAttribute("target","_blank")
//     console.log(elemnt.getAttribute("target"))
//     console.log(elemnt.hasAttribute("target"))
// })

document.querySelectorAll("ul li a").forEach(elemnt => {
    if (elemnt.getAttribute("href") !== "/"){
    elemnt.setAttribute("target","_blank")
    }
})