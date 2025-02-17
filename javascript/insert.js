import * as sup from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm' // ¡¡ +esm !!
import * as create from "./elementsModule.js";

const supabaseUrl = 'https://xmsqsdjlmyyrfnnttulz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtc3FzZGpsbXl5cmZubnR0dWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MTY5NjMsImV4cCI6MjA0MTk5Mjk2M30.x4CJmeazVRy1rmZIN2wVg1RuV7sI_P7EeYMe0khD8Go'
const supabase = sup.createClient(supabaseUrl, supabaseKey)

function cleanInputs(){
    document.getElementById("brandName").value = ""
    document.getElementById("brandUrl").value = ""
    var style = ''
    document.getElementById("brandFounder").value = ""
    document.getElementById("brandYear").value = ""
    document.getElementById("brandDescription").value = ""

    document.getElementById("storeName").value = ""
    document.getElementById("storeCountry").value = ""
    document.getElementById("storeLocation").value = ""
    document.getElementById("storeUrl").value = ""

    document.getElementById("itemName").value = ""    
    document.getElementById("itemAuthor").value = ""    
    document.getElementById("itemType").value = ""    
    document.getElementById("itemDescription").value = ""    
}

function changeForm(){
    cleanInputs()
    switch (sessionStorage.getItem('info')) {
        case "brands":
            document.getElementById("brandForm").style.display = "block"
            document.getElementById("storeForm").style.display = "none"
            document.getElementById("cultureForm").style.display = "none"
            break;
        case "stores":
            document.getElementById("brandForm").style.display = "none"
            document.getElementById("storeForm").style.display = "block"
            document.getElementById("cultureForm").style.display = "none"
            break;
        case "culture":
            document.getElementById("brandForm").style.display = "none"
            document.getElementById("storeForm").style.display = "none"
            document.getElementById("cultureForm").style.display = "block"
            break;
    }
}

function saveInfo(){
    let value = this.getAttribute('data-value')
    sessionStorage.setItem('info', value)
    console.log(sessionStorage.getItem('info'))
    changeForm()
}

function getButtons(){
    const buttons = document.querySelectorAll('button')
    buttons.forEach((item) => {
        item.addEventListener('click', saveInfo)
    })
}

let buttonList = setTimeout(getButtons, 1000)

async function insertBrand(){
    var name = document.getElementById("brandName").value
    var url = document.getElementById("brandUrl").value
    var style = ''
    var founder = document.getElementById("brandFounder").value
    var year = document.getElementById("brandYear").value
    var description = document.getElementById("brandDescription").value

    // console.log(name + ', ' + url + ', ' + style + ', ' + founder + ', ' + year + ', ' + description)

    const { data, error } = await supabase
        .from('BrandsList')
        .insert([
        { name: name, url: url, style: style, founder: founder, year: year, description: description},
        ])
        .select()

    if(error!=null){
        console.log("You have to be logged in to create new items.")
    }
}

async function insertStore(){
    var name = document.getElementById("storeName").value
    var url = document.getElementById("storeUrl").value
    var country = document.getElementById("storeCountry").value
    var location = document.getElementById("storeLocation").value

    // console.log(name + ', ' + url + ', ' + country + ', ' + location)

    const { data, error } = await supabase
        .from('StoreList')
        .insert([
        {name: name, url: url, country: country, location: location},
        ])
        .select()

    
    if(error!=null){
        console.log("You have to be logged in to create new items.")
    }
}

async function insertCulture(){
    var name = document.getElementById("itemName").value
    var type = document.getElementById("itemType").value
    var author = document.getElementById("itemAuthor").value
    var description = document.getElementById("itemDescription").value

    // console.log(name + ', ' + type + ', ' + author + ', ' + description + ', ' + url)

    const { data, error } = await supabase
        .from('CultureList')
        .insert([
        {name: name, type: type, author: author, description: description, url: url},
        ])
        .select()

    
    if(error!=null){
        console.log("You have to be logged in to create new items.")
    }
}

document.getElementById('brandInsert').addEventListener('click', insertBrand)
document.getElementById('storeInsert').addEventListener('click', insertStore)
document.getElementById('cultureInsert').addEventListener('click', insertCulture)
