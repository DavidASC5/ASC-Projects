for (let i = 0; i < data.results.lenght; i++) {
    let personE1 = document.createElement("div");
    let personData = data.results[i];
    addName(personE1, personData);
    personE1.className = "person";
    document.body.appendChild(personE1);

    function addName(el, person) {
        let first = person.name.first
        let last = person.name.last
    }
}

