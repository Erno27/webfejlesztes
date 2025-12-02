const Kepessegek = {
    "Félix": ["rovidvagas", "hosszuvagas", "gepihajvagas", "szakall"],
    "Sánel": ["rovidvagas", "hosszuvagas", "gepihajvagas", "szakall", "festes", "kutya"],
    "Icu-néni": ["rovidvagas", "hosszuvagas", "gepihajvagas", "novella"]
};

const nyitvatartas = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

document.addEventListener("DOMContentLoaded", () => {

    const szaki = document.getElementById("szakember");
    const szolgi = document.getElementById("szolgaltatas");
    const idoInput = document.getElementById("ido");

    const form = document.querySelector(".foglalas-form");
    const errorDiv = document.querySelector(".errorfog");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        errorDiv.innerText = "";
        errorDiv.style.color = "red";
        errorDiv.style.textAlign = "center";
        errorDiv.style.fontWeight = "bold";
        errorDiv.style.marginTop = "10px";

        const valasztottSzaki = szaki.value;
        const valasztottSzolgaltatas = szolgi.value;
        const idopont = idoInput.value;

        
        const oraSzam = parseInt(idopont.split(':')[0]); // Itt új nevet kapott: oraSzam
        
        
        const szakiKepessegei = Kepessegek[valasztottSzaki];
        if (!szakiKepessegei.includes(valasztottSzolgaltatas)) {
            errorDiv.innerText = "Sajnos a Szakember nem vállalja ezt a szolgáltatást";
            return;
        }


        if (!nyitvatartas.includes(oraSzam)) {
            errorDiv.innerText = "Sajnos ilyenkor az üzletünk zárva tart";
            return;
        }

        errorDiv.innerText = "Sikeres foglalás!";
        errorDiv.style.color = "green";
        
    }); 
});