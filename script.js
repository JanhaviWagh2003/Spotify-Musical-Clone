const music = new Audio('audio/21.mp3');
//music.play();

const songs = [
    {
        id: '1',
        songName: 'Love You Zindagi<br> <div class="subtitle">Amit Trivedi</div>',
        poster: "posters2/1.jpg"
    },
    {
        id: '2',
        songName: 'Sanu Ek Pal Chain<br> <div class="subtitle">Rahat Faheh Ali Khan</div>',
        poster: "posters2/2.jpg"
    },
    {
        id: '3',
        songName: 'Arziyaan <br> <div class="subtitle">Vikrant Bhartiya</div>',
        poster: "posters2/3.jpg"
    },
    {
        id: '4',
        songName: 'janu Meri Jaan <br> <div class="subtitle">Amitab Bachchan</div>',
        poster: "posters2/4.jpg"
    },
    {
        id: '5',
        songName: 'Aai Shapth<br> <div class="subtitle">Rutvik talashikar</div>',
        poster: "posters2/5.jpg"
    },
    {
        id: '6',
        songName: 'Aasamaan<br> <div class="subtitle">Gulab Sindhu</div>',
        poster: "posters2/6.jpg"
    },
    {
        id: '7',
        songName: 'Adhoore<br> <div class="subtitle">Vishal Dadlani</div>',
        poster: "posters2/7.jpg"
    },
    {
        id: '8',
        songName: 'Animal Theme<br> <div class="subtitle">Instrumental</div>',
        poster: "posters2/8.jpg"
    },
    {
        id: '9',
        songName: 'Chhaiyaa chhaiyaa <br> <div class="subtitle">Sukhvindar Singh</div>',
        poster: "posters2/9.jpg"
    },
    {
        id: '10',
        songName: 'Chor Bazari <br> <div class="subtitle">Sunidhi Chauhan</div>',
        poster: "posters2/10.jpg"
    },
    {
        id: '11',
        songName: 'Dhoka Dhadi <br> <div class="subtitle">Pritam</div>',
        poster: "posters2/11.jpg"
    },
    {
        id: '12',
        songName: 'Gal karke <br> <div class="subtitle">Rajat Nagpal</div>',
        poster: "posters2/12.jpg"
    },
    {
        id: '13',
        songName: 'Jane Meriye<br> <div class="subtitle">Happy Raikot</div>',
        poster: "posters2/13.jpg"
    },
    {
        id: '14',
        songName: 'Kinna Sonna<br> <div class="subtitle">Sunil Kamath</div>',
        poster: "posters2/14.jpg"
    },
    {
        id: '18',
        songName: 'O mahi <br> <div class="subtitle">Arijit Singh</div>',
        poster: "posters2/18.jpg"
    },
    {
        id: '15',
        songName: 'O mere Shankara<br> <div class="subtitle">Hansraj Raghuwanshi</div>',
        poster: "posters2/15.jpg"
    },
    {
        id: '16',
        songName: 'Menu Rab Mileya <br> <div class="subtitle">Darshan Raval</div>',
        poster: "posters2/16.jpg"
    },

    
    {
        id: '17',
        songName: 'Nazm Nazm<br> <div class="subtitle">Arko Pravo Mukharji</div>',
        poster: "posters2/17.jpg"
    },
    {
        id: '19',
        songName: 'O Sath Kangan Leke Aana<br> <div class="subtitle">Arijit Singh</div>',
        poster: "posters2/19.jpg"
    },
    {
        id: '20',
        songName: 'Sawar Loon <br> <div class="subtitle">Monali Thakur</div>',
        poster: "posters2/20.jpg"
    },
    {
        id: '21',
        songName: 'Tere Hawale<br> <div class="subtitle">Arijit Singh, Shreya Ghoshal</div>',
        poster: "posters2/21.jpg"
    },
]

/*Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});*/


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');

    }
});
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        index = el.target.id;
       //console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `posters2/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('SongItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.remove('active1');
    });

})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);


    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    } 
    currentEnd.innerText =`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    } 

    currentStart.innerText =`${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () =>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;

    poster_master_play.src = `posters2/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('SongItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.remove('active1');
    

})
next.addEventListener('click', () =>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;

    poster_master_play.src = `posters2/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('SongItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.remove('active1');

})





let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item  = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});



