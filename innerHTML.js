//Write a function that creates a HTML UL using a template for every HTML LI. 
//    The source of the list should an array of elements. Replace all placeholders marked 
//    with –{…}–   with the value of the corresponding property of the object

//my HTML looks like this:
//<div data-type="template" id="list-item">
// <strong>-{name}-</strong> <span>-{age}-</span>
//</div>
//<input type="button" value="Load HTML" onclick="test()" /> //call my function on click because JS is called when HTML is loaded

function test() {
    var people = [{ name: ' Kolyo Terorista ', age: 50 },
              { name: ' Gosho Traktorista ', age: 60 },
              { name: ' Mitio Bagerista ', age: 55 }];
    var template = document.getElementById("list-item").innerHTML;
    var peopleList = generateList(people, template);
    document.write(peopleList);
}

function generateList(ppl, tmpl) {
    tmpl = new String(tmpl); //parse to string
    tmpl = tmpl.replace(/<strong>/g, '<li><strong>'); //add <li> tag
    tmpl = tmpl.replace(/<\/span>/g, '</span></li>'); //add</li> tag
    var list = new String('<ul>');//string for keepen the result
    for (var i in ppl) {
        var currentLI = tmpl.replace('-{name}-', ppl[i].name);
        currentLI = currentLI.replace('-{age}-', ppl[i].age);
        list += currentLI;
    }
    list += '</ul>';
    return list;
}
