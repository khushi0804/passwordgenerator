var password = document.querySelector('#Password');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var num = "1234567890";
var symbol = "!@#$%(){}><?/&^[]";
var btn = document.querySelector("#btn");
var img = document.querySelector("#img");
var length = 12;
var all = uppercase + lowercase + num + symbol;

function createpassword() {
    var pass = "";
    pass = pass + uppercase[Math.floor(Math.random() * uppercase.length)];
    pass = pass + lowercase[Math.floor(Math.random() * lowercase.length)];
    pass = pass + symbol[Math.floor(Math.random() * symbol.length)];
    pass = pass + num[Math.floor(Math.random() * num.length)];
    while (length > pass.length) {
        pass = pass + all[Math.floor(Math.random() * all.length)]
    }
    password.value = pass

}
btn.addEventListener("click", function() {
    createpassword();
    password.style.opacity = "0.7"

})

function copy() {
    password.select();
    document.execCommand("copy");
}
img.addEventListener("click", function() {
    copy();
})