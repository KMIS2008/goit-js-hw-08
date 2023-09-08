import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate ', throttle (event => {
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(event.seconds))
}, 1000));

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });


player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0).catch(function (error) {
    console.error(error)
});


