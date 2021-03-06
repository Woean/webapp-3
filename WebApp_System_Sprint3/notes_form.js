function getForm(notes, id) {

    console.log("form")
    console.log(notes)
    console.log(id)

    // prepare empty note
    let note = {
        id: '',
        firstname: '',
        lastname: '',
        department:'',
        office: '',
        worktime: ''

    };

    // define different header(s)
    let noteHeader = "Vortragende(n) hinzufügen/bearbeiten";

    // check if note alredy exists and fill note object
    if (id) {
        note = notes.find(nte => nte.id == parseInt(id));

        console.log("find note")
        console.log(note)

        noteHeader = "Vortragende(n) bearbeiten";


    }

    // build form within javascript
    const form = `<!DOCTYPE html>
<html>
    <head>
        <title>${noteHeader}</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/styles/style.css" />
    </head>
    <body onload="loadOption('${note.worktime}')">
        <h1>${noteHeader}</h1>
        <div id="back">
            <button id="backButton" onclick="window.location.href = '/'">zurück zur Haupseite</button>
            <br>
            <br>
        </div>
        <form name="AddEdit" id="addEdit" action="/save" method="POST">
            <input type="hidden" id="id" name="id" value="${note.id}" />
            <div>
                <label for="firstname">Vorname</label><br>
                <input  id="firstname" name="firstname" placeholder="Max" value="${note.firstname}" required pattern="[A-zÜÖÄüöäß]+" onkeypress="return checkInputLetters(event, 'lblErrorFirstname')" onchange="askUser()"><br>
                <span id="lblErrorFirstname" style="color: red"></span>
            </div>
            <br>
            <div>
                <label for="lastname">Nachname</label><br>
                <input id="lastname" name="lastname" placeholder="Mustermann" value="${note.lastname}" required pattern="[A-zÜÖÄüöäß]+[-]?[A-zÜÖÄüöäß]+" onkeypress="return checkInputLetters(event, 'lblErrorLastname')" onfocusout="checkCompleteInput('lblErrorLastname')" onchange="askUser()"><br>
                <span id="lblErrorLastname" style="color: red"></span>
            </div>
            <br>
            <div>
                <label for="department">Department</label><br>
                <input id="department" name="department" placeholder="Medien & Design" value="${note.department}" required pattern="[A-zÜÖÄüöäß]+([ ]?[,&-]?[ ]?[A-zÜÖÄüöäß]+)*" onkeypress="return checkInputLetters(event, 'lblErrorDepartment')" onfocusout="checkCompleteInput('lblErrorDepartment')" onchange="askUser()"><br>
                <span id="lblErrorDepartment" style="color: red"></span>
            </div>
            <br>
            <div>
                <label for="office">Büro</label><br>
                <input id="office" name="office" placeholder="K.WS46B.103"  value="${note.office}" required pattern="[A-Z]\.[A-z0-9]{5}\.[A-z0-9]{3,4}" onkeypress="return checkInputLetters(event, 'lblErrorOffice')" onfocusout="checkCompleteInput('lblErrorOffice')" onchange="askUser()"><br>
                <span id="lblErrorOffice" style="color: red"></span>
            </div>
            <br>
             <div>
                <label for="worktime">Arbeitszeit</label><br>
                <select id="worktime" name="worktime" required onchange="askUser()">
                    <option id="none" disabled hidden></option>
                    <option id="fulltime" value="Vollzeit">Vollzeit</option>
                    <option id="halftime" value="Teilzeit">Teilzeit</option>
                </select>            
            </div>
            <br>
            <button type="submit" id="save" onclick="window.onbeforeunload = null;">Speichern</button><button type="reset" id="reset" onclick="window.onbeforeunload = null; return confirm('Wollen Sie wirklich alle Einträge zurücksetzen?')">Zurücksetzen</button>
			
			<script>
	function askUser() {		
	    window.onbeforeunload = function(){
            return 'Ihre Änderungen werden eventuell nicht gespeichert.';
        };		
	}
	
    function loadOption(worktime){
        console.log(worktime);
        if(worktime.includes("Vollzeit")) {
            document.getElementById('fulltime').selected = 'selected';
        } else if (worktime.includes("Teilzeit")){
            document.getElementById('halftime').selected = 'selected';
        } else {
            document.getElementById('none').selected = 'selected';
        }
    }
    
				function checkInputLetters(e, label) {
				    var keyCode = e.keyCode || e.which;
                    var labelError = document.getElementById(label); 
				    
				    if(label.includes("lblErrorDepartment")) {
				        var regex = /^[,A-zÜÖÄüöäß &-]+$/;     
                        var text = "Es sind nur Buchstaben/Leerzeichen/&/-/, erlaubt."
                        var length = document.forms["AddEdit"]["department"].value.length;
                    } else if(label.includes("lblErrorFirstname")) {
                        var regex = /^[A-zÜÖÄüöäß]+$/;
                        var text = "Es sind nur Buchstaben erlaubt.";
                        var length = document.forms["AddEdit"]["firstname"].value.length;
                    } else if(label.includes("lblErrorLastname")) {
                        var regex = /^[A-zÜÖÄüöäß-]+$/;
                        var text = "Es sind nur Buchstaben/- erlaubt.";
                        var length = document.forms["AddEdit"]["lastname"].value.length;
                    }  else if(label.includes("lblErrorOffice")) {
                        var regex = /^[A-z0-9.]+$/;
                        var text = "Es sind nur Buchstaben/Zahlen/. erlaubt.";
                        var length = document.forms["AddEdit"]["lastname"].value.length;
                    }
				    
                    var isValid = regex.test(String.fromCharCode(keyCode));
                    if (!isValid) {
                        labelError.innerHTML = text;
                    } 
                    else if (length >= 30) {
                        labelError.innerHTML = "Die Eingabe darf nicht länger als 30 Zeichen sein.";
                        isValid=false;
                    } 
                    else {
                        labelError.innerHTML = "";
                    }
             
                    return isValid;
                }
                
                function checkCompleteInput(label) {
				    var labelError = document.getElementById(label);
				    if(label.includes("lblErrorDepartment")) {
				        var value = document.getElementById("department").value;
				        var regex = /^[A-zÜÖÄüöäß]+([ ]?[,&-]?[ ]?[A-zÜÖÄüöäß]+)*$/;
				        var text = "Beispiel für eine gültige Eingabe: Medien & Design";
				    } else if(label.includes("lblErrorOffice")) {
				        var value = document.getElementById("office").value;
				        var regex = /^[A-Z]\.[A-z0-9]{5}\.[A-z0-9]{3,4}$/;
				        var text = "Beispiel für eine gültige Eingabe: K.WS46B.103";
				    } else if(label.includes("lblErrorLastname")) {
				        var value = document.getElementById("lastname").value;
				        var regex = /^[A-zÜÖÄüöäß]+[-]?[A-zÜÖÄüöäß]+$/;
				        var text = "Beispiel für eine gültige Eingabe: Mustermann oder Mustermann-Jedermann";
				    }
				    
				    var isValid = regex.test(value);
				    
				    if(!isValid) {
				        labelError.innerHTML = text;
				    }
				    else {
                        labelError.innerHTML = "";
                    }
                }



			</script>
            
        </form>
    </body>
</html>`;
  return form;
}

module.exports = getForm;
