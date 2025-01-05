import * as sup from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm' // ¡¡ +esm !!

const supabaseUrl = 'https://xmsqsdjlmyyrfnnttulz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtc3FzZGpsbXl5cmZubnR0dWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MTY5NjMsImV4cCI6MjA0MTk5Mjk2M30.x4CJmeazVRy1rmZIN2wVg1RuV7sI_P7EeYMe0khD8Go'
const supabase = sup.createClient(supabaseUrl, supabaseKey)
let users = supabase.auth

async function signInWithEmail(email, password) {
    const {data, error} = await users.signInWithPassword({email: email, password: password})
    if(error == null){
        console.log("Succesful Logging")
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        document.getElementById("errorMessage").style.display = "none"
        document.getElementById("myModal").style.display = "none"

        sessionStorage.setItem("email", email)
        sessionStorage.setItem("password", password)
    }else{
        console.log("Wrong email or password")
        document.getElementById("password").value = ""
        document.getElementById("errorMessage").style.display = "block"
    }
}

function loginAsAdmin(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    // console.log("Hola, " + sessionStorage.getItem("email") + " tu contraseña es: " + sessionStorage.getItem("password"))

    signInWithEmail(email, password)


}

document.getElementById("submit").addEventListener("click", loginAsAdmin)


