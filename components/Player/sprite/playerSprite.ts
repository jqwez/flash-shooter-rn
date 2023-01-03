
interface Sprite {
    name: string;
    size: {width: number, height: number};
    animationTypes: string[];
    frames: any;
    animationIndex: any;

}

const playerSprite: Sprite = {
    name:"player",
    size: {width: 40, height: 40},
    animationTypes: ['IDLE', 'WALK', 'EAT'],
    frames: [
      require('./player.png'),
      require('./duck.png'),
      require('./duck-l.png'),
    ],
    animationIndex: function getAnimationIndex (animationType:string) {
      switch (animationType) {
        case 'IDLE':
          return [0, 0, 0, 1, 1, 2, 2];
        case 'WALK':
            return [0];
        case 'EAT':
            return [0];
        default: 
            return [1];
      }
    },
  };
  
  export default playerSprite;