const contSquare = document.querySelector(".containerSquare");

for (let i = 1; i <= 100; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.append(i);
    contSquare.append(div);

    if (i % 15 === 0) { 
        div.classList.add("fizzbuzz");
        div.innerHTML = `fizzbuzz`;
    }
    else if (i % 3 === 0) {
        div.classList.add("fizz");
        div.innerHTML = `fizz`;
    }
    else if (i % 5 === 0) {
        div.classList.add("buzz");
        div.innerHTML = `buzz`;
    }
}