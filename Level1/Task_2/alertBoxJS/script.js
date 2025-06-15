let today = new Date();
let hours = today.getHours();

if (hours >= 5 && hours < 12) {
    alert("Good Morning !");
} else if (hours >= 12 && hours < 17) {
    alert("Good Afternoon !");
} else if (hours >= 17 && hours < 21) {
    alert("Good Evening !");
} else {
    alert("Good Night !");
}
