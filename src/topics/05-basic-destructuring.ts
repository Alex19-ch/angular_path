interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author:string;
    year:number;
}


const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Circles",
    details:{
        author: 'Post Malone',
        year:2020
    }
}

const {song, songDuration:Duration} = audioPlayer;

console.log('Song: ', song);
console.log('Author: ', Duration);
console.log('Duration: ', audioPlayer.songDuration);
