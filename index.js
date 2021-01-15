/* Config */
const twitchTvHandle = "swervinmaximus";

/* DOM */
const container = document.querySelector(".poll");

container.style.opacity = 1;


var yes = 0;
var no = 0;

ComfyJS.Init(twitchTvHandle);
ComfyJS.onChat = (user, message, flags, self, extra) => {
    console.log(user + ":", message);
    if (message === "prediction") {
        yes = 0;
        no = 0;
    }
    if (message === '1') {
        yes++;
    }
};
  


container.innerHTML = yes;

