function dynamicDate(){
    const today = new Date();

    let days = ["Sun ,", "Mon ,", "tue ,", "Wed ,", "Thu ,", "Fri ,", "Sat ,"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day= days[today.getDay()];
    const date = today.getDate();
    const month= months[today.getMonth()];
    const year = today.getFullYear();


    document.getElementById("day").innerText = day;
    document.getElementById("month-date-year").innerText = `${month} ${date} ${year}`;
}

dynamicDate();