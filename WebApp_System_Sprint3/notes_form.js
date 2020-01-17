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
    <body>
        <h1 id="formüber">${noteHeader}</h1>
        <div id="back">
            <button id="backButton" onclick="window.location.href = '/'">zurück zur Haupseite</button><br><br>
        </div>
        <form name="AddEdit" id="addEdit" action="/save" onsubmit="return validateForm()" method="POST">
            <input type="hidden" id="id" name="id" value="${note.id}" />
            <div>
                <label for="firstname">Vorname</label><br>
                <textarea type="text" id="firstname" name="firstname" required onkeypress="return checkInputLetters(event, 'lblErrorFirstname')">${note.firstname}</textarea><br>
                <span id="lblErrorFirstname" style="color: red"></span>
            </div>
            <br>
            <div>
                <label for="lastname">Nachname</label><br>
                <textarea type="text" id="lastname" name="lastname" required onkeypress="return checkInputLetters(event, 'lblErrorLastname')">${note.lastname}</textarea><br>
                <span id="lblErrorLastname" style="color: red"></span>
            </div>
            <br>
            <div>
                <label for="department">Department</label><br>
                <textarea type="text" id="department" name="department" required onkeypress="return checkInputLetters(event, 'lblErrorDepartment')">${note.department}</textarea><br>
                <span id="lblErrorDepartment" style="color: red"></span>
            </div>
            <br>
            <div>
                <label for="office">Büro</label><br>
                <textarea type="text" id="office" name="office" required onkeypress="return checkInputNumbers(event, 'lblErrorOffice')">${note.office}</textarea><br>
                <span id="lblErrorOffice" style="color: red"></span>
            </div>
            <br>
             <div>
                <label for="worktime">Arbeitszeit</label><br>
                <textarea type="text" id="worktime" name="worktime" required onkeypress="return checkInputLetters(event, 'lblErrorWorktime')">${note.worktime}</textarea><br>
                <span id="lblErrorWorktime" style="color: red"></span>
            </div>
            <br>
            <button type="submit" id="save">Speichern</button><button type="reset" id="reset" onclick="return confirm('Wollen Sie wirklich alle Einträge zurücksetzen?')">Zurücksetzen</button>
			
			<script>
				function validateForm() {
					var x = document.forms["AddEdit"]["firstname"].value;
					if (x.length>30) {
						alert("Vorname darf nicht länger als 30 Zeichen sein.");
						return false;
					}
					var x = document.forms["AddEdit"]["lastname"].value;
					if (x.length>30) {
						alert("Nachname darf nicht länger als 30 Zeichen sein.");
						return false;
					}
					var x = document.forms["AddEdit"]["department"].value;
					if (x.length>30) {
						alert("Department darf nicht länger als 30 Zeichen sein.");
						return false;
					}
					var x = document.forms["AddEdit"]["office"].value;
					if (x.length>3) {
						alert("Büro darf nicht länger als 3 Zeichen sein.");
						return false;
					}
					var x = document.forms["AddEdit"]["worktime"].value;
					if (x.length>30) {
						alert("Arbeitszeit darf nicht länger als 30 Zeichen sein.");
						return false;
					}
					return true;
				}
				
				function checkInputLetters(e, label) {
				    var keyCode = e.keyCode || e.which;
				    var labelError = document.getElementById(label); 
				    
				    if(label.includes("lblErrorDepartment")) {
				        var regex = /^[A-Za-zÜÖÄüöäß ]+$/;     
				        var text = "Es sind nur Buchstaben/Leerzeichen erlaubt."
                    } else {
                        var regex = /^[A-Za-zÜÖÄüöäß]+$/;
                        var text = "Es sind nur Buchstaben erlaubt.";
                    }
				    
                    var isValid = regex.test(String.fromCharCode(keyCode));
                    if (!isValid) {
                        labelError.innerHTML = text;
                    } else {
                        labelError.innerHTML = "";
                    }
             
                    return isValid;
                }
                
                function checkInputNumbers(e, label) {
				    
				    var keyCode = e.keyCode || e.which;
				    var labelError = document.getElementById(label);
          
                    var regex = /^[0-9]+$/;

                    var isValid = regex.test(String.fromCharCode(keyCode));
                    if (!isValid) {
                        labelError.innerHTML = "Es sind nur Zahlen erlaubt.";
                    } else {
                        labelError.innerHTML = "";
                    }
             
                    return isValid;
                }
			</script>
            
        </form>
    </body>
</html>`;
  return form;
}

module.exports = getForm;
