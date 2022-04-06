let numStylests = 0;
//Populate the stylest cards
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        let response = JSON.parse(xhttp.responseText);
        let stylest = response.stylest;
        var output = "";
        numStylests = stylest.length;
        for (var i = 0; i < stylest.length; i++) {
            let isVisable = "";
            if (i === 0) {
                isVisable = "isVis";
            }
            output += `<div class="stylest-card ${isVisable} " id="_card">
            <div class="stylest-image">
                <img class="profile-image" src="./images/${stylest[i].image}" alt="Ivy">
            </div>
             <div class="stylest-info" id="stylest-info">
                <ul class="side-card">
                    <li class="stylest-name">
                        <h3 id="name">${stylest[i].firstName} ${stylest[i].lastName}</h3>
                    </li>

                    <li class="stylest-about">
                        <p class="stylest-text" id="about">${stylest[i].about}
                        </p>
                    </li>
                    <div class="book-link">
                        <a href="${stylest[i].bookingLink}">BOOK</a>
                    </div>

                </ul>
            </div>
            <div class="stylest-spec">
                <h6 id="spec">${stylest[i].spec}</h6>
            </div>
        </div>`
        }
        let docElement = document.getElementById('card-container').innerHTML = output;

    }

};
xhttp.open("GET", "./json/stylest.json", true);
xhttp.send();