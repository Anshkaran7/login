var username = document.getElementById('username')
var loginform = document.getElementById('login-form')
// console.log(username)

username.addEventListener('input',function(event){
    var currentValue = event.target.value
    currentValue = currentValue.toUpperCase()
    console.log(currentValue)
    username.value = currentValue
})

username.addEventListener ('focus' , function(){
    console.log("Element focussed")
})

username.addEventListener("blur" , function(){
    console.log("Element Lost Focus")
})

loginform.addEventListener("submit" , function(e){
    alert("Login succesfully")
    e.preventDefault()
})