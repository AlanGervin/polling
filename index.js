/* Config */
const twitchTvHandle = "swervinmaximus";


var yes = 0;
var no = 0;
var voters = [];

/* DOM */
const yesContainer = document.querySelector(".yesContainer");
const noContainer = document.querySelector(".noContainer");
const yesPercent = document.querySelector("#yesPercent");

yesContainer.style.opacity = 1;
yesContainer.style.opacity = 1;
yesContainer.innerHTML = yes +" yes's";
noContainer.innerHTML = no + " no's";



ComfyJS.Init(twitchTvHandle);
ComfyJS.onChat = (user, message, flags, self, extra) => {
    console.log(user + ":", message);
    if (message === "prediction") {
        yes = 0;
        no = 0;
        voters = [];
        yesContainer.innerHTML = yes + " yes's";
        noContainer.innerHTML = no + " no's";
        yesPercent.style.width = 0;
    } else if (message === '1') {
        //need to remove
        //yes++;
        //yesContainer.innerHTML = yes +" yes's";
        //

        let found = voters.indexOf(extra.displayName);
        if (found == -1) {
            voters.push(extra.displayName);
            yes++;
            yesContainer.innerHTML = yes +" yes's";
            let total = yes+no;
            findPercent(yes,total);
        }

        //need to remove
        //let total = yes+no;
        //findPercent(yes,total);
        //

    } else if (message === '0') {
        let found = voters.indexOf(extra.displayName);
        if (found == -1) {
            voters.push(extra.displayName);
            no++;
            noContainer.innerHTML = no +" no's";
            let total = yes+no;
            findPercent(yes,total);  
        }


        //need to remove
        //let total = yes+no;
        //findPercent(yes,total);
        //
    }



};
  

function findPercent(yesVotes, total) {
    percent = ((yesVotes/total)*100).toFixed(0);
    console.log("percent"+percent);
    let returnVal = percent+'%';
    yesPercent.style.width = returnVal;
}
