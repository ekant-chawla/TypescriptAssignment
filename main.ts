//I.    YOUTUBE

class YoutubeChannel{  
    subCount:number;//count of subs
    constructor(subCount:number){
        this.subCount=subCount;
    }    
    getSubCount=():number=>{
        return this.subCount;
    }//method  for returning subcount  
}// a dummy just so for Youtube channel



class Comments{
}// a dummy class for individual comment

class YoutubeVideo{

    private url:string; //url of this video page
    private title:string; //video title
    private thumbnailURL:string;// path for the thumbnail image
    private filePath:string;//path of the video file
    private duration:string;//string containing duration
    private viewCount:number; //count of views
    private likes:number;//count of number of likes
    private dislikes:number;//count of number of dislikes
    private channel:YoutubeChannel;//channel object for channel related detials.
    private publishDate:string;//date of publish
    private description:string;//descriptionbox content
    private comments:Comments[];// an array of comments.
    private tags:string[];//an array of tags

    constructor(url:string,title:string,thumbnailURL:string,filePath:string,duration:string,publishDate:string,channel:YoutubeChannel,
        description:string,tags:string[],viewCount?:number,likes?:number,dislikes?:number,comments?:Comments[]){
            
            this.url=url;
            this.title=title;
            this.thumbnailURL=thumbnailURL;
            this.filePath=filePath;
            this.publishDate=publishDate;
            this.duration=duration;
            this.channel=channel;
            this.description=description;       
            this.tags= tags;

            if(viewCount){
                this.viewCount=viewCount;
            } else this.viewCount=0;

            if(likes){
                this.likes=likes;
            } else this.likes = 0;

            if(dislikes){
                this.dislikes=dislikes;
            } else this.dislikes=0;

            if(comments) this.comments= comments;
           
    }

    public addLike=():void=>{this.likes++;}
    public addDislike=():void=>{this.dislikes++;}
    public getLikes=():number=> this.likes;
    public getDislikes=():number=> this.dislikes;
    public getVideoTitle=():string=> this.title;
    public getVideoDuration=():string=>this.duration;
    public getVideoDescription=():string=>this.description;
    public getViewCount=():number=>this.viewCount;
    public getComments=():Comments[]=>{
        if(this.comments) return this.comments;
        else return [];
    }
    
    public getTags=():string[] => this.tags;        
    
    public getVideoFile =():{url:string,thumbnail:string}=>{
        return {url:this.url,thumbnail:this.thumbnailURL};
    }
    public setVideoTitle = (newTitle:string):void=>{
       console.log("callable only by video owner.");
       this.title=newTitle;
    }
    public addComment = (comment:Comments):void=>{
        console.log("comment added");
        this.comments.push(comment);
    }

    public addTag = (newTag:string):void=>{
        this.tags.push(newTag);
    }
    public getSimilarVideos=():YoutubeVideo[]=>{
        console.log("some backend algorithmic magic happens and we get a list of videos similar to this one.")
        return [new YoutubeVideo("https://www.youtube.com/watch?v=7Pyt_xftxM8","Amadeus - Euphoria","https://i.ytimg.com/vi/7Pyt_xftxM8/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAKENGhE3SjjHY8N6FgGPSt6DebTQ","blob:https://www.youtube.com/04033851-dea8-4dd5-86dc-deab6c8bb70f","0:5:30","Apr 24, 2017",new YoutubeChannel(250000),"A second great music video",["Music","EDM","WOW"] ,15000000,8000000,24)];
    }// currenlty returns a static array of video with length 1 just for demo purpose.

    public getSubCount=():number=>{
        return this.channel.getSubCount();
    }

    public addView=():void=>{
        this.viewCount++;        
    }
}


//II. FACEBOOK

class PrivacySettings{
}// a dummy class containing various privacy settings

class SocialProfileAboutSection{

    private privacy:PrivacySettings;
    private firstName:string;
    private lastName:string;
    private coverImageURL:string;//path for cover image
    private profileImageURL:string;//path for profile image
    private dateOfBirth:string;// date of birth as a string
    private location:string;//current location
    private address:string;
    private education:{specialization:string,instituteName:string}[];//education which is an array of objects containing specialization and instituteName key
    private work:{designation:string,company:string}[];
    private websiteURL:string;//url of user's website
    private phoneNumber:string;
    private aboutText:string;
    private relationshipStatus:string;
    private emailAddress:string;
    private gender:string;

    constructor(firstName:string,dateOfBirth:string,emailAddress:string,privacy:PrivacySettings,coverImageURL?:string,profileImageURL?:string,
        location?:string,address?:string,education?:{specialization:string,instituteName:string}[],
        work?:{designation:string,company:string}[],websiteURL?:string,phoneNumber?:string,aboutText?:string,relationshipStatus?:string,gender?:string){
            
            this.firstName=firstName;
            this.dateOfBirth=dateOfBirth;
            this.emailAddress=emailAddress;
            this.privacy=privacy;

            if(coverImageURL) this.coverImageURL=coverImageURL;
            if(profileImageURL) this.profileImageURL=profileImageURL;
            if(location) this.location=location;
            if(address) this.address=address;
            if(work){ 
                this.work=work;
            }else this.work = [];        
            if(education){
                this.education=education;
            } else this.education = [];
            if(websiteURL) this.websiteURL=websiteURL;
            if(phoneNumber) this.phoneNumber=phoneNumber;
            if(aboutText) this.aboutText=aboutText;
            if(relationshipStatus) this.relationshipStatus=relationshipStatus;
            if(gender) this.gender=gender;
    }

    public getEducation = ():{specialization:string,instituteName:string}[]=>{
        return this.education;
    }

    public getWork = ():{designation:string,company:string}[]=>{
        return this.work;
    }

    public addWork = (w:{designation:string,company:string}):void=>{
        console.log(`adding new object to work:`,w);
        this.work.push(w);
    }

    public addEducation = (e:{specialization:string,instituteName:string}):void=>{
        console.log(`adding new object to education:`,e);
        this.education.push(e)
    }

    public removeWork = (index:number):boolean=>{
    
        if(this.work.length>index){
            console.log(`removing work at index ${index}`);
            this.work.splice(index,1);
            return true;
        }else {
            console.log(`there is no value at index ${index}`);
            return false;
            
        }
    }//tries deletion and returns true is successful

    public removeEducation = (index:number):boolean=>{
        if(this.education.length>index){
            console.log(`removing education at index ${index}`);
            this.education.splice(index,1);
            return true;
        }else{
            console.log(`there is no value at index ${index}`);
            return false;
        }
    }//tries deletion and returns true is successful


    public getName = ():string=>{
        if(this.lastName) return this.firstName+" "+this.lastName;
        else return this.firstName;
    }

    public setName =(first:string,last:string):void=>{
        this.firstName=first;
        this.lastName=last;
    }

    public getBirthDate = ():string=>this.dateOfBirth;
    
    public getEmail = ():string=> this.emailAddress;

    public getPrivacySettings = ():PrivacySettings=>this.getPrivacySettings;

    public getCoverImage = ():string=>this.coverImageURL;

    public setCoverImage = (newUrl:string):void=>{
        this.coverImageURL=newUrl;
    }

    public getProfileImage = ():string=>this.profileImageURL;

    public setProfileImage = (newUrl:string):void=>{
        this.profileImageURL=newUrl;
    }

    public getGender = ():string=>this.gender;

    public setGender =(gender:number):void=>{
        if(gender>1){
            console.log("setting gender to others");
            this.gender = "others";
        }
        else if(gender==1) {
            this.gender="male";
            console.log("setting gender to male");
        }
        else{
            this.gender="female";
            console.log("setting gender to female")
        }
    }

    public getRelationshipStatus = ():string=>this.relationshipStatus;

    public setRelationshipStatus =(status:string):void=>{
        console.log(`setting relationship status to "${status}"`)
        this.relationshipStatus=status;
    } 

    public getAboutText=():string=>this.aboutText;

    public setAboutText = (text:string):void=>{
        console.log(`setting about text to "${text}"`)
        this.aboutText=text;
    }

    public getWebsite=():string=>this.websiteURL;

    public setWebsite = (url:string):void=>{
        console.log(`setting website url to ${url}`)
        this.websiteURL=url;
    }

    public getPhoneNumber=():string=>this.phoneNumber;

    public setPhoneNumber = (phoneNumber:string):void=>{
        console.log(`setting phone number to ${phoneNumber}`)
        this.phoneNumber=phoneNumber;
    }
}


//Object Creation
let socialProfileInstance = new SocialProfileAboutSection("Ekant","31-03-1992","ekant.chawla@gmail.com",new PrivacySettings());
let youtubeVideoInstance = new YoutubeVideo("https://www.youtube.com/watch?v=cTlshvPrIZo","Amadeus - Legendary","https://i.ytimg.com/vi/cTlshvPrIZo/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAmYQp3rj8MqiOWm2otCxzKeQlj2w","blob:https://www.youtube.com/dd21e981-ab1c-4275-be86-4f096dd2abc0","0:5:30","Apr 24, 2017",new YoutubeChannel(250000),"A great music video",["Music","EDM"]);

console.log("Social Profile Object");
console.log(socialProfileInstance);
console.log("Youtube Video Object");
console.log(youtubeVideoInstance);

//demonstrating some methods of youtube class.
console.log("Demonstating Youtube Video functions");
console.log("Current video title is",youtubeVideoInstance.getVideoTitle());
console.log("Updating video title to Legendary by Amadeus");youtubeVideoInstance.setVideoTitle("Legendary by Amadeus");
console.log("Updated video title is",youtubeVideoInstance.getVideoTitle());

console.log("Current views on this videos are ",youtubeVideoInstance.getViewCount());
console.log("You saw this video now. Lets increase it's view count by 1");
youtubeVideoInstance.addView();
console.log("Now the views on this video are",youtubeVideoInstance.getViewCount())

console.log("Current likes on this videos are ",youtubeVideoInstance.getLikes());
console.log("You like this video now. Lets increase it's view count by 1");
youtubeVideoInstance.addLike();
console.log("Now likes on this video are",youtubeVideoInstance.getLikes(),"and dislikes on this video are",youtubeVideoInstance.getDislikes());
console.log("Someone disliked this video");
youtubeVideoInstance.addDislike();
console.log("This video now has",youtubeVideoInstance.getDislikes(),"dislike");

console.log("This looks like a good channel.It has",youtubeVideoInstance.getSubCount(),"subs")

console.log(`This youtube video's description says "${youtubeVideoInstance.getVideoDescription()}"`);

console.log(`This video is tagged as ${youtubeVideoInstance.getTags().join(",")}`);

console.log("Getting similar videos");
console.log(youtubeVideoInstance.getSimilarVideos());


//demonstrating some methods of social profile class.
console.log("Demonstating Social Profile functions now");
console.log(`This profile belogs to ${socialProfileInstance.getName()} who was born on ${socialProfileInstance.getBirthDate()} and his email id is ${socialProfileInstance.getEmail()}`);
console.log("Updating his name to Ekant Chawla");
socialProfileInstance.setName("Ekant","Chawla");
console.log(`His name is now ${socialProfileInstance.getName()}`);
console.log("This is a new profile so lets set some information");
socialProfileInstance.setAboutText("I will be a MEAN stack developer and earn a lot of $$$");
socialProfileInstance.setGender(1);

socialProfileInstance.addEducation({specialization:'Electronics and Communication Engineer',instituteName:"GGSIPU"});
socialProfileInstance.addWork({designation:"Tester/Project Co-ordinator",company:"Keyideas Infotech"});

console.log("This is his work history");
console.log(socialProfileInstance.getWork());
console.log("This is his education history");
console.log(socialProfileInstance.getEducation());

socialProfileInstance.setRelationshipStatus("Single");
socialProfileInstance.setWebsite("https://ekant-chawla.github.io/");

console.log(`We have added quite a bit of information. Now lets see the object again.`, socialProfileInstance);

//End of demonstration.