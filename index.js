/* Config */
const twitchTvHandle = "swervinmaximus";


var yes = 0;
var no = 0;
var voters = [];

/* DOM */
const yesContainer = document.querySelector(".yesContainer");
const noContainer = document.querySelector(".noContainer");
const yesPercent = document.querySelector("#yesPercent");
const main = document.querySelector("#main");
const questionBanner = document.querySelector("#questionBanner");

yesContainer.style.opacity = 1;
yesContainer.style.opacity = 1;
yesContainer.innerHTML = yes +" yes";
noContainer.innerHTML = no + " no";



ComfyJS.Init(twitchTvHandle);
ComfyJS.onChat = (user, message, flags, self, extra) => {
    console.log(user + ":", message);

    if (message === 'y' || message === "yes") {
        //need to remove
        //yes++;
        //yesContainer.innerHTML = yes +" yes's";
        //

        let found = voters.indexOf(extra.displayName);
        if (found == -1) {
            voters.push(extra.displayName);
            yes++;
            yesContainer.innerHTML = yes +" yes";
            let total = yes+no;
            findPercent(yes,total);
        }

        //need to remove
        //let total = yes+no;
        //findPercent(yes,total);
        //

    } else if (message === 'n' || message === 'no') {
        let found = voters.indexOf(extra.displayName);
        if (found == -1) {
            voters.push(extra.displayName);
            no++;
            noContainer.innerHTML = no +" no";
            let total = yes+no;
            findPercent(yes,total);  
        }


        //need to remove
        //let total = yes+no;
        //findPercent(yes,total);
        //
    }

    console.log(extra);
    console.log(flag);

};
  

/*
If you would like anyone to be able to use the command just remove the flag.boradcaster && from the command

*/


ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( flags.broadcaster && command === "test" ) {
      console.log( "!test was typed in chat" );
    }
    cmdArray = message.split(" ");
    console.log(cmdArray);
    if ( flags.broadcaster && command.includes("prediction") ) {
        yes = 0;
        no = 0;
        voters = [];
        yesContainer.innerHTML = yes + " yes";
        noContainer.innerHTML = no + " no";
        yesPercent.style.width = 0;
        main.style.opacity = 1;
        questionBanner.innerHTML = message;
    }

    if ( flags.broadcaster && command === "endprediction" ) {
        main.style.opacity = 0;
    }
}


function findPercent(yesVotes, total) {
    percent = ((yesVotes/total)*100).toFixed(0);
    console.log("percent"+percent);
    let returnVal = percent+'%';
    yesPercent.style.width = returnVal;
}
