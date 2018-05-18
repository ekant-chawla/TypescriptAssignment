//I.    YOUTUBE
var YoutubeChannel = /** @class */ (function () {
    function YoutubeChannel(subCount) {
        var _this = this;
        this.getSubCount = function () {
            return _this.subCount;
        }; //method  for returning subcount  
        this.subCount = subCount;
    }
    return YoutubeChannel;
}()); // a dummy just so for Youtube channel
var Comments = /** @class */ (function () {
    function Comments() {
    }
    return Comments;
}()); // a dummy class for individual comment
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(url, title, thumbnailURL, filePath, duration, publishDate, channel, description, tags, viewCount, likes, dislikes, comments) {
        var _this = this;
        this.addLike = function () { _this.likes++; };
        this.addDislike = function () { _this.dislikes++; };
        this.getLikes = function () { return _this.likes; };
        this.getDislikes = function () { return _this.dislikes; };
        this.getVideoTitle = function () { return _this.title; };
        this.getVideoDuration = function () { return _this.duration; };
        this.getVideoDescription = function () { return _this.description; };
        this.getViewCount = function () { return _this.viewCount; };
        this.getComments = function () {
            if (_this.comments)
                return _this.comments;
            else
                return [];
        };
        this.getTags = function () { return _this.tags; };
        this.getVideoFile = function () {
            return { url: _this.url, thumbnail: _this.thumbnailURL };
        };
        this.setVideoTitle = function (newTitle) {
            console.log("callable only by video owner.");
            _this.title = newTitle;
        };
        this.addComment = function (comment) {
            console.log("comment added");
            _this.comments.push(comment);
        };
        this.addTag = function (newTag) {
            _this.tags.push(newTag);
        };
        this.getSimilarVideos = function () {
            console.log("some backend algorithmic magic happens and we get a list of videos similar to this one.");
            return [new YoutubeVideo("https://www.youtube.com/watch?v=7Pyt_xftxM8", "Amadeus - Euphoria", "https://i.ytimg.com/vi/7Pyt_xftxM8/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAKENGhE3SjjHY8N6FgGPSt6DebTQ", "blob:https://www.youtube.com/04033851-dea8-4dd5-86dc-deab6c8bb70f", "0:5:30", "Apr 24, 2017", new YoutubeChannel(250000), "A second great music video", ["Music", "EDM", "WOW"], 15000000, 8000000, 24)];
        }; // currenlty returns a static array of video with length 1 just for demo purpose.
        this.getSubCount = function () {
            return _this.channel.getSubCount();
        };
        this.addView = function () {
            _this.viewCount++;
        };
        this.url = url;
        this.title = title;
        this.thumbnailURL = thumbnailURL;
        this.filePath = filePath;
        this.publishDate = publishDate;
        this.duration = duration;
        this.channel = channel;
        this.description = description;
        this.tags = tags;
        if (viewCount) {
            this.viewCount = viewCount;
        }
        else
            this.viewCount = 0;
        if (likes) {
            this.likes = likes;
        }
        else
            this.likes = 0;
        if (dislikes) {
            this.dislikes = dislikes;
        }
        else
            this.dislikes = 0;
        if (comments)
            this.comments = comments;
    }
    return YoutubeVideo;
}());
//II. FACEBOOK
var PrivacySettings = /** @class */ (function () {
    function PrivacySettings() {
    }
    return PrivacySettings;
}()); // a dummy class containing various privacy settings
var SocialProfileAboutSection = /** @class */ (function () {
    function SocialProfileAboutSection(firstName, dateOfBirth, emailAddress, privacy, coverImageURL, profileImageURL, location, address, education, work, websiteURL, phoneNumber, aboutText, relationshipStatus, gender) {
        var _this = this;
        this.getEducation = function () {
            return _this.education;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.addWork = function (w) {
            console.log("adding new object to work:", w);
            _this.work.push(w);
        };
        this.addEducation = function (e) {
            console.log("adding new object to education:", e);
            _this.education.push(e);
        };
        this.removeWork = function (index) {
            if (_this.work.length > index) {
                console.log("removing work at index " + index);
                _this.work.splice(index, 1);
                return true;
            }
            else {
                console.log("there is no value at index " + index);
                return false;
            }
        }; //tries deletion and returns true is successful
        this.removeEducation = function (index) {
            if (_this.education.length > index) {
                console.log("removing education at index " + index);
                _this.education.splice(index, 1);
                return true;
            }
            else {
                console.log("there is no value at index " + index);
                return false;
            }
        }; //tries deletion and returns true is successful
        this.getName = function () {
            if (_this.lastName)
                return _this.firstName + " " + _this.lastName;
            else
                return _this.firstName;
        };
        this.setName = function (first, last) {
            _this.firstName = first;
            _this.lastName = last;
        };
        this.getBirthDate = function () { return _this.dateOfBirth; };
        this.getEmail = function () { return _this.emailAddress; };
        this.getPrivacySettings = function () { return _this.getPrivacySettings; };
        this.getCoverImage = function () { return _this.coverImageURL; };
        this.setCoverImage = function (newUrl) {
            _this.coverImageURL = newUrl;
        };
        this.getProfileImage = function () { return _this.profileImageURL; };
        this.setProfileImage = function (newUrl) {
            _this.profileImageURL = newUrl;
        };
        this.getGender = function () { return _this.gender; };
        this.setGender = function (gender) {
            if (gender > 1) {
                console.log("setting gender to others");
                _this.gender = "others";
            }
            else if (gender == 1) {
                _this.gender = "male";
                console.log("setting gender to male");
            }
            else {
                _this.gender = "female";
                console.log("setting gender to female");
            }
        };
        this.getRelationshipStatus = function () { return _this.relationshipStatus; };
        this.setRelationshipStatus = function (status) {
            console.log("setting relationship status to \"" + status + "\"");
            _this.relationshipStatus = status;
        };
        this.getAboutText = function () { return _this.aboutText; };
        this.setAboutText = function (text) {
            console.log("setting about text to \"" + text + "\"");
            _this.aboutText = text;
        };
        this.getWebsite = function () { return _this.websiteURL; };
        this.setWebsite = function (url) {
            console.log("setting website url to " + url);
            _this.websiteURL = url;
        };
        this.getPhoneNumber = function () { return _this.phoneNumber; };
        this.setPhoneNumber = function (phoneNumber) {
            console.log("setting phone number to " + phoneNumber);
            _this.phoneNumber = phoneNumber;
        };
        this.firstName = firstName;
        this.dateOfBirth = dateOfBirth;
        this.emailAddress = emailAddress;
        this.privacy = privacy;
        if (coverImageURL)
            this.coverImageURL = coverImageURL;
        if (profileImageURL)
            this.profileImageURL = profileImageURL;
        if (location)
            this.location = location;
        if (address)
            this.address = address;
        if (work) {
            this.work = work;
        }
        else
            this.work = [];
        if (education) {
            this.education = education;
        }
        else
            this.education = [];
        if (websiteURL)
            this.websiteURL = websiteURL;
        if (phoneNumber)
            this.phoneNumber = phoneNumber;
        if (aboutText)
            this.aboutText = aboutText;
        if (relationshipStatus)
            this.relationshipStatus = relationshipStatus;
        if (gender)
            this.gender = gender;
    }
    return SocialProfileAboutSection;
}());
//Object Creation
var socialProfileInstance = new SocialProfileAboutSection("Ekant", "31-03-1992", "ekant.chawla@gmail.com", new PrivacySettings());
var youtubeVideoInstance = new YoutubeVideo("https://www.youtube.com/watch?v=cTlshvPrIZo", "Amadeus - Legendary", "https://i.ytimg.com/vi/cTlshvPrIZo/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAmYQp3rj8MqiOWm2otCxzKeQlj2w", "blob:https://www.youtube.com/dd21e981-ab1c-4275-be86-4f096dd2abc0", "0:5:30", "Apr 24, 2017", new YoutubeChannel(250000), "A great music video", ["Music", "EDM"]);
console.log("Social Profile Object");
console.log(socialProfileInstance);
console.log("Youtube Video Object");
console.log(youtubeVideoInstance);
//demonstrating some methods of youtube class.
console.log("Demonstating Youtube Video functions");
console.log("Current video title is", youtubeVideoInstance.getVideoTitle());
console.log("Updating video title to Legendary by Amadeus");
youtubeVideoInstance.setVideoTitle("Legendary by Amadeus");
console.log("Updated video title is", youtubeVideoInstance.getVideoTitle());
console.log("Current views on this videos are ", youtubeVideoInstance.getViewCount());
console.log("You saw this video now. Lets increase it's view count by 1");
youtubeVideoInstance.addView();
console.log("Now the views on this video are", youtubeVideoInstance.getViewCount());
console.log("Current likes on this videos are ", youtubeVideoInstance.getLikes());
console.log("You like this video now. Lets increase it's view count by 1");
youtubeVideoInstance.addLike();
console.log("Now likes on this video are", youtubeVideoInstance.getLikes(), "and dislikes on this video are", youtubeVideoInstance.getDislikes());
console.log("Someone disliked this video");
youtubeVideoInstance.addDislike();
console.log("This video now has", youtubeVideoInstance.getDislikes(), "dislike");
console.log("This looks like a good channel.It has", youtubeVideoInstance.getSubCount(), "subs");
console.log("This youtube video's description says \"" + youtubeVideoInstance.getVideoDescription() + "\"");
console.log("This video is tagged as " + youtubeVideoInstance.getTags().join(","));
console.log("Getting similar videos");
console.log(youtubeVideoInstance.getSimilarVideos());
//demonstrating some methods of social profile class.
console.log("Demonstating Social Profile functions now");
console.log("This profile belogs to " + socialProfileInstance.getName() + " who was born on " + socialProfileInstance.getBirthDate() + " and his email id is " + socialProfileInstance.getEmail());
console.log("Updating his name to Ekant Chawla");
socialProfileInstance.setName("Ekant", "Chawla");
console.log("His name is now " + socialProfileInstance.getName());
console.log("This is a new profile so lets set some information");
socialProfileInstance.setAboutText("I will be a MEAN stack developer and earn a lot of $$$");
socialProfileInstance.setGender(1);
socialProfileInstance.addEducation({ specialization: 'Electronics and Communication Engineer', instituteName: "GGSIPU" });
socialProfileInstance.addWork({ designation: "Tester/Project Co-ordinator", company: "Keyideas Infotech" });
console.log("This is his work history");
console.log(socialProfileInstance.getWork());
console.log("This is his education history");
console.log(socialProfileInstance.getEducation());
socialProfileInstance.setRelationshipStatus("Single");
socialProfileInstance.setWebsite("https://ekant-chawla.github.io/");
console.log("We have added quite a bit of information. Now lets see the object again.", socialProfileInstance);
//End of demonstration.
