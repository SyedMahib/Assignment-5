document.getElementById("task-3-btn").addEventListener("click", 
    function(event){
        event.preventDefault();

        const taskLeft = document.getElementById("task-left").innerText;
        const convertedTaskLeft = parseInt(taskLeft);
        const taskDone = document.getElementById("task-done").innerText;
        const convertedTaskDone = parseInt(taskDone);
        const task3Btn = document.getElementById("task-3-btn");


        const done = convertedTaskDone + 1;
        // console.log(add);
        document.getElementById("task-done").innerText = done;

        const left = convertedTaskLeft - 1;
        // console.log(left);
        document.getElementById("task-left").innerText = left;

        task3Btn.setAttribute("disabled",true);
})