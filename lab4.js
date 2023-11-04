function perevirka(form) {
    var totalScore = 0;

    var q1Values = form.elements['question1'];
    for (var i = 0; i < q1Values.length; i++) {
        if (q1Values[i].checked) {
            if (q1Values[i].value === 'true') {
                totalScore += 1;
            }
        }
    }

    var q2Values = form.elements['question2'];
    for (var j = 0; j < q2Values.length; j++) {
        if (q2Values[j].checked) {
            if (q2Values[j].value === 'true') {
                totalScore += 1;
            }
        }
    }

    var q3Values = form.elements['question3'];
    var correctAnswersQ3 = ['стіл', 'телефон'];
    for (var k = 0; k < q3Values.length; k++) {
        if (q3Values[k].checked && correctAnswersQ3.includes(q3Values[k].value)) {
            totalScore += 1;
        }
    }

    var q4Values = form.elements['question4'];
    var correctAnswersQ4 = ['складносурядні', 'складнопідрядні'];
    for (var l = 0; l < q4Values.length; l++) {
        if (q4Values[l].checked && correctAnswersQ4.includes(q4Values[l].value)) {
            totalScore += 1;
        }
    }

    var q5Value = form.elements['question5'].value;
    if (q5Value === 'прапор') {
        totalScore += 1;
    }

    var q6Value = form.elements['question6'].value;
    if (q6Value === 'стопа') {
        totalScore += 1;
    }

    var q7Value = form.elements['text'].value;
    if (q7Value === '1991') {
        totalScore += 1;
    }

    var display = form.elements['display'];
    display.value = 'Ваш загальний бал: ' + totalScore;
}
