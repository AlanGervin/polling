
/* Config */
const twitchTvHandle = "swervinmaximus";


var yes = 0;
var no = 0;


/* DOM */
const yesContainer = document.querySelector(".yesContainer");
const noContainer = document.querySelector(".noContainer");

yesContainer.style.opacity = 1;
yesContainer.style.opacity = 1;
yesContainer.innerHTML = yes;
noContainer.innerHTML = no;



ComfyJS.Init(twitchTvHandle);
ComfyJS.onChat = (user, message, flags, self, extra) => {
    console.log(user + ":", message);
    if (message === "prediction") {
        yes = 0;
        no = 0;
        yesContainer.innerHTML = yes;
        noContainer.innerHTML = no;
    } else if (message === '1') {
 
        yes++;
        yesContainer.innerHTML = yes;



        const queryResults1 = UserVote.countDocuments({"userId": extra.displayName}, (err, count) => {
            if (count == 0) {
              
                //UserVote.create({"userId": extra.displayName, "vote": "yes"});
     
            }
        }); 
        
      
    } else if (message === '0') {
        no++;
        noContainer.innerHTML = no;
        const queryResults = UserVote.countDocuments({"userId": extra.displayName}, (err, count) => {
            if (count == 0) {
                //UserVote.create({"userId": extra.displayName, "vote": "no"});

            }
        });        
      
    }

};
  

