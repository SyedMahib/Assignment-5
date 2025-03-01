document.getElementById("clear-history-btn").addEventListener("click", 
    function(event){
        event.preventDefault();

        const activityItems = document.getElementById("activity-items");
        activityItems.innerHTML = "";
})