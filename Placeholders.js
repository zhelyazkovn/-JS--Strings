//Write a function that formats a string using placeholders:
//    The function should work with up to 30 placeholders and all types.

//        var str = stringFormat("Hello {0}!","Peter");
//        //str = "Hello Peter!";

//        var format = "{0}, {1}, {0} text {2}";
//var str = stringFormat(format,1,"Pesho","Gosho");
//        //str = "1, Pesho, 1 text Gosho"

function string_format(text)
{
    var positions = text.match(/{\d}/g); //get every text with format {number} makes array
    var formatted_text = text;

    for (var x in positions)
    {
        var replace_special_chars = positions[x].replace(/([()[{*+.$^\\|?])/g, '\\$1');
        var regex = RegExp(replace_special_chars, 'g');
        var next = parseInt(x) + 1;

        formatted_text = formatted_text.replace(regex, arguments[next]);
    }
    return formatted_text;
}

var text = string_format('my name is {0} and I am {1} years old', 'Nikolay', 25);

console.log(text);
