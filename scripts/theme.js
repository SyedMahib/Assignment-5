document.getElementById("theme-btn").addEventListener("click", 
    function(event){
        event.preventDefault();

        function theme(){
            const R = Math.round(Math.random() * 255);
            const G = Math.round(Math.random() * 255);
            const B = Math.round(Math.random() * 255);

            return "rgb(" + R + "," + G + "," + B + ")";
        }

        document.body.style.backgroundColor = theme();
})