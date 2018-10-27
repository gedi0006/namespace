var GEDI006 = {

    init: function () {

        let div = document.createElement("div");

        div.className = "box"; //add square class to div
        div.textContent = "gedi006"; //add text in div
        let getBoxes = document.getElementById("boxes");
        getBoxes.appendChild(div);



        div.addEventListener("click", function () {

            div.style.borderColor = "red";
            div.style.backgroundColor = "blue";
            div.style.color = "green";



        });

        div.addEventListener("mouseover", function () {
            div.classList.toggle("highlight");


        });


        div.addEventListener("mouseout", function () {

            div.classList.toggle("highlight");
            div.removeAttribute('style');
        });



    }
};
