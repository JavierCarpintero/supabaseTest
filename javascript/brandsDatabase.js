import * as sup from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm' // ¡¡ +esm !!
import * as create from "./elementsModule.js";

const supabaseUrl = 'https://xmsqsdjlmyyrfnnttulz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtc3FzZGpsbXl5cmZubnR0dWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MTY5NjMsImV4cCI6MjA0MTk5Mjk2M30.x4CJmeazVRy1rmZIN2wVg1RuV7sI_P7EeYMe0khD8Go'
const supabase = sup.createClient(supabaseUrl, supabaseKey)
const tableName = 'BrandsList'

const { data, error } = await supabase
    .from(tableName)
    .select()
    .order('name')

for (let i = 0; i < data.length; i++) {
    const row = [data[i].name, data[i].style]
    create.addDBRow(row, row[0])
}

// Table Name
localStorage.setItem('database', tableName)

// MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("filterButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

