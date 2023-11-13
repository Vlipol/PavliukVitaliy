function compareStrings() {
    var str1 = document.getElementById('str1').value;
    var str2 = document.getElementById('str2').value;
    var compareResult = document.getElementById('compareResult');
    
    if (str1.length > str2.length) {
        compareResult.textContent = "1";
    } else if (str1.length < str2.length) {
        compareResult.textContent = "-1";
    } else {
        compareResult.textContent = "0";
    }
}

function findCharIndexesAndCount() {
    var str = document.getElementById('strChar').value;
    var char = document.getElementById('char').value;
    var charIndexes = document.getElementById('charIndexes');
    var charCount = document.getElementById('charCount');
    var indexes = [];
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indexes.push(i);
            count++;
        }
    }
    
    charIndexes.textContent = indexes.join(', ');
    charCount.textContent = count;
}

function capitalizeFirstChar() {
    var str = document.getElementById('strCapitalize').value;
    var capitalizeResult = document.getElementById('capitalizeResult');
    var result = str.charAt(0).toUpperCase() + str.slice(1);
    capitalizeResult.textContent = result;
}
