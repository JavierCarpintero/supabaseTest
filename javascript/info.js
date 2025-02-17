import * as sup from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm' // ¡¡ +esm !!

const supabaseUrl = 'https://xmsqsdjlmyyrfnnttulz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtc3FzZGpsbXl5cmZubnR0dWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MTY5NjMsImV4cCI6MjA0MTk5Mjk2M30.x4CJmeazVRy1rmZIN2wVg1RuV7sI_P7EeYMe0khD8Go'
const supabase = sup.createClient(supabaseUrl, supabaseKey)

let database = localStorage.getItem('database')

const { data, error } = await supabase
    .from(database)
    .select()
    .eq('name', localStorage.getItem('info'))

localStorage.clear();

var row
var title
var information
var link

switch (database) {
    case "BrandsList":
        row = [data[0].name, data[0].founder, data[0].url, data[0].year, data[0].description]
        document.getElementById('pageName').innerText = "THE WEAR CULT / " + row[0]
    
        title = document.createElement("h1")
        title.innerHTML = row[0]
        document.getElementById("info").appendChild(title)
    
        information = document.createElement("p")
        information.style = 'width: 60%'
        link = document.createElement("a")
        link.innerText = 'GO TO WEBSITE'
        link.setAttribute('title', row[2])
        link.setAttribute('href', row[2])
        link.setAttribute('class', 'infoLinkButton')
    
        if(row[4]==null){
            row[4]='Sin descripción aún.'
        }
    
        information.innerHTML = 'FOUNDER: ' + row[1] + '<br> YEAR: ' + row[3] + '<br><br>' + row[4]
        document.getElementById("info").appendChild(information)
        document.getElementById("info").appendChild(link)
        break;
    case "StoresList":
        row = [data[0].name, data[0].country, data[0].url, data[0].location]
        document.getElementById('pageName').innerText = "THE WEAR CULT / " + row[0]
    
        title = document.createElement("h1")
        title.innerHTML = row[0]
        document.getElementById("info").appendChild(title)
    
        information = document.createElement("p")
        information.style = 'width: 60%'
        link = document.createElement("a")
        link.innerText = 'GO TO WEBSITE'
        link.setAttribute('title', row[2])
        link.setAttribute('href', row[2])
        link.setAttribute('class', 'infoLinkButton')
        information.innerHTML = 'COUNTRY: ' + row[1] + '<br> LOCATION: ' + row[3]
        document.getElementById("info").appendChild(information)
        document.getElementById("info").appendChild(link)
        break;
    case "CultureList":
        row = [data[0].name, data[0].type, data[0].author, data[0].description, data[0].url]
        document.getElementById('pageName').innerText = "THE WEAR CULT / " + row[0]
    
        title = document.createElement("h1")
        title.innerHTML = row[0]
        document.getElementById("info").appendChild(title)
    
        information = document.createElement("p")
        information.style = 'width: 60%'

        if(row[3]=="null"){
            row[3] ='Sin descripción aún.' 
        }

        if(row[1]=="Press"){
            information.innerHTML = 'Type: ' + row[1] + '<br><br>' + row[3]
            link = document.createElement("a")
            link.innerText = 'Go To Website'
            link.setAttribute('title', row[4])
            link.setAttribute('href', row[4])
            link.setAttribute('class', 'infoLinkButton') 
        }else{
            information.innerHTML = 'TYPE: ' + row[1] + "<br> AUTHOR: " + row[2] + '<br><br>' + row[3]
        }

        document.getElementById("info").appendChild(information)
        document.getElementById("info").appendChild(link)
        break;
}


