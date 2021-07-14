// Requiring packages needed for audio functionality and path serving functionality


const ffmpeg = require('ffmpeg-static');

const path = require('path');

// Bot checks to see if user whos sent message is in a voice channel

// Bot joins the channel which message has come from and plays a random audio file then leaves.

// Is ready is temporarily set to false to prevent function from refiring on a new command mid function

module.exports = function (message) {

    isReady = false
    var VC = message.member.voice.channel;
    if (!VC) {
        message.reply("You must be in a voice channel to swear at people you pendu lulla");
        isReady = true;
        return
    }
    VC.join()
        .then(connection => {
            const random = Math.floor(Math.random() * swearWordsAudioArray.length);
            const dispatcher =
                connection.play(path.join(__dirname, '/punjabi_swear_words', swearWordsAudioArray[random].audioPath));
            dispatcher.on("finish", () => {
                VC.leave()
                isReady = true;
                return
            });
        })
        .catch(error => {
            console.log(error)
            VC.leave()
            isReady = true;
            return
        });

};

// Array of swearword objects with end of file names in audio path ready for random selection

const swearWordsAudioArray = [
    {
        name: 'backaraychaud',
        audioPath: 'backaray-[AudioTrimmer.com].mp3'
    },
    {
        name: 'bainchaud loolah',
        audioPath: 'binchaud lullahhhh-[AudioTrimmer.com].mp3'
    },
    {
        name: 'deri ma dee pudi',
        audioPath: 'deri ma dee pudi panhchod-[AudioTrimmer.com].mp3'
    },
    {
        name: 'motherfucking kusra',
        audioPath: 'Motherfucking kusrah pendu-[AudioTrimmer.com].mp3'
    },
    {
        name: 'Puddhee Pendu',
        audioPath: 'puddee baindu bastard-[AudioTrimmer.com].mp3'
    },
    {
        name: 'Your dad sucks lulla',
        audioPath: 'your dad sucks lullah-[AudioTrimmer.com].mp3'
    },
    {
        name: 'gandoo',
        audioPath: 'gando-[AudioTrimmer.com].mp3'
    },
    {
        name: 'kiss my hairy',
        audioPath: 'kis my hairy-[AudioTrimmer.com].mp3'
    },

];


