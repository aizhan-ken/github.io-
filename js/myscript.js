var score = 0; // Set sctore to 0
var total = 5; // Total number of questions
var point = 1; // Points per correct answer
var highest = total * point;

//Initializer 
function init() {
	sessionStorage.setItem('a1', 'b');
	sessionStorage.setItem('a2', 'a');
	sessionStorage.setItem('a3', 'c');
	sessionStorage.setItem('a4', 'd');
	sessionStorage.setItem('a5', 'd');
	sessionStorage.setItem('a6', 'a');
}


$(document).ready(function(){
	// hiding the quetsions
	$('.questionForm').hide();

	$('#q1').show();

	$('#q1 #submit').click(function(){
		$('.questionForm').hide();
		process('q1');
		$('#q2').fadeIn(300);
		return false;
	});

	$('#q2 #submit').click(function(){
		$('.questionForm').hide();
		process('q2');
		$('#q3').fadeIn(300);
		return false;
	});

	$('#q3 #submit').click(function(){
		$('.questionForm').hide();
		process('q3');
		$('#q4').fadeIn(300);
		return false;
	});

	$('#q4 #submit').click(function(){
		$('.questionForm').hide();
		process('q4');
		$('#q5').fadeIn(300);
		return false;
	});

	$('#q5 #submit').click(function(){
		$('.questionForm').hide();
		process('q5');
		$('#q6').fadeIn(300);
		return false;
	});

	$('#q6 #submit').click(function(){
		$('.questionForm').hide();
		process('q6');
		$('#results').fadeIn(300);
		return false;
	});
});

// process the answers
function process(q) {
	if(q == "q1") {
		var submitted = $('input[name=q1]:checked').val();
		if(submitted == sessionStorage.a1) {
			score++;
		}
	}

	if(q == "q2") {
		var submitted = $('input[name=q2]:checked').val();
		if(submitted == sessionStorage.a2) {
			score++;
		}
	}

	if(q == "q3") {
		var submitted = $('input[name=q3]:checked').val();
		if(submitted == sessionStorage.a3) {
			score++;
		}
	}

	if(q == "q4") {
		var submitted = $('input[name=q4]:checked').val();
		if(submitted == sessionStorage.a4) {
			score++;
		}
	}

	if(q == "q5") {
		var submitted = $('input[name=q5]:checked').val();
		if(submitted == sessionStorage.a5) {
			score++;
		}
	}

	if(q == "q6") {
		var submitted = $('input[name=q6]:checked').val();
		if(submitted == sessionStorage.a6) {
			score++;
		}
		$('#results').html('<h3>Your final score is: '+score+' out of 6</h3><a href="project.html">Take Quiz again</a>');
	}
	return false;

}

// Event listener
window.addEventListener('load', init, false);
