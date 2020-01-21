
// creates and returns complete overview page with HTML and CSS reference
function getList(notes) {

    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Team Sprintify</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="/styles/style.css" />
          
        </head>
        <body>
          
            
            <div id="hideButtons">
            
            <script>
            
            function searchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("input");

    filter = input.value.toUpperCase();
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");


    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        // Hide the row initially.
        tr[i].style.display = "none";

        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            cell = tr[i].getElementsByTagName("td")[j];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}

function printTable() {
    document.getElementById("hideButtons").style.visibility = "hidden";
    window.print();
    document.getElementById("hideButtons").style.visibility = "visible";
}


            
</script>
            
            
         <div class="row">
            <div class="column">
            
              <h1 id="ueberschrift">Verwaltungssystem: Vortragende</h1>
  
 
        
            <div id="new">
                <label id="newLabel">Neuer Eintrag: </label>
                <a href="/new"><img class="icon" src="/images/new.png" alt="Eintrag hinzufügen" title="Eintrag hinzufügen" /></a>
                </br></br>
            </div>
            </div>
            
             <div class="column">
             
             
            
           
             <label for="input" id="searchlabel"> Suche: <input type="text" id="input" onkeyup="searchFunction()" ></label>
             <div id="printButton">
                <input id = "inputPrintButton" type="button" onclick="printTable()" value="Tabelle drucken" />
                </br></br>
            </div>
            
           
           
            
            
</div>
            <div class="column">
            
            <img src="/images/FHJ_Logo_100mm_rgb_web.png" alt="logo FH Joanneum" id="logofh">
</div>
            
            </div>
            
            </div>
            <table id="table1">
                <tr id="tableheader">
                <th>ID</th><th>Vorname</th><th>Nachname</th><th>Department</th><th>Büro</th><th>Arbeitszeit</th><th colspan="2">Aktionen</th>
                </tr>
                
                ${notes.map(createRow).join('')}      
                
            </table>
        </body>
        </br></br>
        <div>Icons erstellt von <a href="https://www.flaticon.com/de/autoren/google" title="Google">Google</a> für <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com</a></div>
    </html>`;
}

// how array map works https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// create each row with TR and TD Elements
function createRow(note) {

    return `<tr>
        <td>${note.id}</td>
        <td>${note.firstname}</td>
        <td>${note.lastname}</td>
        <td>${note.department}</td>
        <td>${note.office}</td>
        <td>${note.worktime}</td>
        <td><a href="/delete/${note.id}"><img class="icon" src="/images/delete.png" alt="Eintrag löschen" title="Eintrag löschen" onclick="return confirm('Wollen Sie den Eintrag wirklich löschen?');"/></a></td>
        <td><a href="/edit/${note.id}"><img class="icon" src="/images/edit.png" alt="Eintrag bearbeiten" title="Eintrag bearbeiten" /></a></td>
    </tr>`;
}







module.exports = getList;







