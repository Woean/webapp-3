
// creates and returns complete overview page with HTML and CSS reference
function getError() {

    return `<!DOCTYPE html>
		<html>
		    <head>
				<meta charset="utf-8">
				<link rel="stylesheet" href="/styles/style.css" />
			</head>
			<body>
				<script>
					alert("Vortragender existiert bereits, Vorgang wurde abgebrochen");
					window.location.href = "/";
				</script>
			</body>
		</html>`
}

module.exports = getError;
