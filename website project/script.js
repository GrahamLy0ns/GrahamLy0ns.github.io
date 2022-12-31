if (null === localStorage.getItem("myData")) { let e = { count: 0 }; e = JSON.stringify(e), localStorage.setItem("myData", e); let t = { item: "Binoculars", count: 0 }; t = JSON.stringify(t), localStorage.setItem("Binoculars", t); let a = { item1: "Small Telescope", count1: 0 }; a = JSON.stringify(a), localStorage.setItem("Small Telescope", a); let l = { item2: "Night Time Telescope", count2: 0 }; l = JSON.stringify(l), localStorage.setItem("Night Time Telescope", l); let n = { item3: "Standard Telescope", count3: 0 }; n = JSON.stringify(n), localStorage.setItem("Standard Telescope", n); let o = { item4: "Vintage Star Map", count4: 0 }; o = JSON.stringify(o), localStorage.setItem("Vintage Star Map", o); let r = { item5: "Large Telescope", count5: 0 }; r = JSON.stringify(r), localStorage.setItem("Large Telescope", r); let c = { item6: "Vintage Gold Telescope", count6: 0 }; c = JSON.stringify(c), localStorage.setItem("Vintage Gold Telescope", c); let i = { item7: "Navy Star Map", count7: 0 }; i = JSON.stringify(i), localStorage.setItem("Navy Star Map", i) } var cartNum = document.getElementById("cart"); let y = localStorage.getItem("myData"), x = JSON.parse(y); function binocularsSelected() { addToCartBtnClick("binoculars") } function smallTelescopeSelected() { addToCartBtnClick("smallTelescope") } function nightTimeTelescopeSelected() { addToCartBtnClick("nightTimeTelescope") } function standardTelescopeSelected() { addToCartBtnClick("standardTelescope") } function vintageStarMapSelected() { addToCartBtnClick("vintageStarMap") } function largeTelescopeSelected() { addToCartBtnClick("largeTelescope") } function vintageGoldTelescopeSelected() { addToCartBtnClick("vintageGoldTelescope") } function navyStarMapSelected() { addToCartBtnClick("navyStarMap") } function addToCartBtnClick(e) { let t = localStorage.getItem("myData"), a = JSON.parse(t).count; a++, cartNum.innerText = a; let l = { count: a }; if (l = JSON.stringify(l), localStorage.setItem("myData", l), "binoculars" == e) { let e = localStorage.getItem("Binoculars"), t = JSON.parse(e).count; t++; let a = { item: "Binoculars", count: t }; a = JSON.stringify(a), localStorage.setItem("Binoculars", a) } else if ("smallTelescope" == e) { let e = localStorage.getItem("Small Telescope"), t = JSON.parse(e).count1; t++; let a = { item1: "Small Telescope", count1: t }; a = JSON.stringify(a), localStorage.setItem("Small Telescope", a) } else if ("nightTimeTelescope" == e) { let e = localStorage.getItem("Night Time Telescope"), t = JSON.parse(e).count2; t++; let a = { item2: "Night Time Telescope", count2: t }; a = JSON.stringify(a), localStorage.setItem("Night Time Telescope", a) } else if ("standardTelescope" == e) { let e = localStorage.getItem("Standard Telescope"), t = JSON.parse(e).count3; t++; let a = { item3: "Standard Telescope", count3: t }; a = JSON.stringify(a), localStorage.setItem("Standard Telescope", a) } else if ("vintageStarMap" == e) { let e = localStorage.getItem("Vintage Star Map"), t = JSON.parse(e).count4; t++; let a = { item4: "Vintage Star Map", count4: t }; a = JSON.stringify(a), localStorage.setItem("Vintage Star Map", a) } else if ("largeTelescope" == e) { let e = localStorage.getItem("Large Telescope"), t = JSON.parse(e).count5; t++; let a = { item5: "Large Telescope", count5: t }; a = JSON.stringify(a), localStorage.setItem("Large Telescope", a) } else if ("vintageGoldTelescope" == e) { let e = localStorage.getItem("Vintage Gold Telescope"), t = JSON.parse(e).count6; t++; let a = { item6: "Vintage Gold Telescope", count6: t }; a = JSON.stringify(a), localStorage.setItem("Vintage Gold Telescope", a) } else if ("navyStarMap" == e) { let e = localStorage.getItem("Navy Star Map"), t = JSON.parse(e).count7; t++; let a = { item7: "Navy Star Map", count7: t }; a = JSON.stringify(a), localStorage.setItem("Navy Star Map", a) } } function binoculars() { let e = localStorage.getItem("Binoculars"), t = JSON.parse(e); if (0 == t.count); else { var a = document.createElement("p"); a.innerHTML = t.item + " x " + t.count + " in cart.", document.getElementById("itemDisplay").appendChild(a); var l = document.createElement("button"); l.innerHTML = "Remove Item", l.setAttribute("class", "remove"), l.onclick = function () { var e = localStorage.getItem("Binoculars"); let t = JSON.parse(e).count; t--; let a = { item: "Binoculars", count: t, price: 37 }; a = JSON.stringify(a), localStorage.setItem("Binoculars", a); let l = localStorage.getItem("myData"), n = JSON.parse(l).count; n--; let o = { count: n }; o = JSON.stringify(o), localStorage.setItem("myData", o), location.reload() }; var n = document.createElement("p"); n.innerHTML = "&euro;37", n.setAttribute("style", "display: inline; padding-left: 20px; padding-right: 20px;"), n.setAttribute("class", "priceTag"), a.appendChild(n), a.appendChild(l) } } function smallTelescope() { let e = localStorage.getItem("Small Telescope"), t = JSON.parse(e); if (0 == t.count1); else { var a = document.createElement("p"); a.innerHTML = t.item1 + " x " + t.count1 + " in cart.", document.getElementById("itemDisplay").appendChild(a); var l = document.createElement("button"); l.innerHTML = "Remove Item", l.setAttribute("class", "remove"), l.onclick = function () { var e = localStorage.getItem("Small Telescope"); let t = JSON.parse(e).count1; t--; let a = { item1: "Small Telescope", count1: t }; a = JSON.stringify(a), localStorage.setItem("Small Telescope", a); let l = localStorage.getItem("myData"), n = JSON.parse(l).count; n--; let o = { count: n }; o = JSON.stringify(o), localStorage.setItem("myData", o), location.reload() }; var n = document.createElement("p"); n.innerHTML = "&euro;165", n.setAttribute("style", "display: inline; padding-left: 20px; padding-right: 20px;"), n.setAttribute("class", "priceTag"), a.appendChild(n), a.appendChild(l) } } function nightTimeTelescope() { let e = localStorage.getItem("Night Time Telescope"), t = JSON.parse(e); if (0 == t.count2); else { var a = document.createElement("p"); a.innerHTML = t.item2 + " x " + t.count2 + " in cart.", document.getElementById("itemDisplay").appendChild(a); var l = document.createElement("button"); l.innerHTML = "Remove Item", l.setAttribute("class", "remove"), l.onclick = function () { var e = localStorage.getItem("Night Time Telescope"); let t = JSON.parse(e).count2; t--; let a = { item2: "Night Time Telescope", count2: t }; a = JSON.stringify(a), localStorage.setItem("Night Time Telescope", a); let l = localStorage.getItem("myData"), n = JSON.parse(l).count; n--; let o = { count: n }; o = JSON.stringify(o), localStorage.setItem("myData", o), location.reload() }; var n = document.createElement("p"); n.innerHTML = "&euro;699", n.setAttribute("style", "display: inline; padding-left: 20px; padding-right: 20px;"), n.setAttribute("class", "priceTag"), a.appendChild(n), a.appendChild(l) } } function standardTelescope() { let e = localStorage.getItem("Standard Telescope"), t = JSON.parse(e); if (0 == t.count3); else { var a = document.createElement("p"); a.innerHTML = t.item3 + " x " + t.count3 + " in cart.", document.getElementById("itemDisplay").appendChild(a); var l = document.createElement("button"); l.innerHTML = "Remove Item", l.setAttribute("class", "remove"), l.onclick = function () { var e = localStorage.getItem("Standard Telescope"); let t = JSON.parse(e).count3; t--; let a = { item3: "Standard Telescope", count3: t }; a = JSON.stringify(a), localStorage.setItem("Standard Telescope", a); let l = localStorage.getItem("myData"), n = JSON.parse(l).count; n--; let o = { count: n }; o = JSON.stringify(o), localStorage.setItem("myData", o), location.reload() }; var n = document.createElement("p"); n.innerHTML = "&euro;499", n.setAttribute("style", "display: inline; padding-left: 20px; padding-right: 20px;"), n.setAttribute("class", "priceTag"), a.appendChild(n), a.appendChild(l) } } function vintageStarMap() { let e = localStorage.getItem("Vintage Star Map"), t = JSON.parse(e); if (0 == t.count4); else { var a = document.createElement("p"); a.innerHTML = t.item4 + " x " + t.count4 + " in cart.", document.getElementById("itemDisplay").appendChild(a); var l = document.createElement("button"); l.innerHTML = "Remove Item", l.setAttribute("class", "remove"), l.onclick = function () { var e = localStorage.getItem("Vintage Star Map"); let t = JSON.parse(e).count4; t--; let a = { item4: "Vintage Star Map", count4: t }; a = JSON.stringify(a), localStorage.setItem("Vintage Star Map", a); let l = localStorage.getItem("myData"), n = JSON.parse(l).count; n--; let o = { count: n }; o = JSON.stringify(o), localStorage.setItem("myData", o), location.reload() }; var n = document.createElement("p"); n.innerHTML = "&euro;69", n.setAttribute("style", "display: inline; padding-left: 20px; padding-right: 20px;"), n.setAttribute("class", "priceTag"), a.appendChild(n), a.appendChild(l) } } function largeTelescope() { let e = localStorage.getItem("Large Telescope"), t = JSON.parse(e); if (0 == t.count5); else { var a = document.createElement("p"); a.innerHTML = t.item5 + " x " + t.count5 + " in cart.", document.getElementById("itemDisplay").appendChild(a); var l = document.createElement("button"); l.innerHTML = "Remove Item", l.setAttribute("class", "remove"), l.onclick = function () { var e = localStorage.getItem("Large Telescope"); let t = JSON.parse(e).count5; t--; let a = { item5: "Large Telescope", count5: t }; a = JSON.stringify(a), localStorage.setItem("Large Telescope", a); let l = localStorage.getItem("myData"), n = JSON.parse(l).count; n--; let o = { count: n }; o = JSON.stringify(o), localStorage.setItem("myData", o), location.reload() }; var n = document.createElement("p"); n.innerHTML = "&euro;600", n.setAttribute("style", "display: inline; padding-left: 20px; padding-right: 20px;"), n.setAttribute("class", "priceTag"), a.appendChild(n), a.appendChild(l) } } function vintageGoldTelescope() { let e = localStorage.getItem("Vintage Gold Telescope"), t = JSON.parse(e); if (0 == t.count6); else { var a = document.createElement("p"); a.innerHTML = t.item6 + " x " + t.count6 + " in cart.", document.getElementById("itemDisplay").appendChild(a); var l = document.createElement("button"); l.innerHTML = "Remove Item", l.setAttribute("class", "remove"), l.onclick = function () { var e = localStorage.getItem("Vintage Gold Telescope"); let t = JSON.parse(e).count6; t--; let a = { item6: "Vintage Gold Telescope", count6: t }; a = JSON.stringify(a), localStorage.setItem("Vintage Gold Telescope", a); let l = localStorage.getItem("myData"), n = JSON.parse(l).count; n--; let o = { count: n }; o = JSON.stringify(o), localStorage.setItem("myData", o), location.reload() }; var n = document.createElement("p"); n.innerHTML = "&euro;1,200", n.setAttribute("style", "display: inline; padding-left: 20px; padding-right: 20px;"), n.setAttribute("class", "priceTag"), a.appendChild(n), a.appendChild(l) } } function navyStarMap() { let e = localStorage.getItem("Navy Star Map"), t = JSON.parse(e); if (0 == t.count7); else { var a = document.createElement("p"); a.innerHTML = t.item7 + " x " + t.count7 + " in cart.", document.getElementById("itemDisplay").appendChild(a); var l = document.createElement("button"); l.innerHTML = "Remove Item", l.setAttribute("class", "remove"), l.onclick = function () { var e = localStorage.getItem("Navy Star Map"); let t = JSON.parse(e).count7; t--; let a = { item7: "Navy Star Map", count7: t }; a = JSON.stringify(a), localStorage.setItem("Navy Star Map", a); let l = localStorage.getItem("myData"), n = JSON.parse(l).count; n--; let o = { count: n }; o = JSON.stringify(o), localStorage.setItem("myData", o), location.reload() }; var n = document.createElement("p"); n.innerHTML = "&euro;800", n.setAttribute("style", "display: inline; padding-left: 20px; padding-right: 20px;"), n.setAttribute("class", "priceTag"), a.appendChild(n), a.appendChild(l) } } function totalPrice() { const e = document.getElementsByClassName("priceTag"); let t = 0; for (let a = 0; a < e.length; a++) { let l = e[a].innerHTML.slice(1); t += parseInt(l) } if (0 == !t) { var a = document.getElementById("itemDisplay"), l = document.createElement("p"); l.innerHTML = "Total Price:   &euro;" + t, a.appendChild(l) } } function registerSubmitForm() { var e = { firstName: document.getElementById("firstName").value, lastName: document.getElementById("lastName").value, userName: document.getElementById("userName").value, emailAddress: document.getElementById("emailAddress").value, password: document.getElementById("password").value }; e = JSON.stringify(e), localStorage.setItem("accountDetails", e) } function accountSubmitForm() { var e = { userName: document.getElementById("userName").value, password: document.getElementById("password").value }; e = JSON.stringify(e), localStorage.setItem("accountLogInDetails", e) } function accountAlert() { var e = localStorage.getItem("accountDetails"), t = JSON.parse(e), a = localStorage.getItem("accountLogInDetails"), l = JSON.parse(a); if (l.userName == t.userName && l.password == t.password) { (o = document.createElement("div")).setAttribute("class", "alert alert-success"), o.setAttribute("role", "alert"), o.innerHTML = "You've successfully logged into your account", document.getElementById("accountAlert").appendChild(o); var n = { logIn: "success" }; n = JSON.stringify(n), localStorage.setItem("account", n) } else if ("" == l.userName && "" == l.password); else { var o; (o = document.createElement("div")).setAttribute("class", "alert alert-danger"), o.setAttribute("role", "alert"), o.innerHTML = "Your password or username is incorrect. If you have not registered please click the link to register", document.getElementById("accountAlert").appendChild(o); n = { logIn: "failed" }; n = JSON.stringify(n), localStorage.setItem("account", n) } } function completePurchaseBtn() { var e = { purchase: "success" }; e = JSON.stringify(e), localStorage.setItem("purchase", e); var t = { street: document.getElementById("street").value, town: document.getElementById("town").value, county: document.getElementById("county").value, eircode: document.getElementById("eircode").value, iban: document.getElementById("iban").value, cvcNumber: document.getElementById("cvcNumber").value, expiryDate: document.getElementById("expiryDate").value }; t = JSON.stringify(t), localStorage.setItem("delivery", t) } function completePurchase() { var e = localStorage.getItem("account"), t = JSON.parse(e), a = localStorage.getItem("purchase"), l = JSON.parse(a), n = localStorage.getItem("delivery"), o = JSON.parse(n); if ("success" == l.purchase) if ("success" == t.logIn) if ("" == o.street || "" == o.town || "" == o.county || "" == o.eircode || "" == o.iban || "" == o.cvcNumber || "" == o.expiryDate) { (i = document.createElement("div")).setAttribute("class", "alert alert-danger"), i.setAttribute("role", "alert"), i.innerHTML = "You must fill in all delivery details in order to complete your purchase", document.getElementById("checkOutAlert").appendChild(i) } else { var r = localStorage.getItem("accountDetails"), c = JSON.parse(r); (i = document.createElement("div")).setAttribute("class", "alert alert-success"), i.setAttribute("role", "alert"), i.innerHTML = "Purchase Complete. " + c.firstName + ", your items will be delivered to " + o.street + ", " + o.town + ", " + o.county + ", " + o.eircode, document.getElementById("checkOutAlert").appendChild(i); const e = document.getElementsByClassName("remove"); for (let t = 0; t < e.length; t++)e[t].click() } else if ("failed" == t.logIn) { var i; (i = document.createElement("div")).setAttribute("class", "alert alert-danger"), i.setAttribute("role", "alert"), i.innerHTML = "You must successfully log into your account in order to complete your purchase", document.getElementById("checkOutAlert").appendChild(i) } } cartNum.innerText = x.count;