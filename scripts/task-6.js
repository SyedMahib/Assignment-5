document.getElementById("task-6-btn").addEventListener("click", 
    function(event){
        event.preventDefault();

        const taskLeft = document.getElementById("task-left").innerText;
        const convertedTaskLeft = parseInt(taskLeft);
        const taskDone = document.getElementById("task-done").innerText;
        const convertedTaskDone = parseInt(taskDone);
        const task6Btn = document.getElementById("task-6-btn");
        const task6Title = document.getElementById("task-6-title").innerText;


        const done = convertedTaskDone + 1;
        // console.log(add);
        document.getElementById("task-done").innerText = done;

        const left = convertedTaskLeft - 1;
        // console.log(left);
        document.getElementById("task-left").innerText = left;


        alert("Board updated succesfully");

        if(left === 0){
            alert("Congrats!!! You have completed all the current task");
        }

        task6Btn.setAttribute("disabled",true);


        const ul = document.getElementById("activity-items");
        const li = document.createElement("li");
        li.innerText = `You have completed the Task ${task6Title} at ${new Date().toLocaleTimeString()}`;
        // console.log(li);

        li.style.backgroundColor = "#F4F7FF";
        li.style.margin = "24px";
        li.style.padding = "24px";
        li.style.padding = "24px";
        li.style.borderRadius = "8px";
        li.style.fontWeight = "500";

        ul.appendChild(li);

})