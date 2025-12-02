document.addEventListener("DOMContentLoaded", () => {
    
    const velemenyForm = document.querySelector(".velemenyform");
    const velemenyekGrid = document.querySelector(".velemenyek-grid");
    const errorDiv = document.querySelector(".errormajd"); 

    const atlagDoboz = document.querySelector(".atlag");

    function atlagSzamolas() {
        const kartyak = document.querySelectorAll('.velemeny-kartya');
        let osszCsillag = 0;
        let kartyakSzama = kartyak.length;
        kartyak.forEach(kartya => {
            const csillagDiv = kartya.querySelector('.velemeny-ertekeles');

            const csillagok = csillagDiv.innerText.split("⭐").length - 1;
            
            osszCsillag += csillagok;
        });

        if (kartyakSzama > 0) {
            let atlag = osszCsillag / kartyakSzama;
            atlagDoboz.innerText = `Átlag: ${atlag.toFixed(1)} / 5`; 
        } else {
            atlagDoboz.innerText = "Még nincs értékelés";
        }
    }

    atlagSzamolas();

    velemenyForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        errorDiv.innerText = "";
        
        const nevInput = document.getElementById("vnev");
        const csillagInput = document.getElementById("csillag");
        const szovegInput = document.getElementById("velemenyp");

        const nev = nevInput.value.trim() || "Vendég";
        const szoveg = szovegInput.value.trim(); 
        const csillagSzam = parseInt(csillagInput.value);

        if (szoveg === "") {
            errorDiv.innerText = "Fejtsd ki!";
            errorDiv.style.color = "red";
            errorDiv.style.textAlign = "center";
            errorDiv.style.fontWeight = "bold";
            errorDiv.style.marginTop = "15px";
            return;
        }

        const csillagString = "⭐".repeat(csillagSzam);

        const most = new Date();
        const ev = most.getFullYear();
        let honap = most.getMonth() + 1;
        if (honap < 10) honap = "0" + honap; 
        const nap = most.getDate();
        const datumFormazva = `${ev}.${honap}.${nap}.`;

        const ujKartya = document.createElement("div");
        ujKartya.classList.add("velemeny-kartya");

        ujKartya.innerHTML = `
            <div class="velemeny-fejlec">
                <span class="velemeny-nev">${nev}</span>
                <div class="velemeny-ertekeles">${csillagString}</div>
            </div>
            <p class="velemeny-szoveg">"${szoveg}"</p>
            <span class="velemeny-datum">${datumFormazva}</span>
        `;

        velemenyekGrid.appendChild(ujKartya);
        atlagSzamolas();

        errorDiv.innerText = "Köszönjük a véleményed!";
        errorDiv.style.color = "green";
        errorDiv.style.textAlign = "center";
        errorDiv.style.fontWeight = "bold";
        errorDiv.style.marginTop = "15px";

        velemenyForm.reset();
    });
});