import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const getTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(currentTime.seconds));
  };
  
  player.on('timeupdate', throttle(getTime, 1000));
  
  player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0).catch(function (error) {
    console.log('error');
  });




