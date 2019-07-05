const Assets = {
  SOUNDS: {
    BREAK_HIT_1: new Audio('sounds/break-hit-1.wav'),
    BREAK_HIT_2: new Audio('sounds/break-hit-2.wav'),
    CONFIRM: new Audio('sounds/confirm.wav'),
    HIGH_SCORE: new Audio('sounds/high_score.wav'),
    HURT: new Audio('sounds/hurt.wav'),
    MUSIC: new Audio('sounds/music.wav'),
    NO_SELECT: new Audio('sounds/no-select.wav'),
    PADDLE_HIT: new Audio('sounds/paddle_hit.wav'),
    PAUSE: new Audio('sounds/pause.wav'),
    RECOVER: new Audio('sounds/recover.wav'),
    SCORE: new Audio('sounds/score.wav'),
    SELECT: new Audio('sounds/select.wav'),
    VICTORY: new Audio('sounds/victory.wav'),
    WALL_HIT: new Audio('sounds/wall_hit.wav'),
  },
  IMAGES: {
    ARROWS: new Image(),
    BACKGROUND: new Image(),
    BLOCKS: new Image(),
    BREAKOUT: new Image(),
    BREAKOUT_BIG: new Image(),
    HEARTS: new Image(),
    PARTICLE: new Image(),
    UI: new Image(),
  }
};

Assets.IMAGES.ARROWS.src = 'images/arrows.png';
Assets.IMAGES.BACKGROUND.src = 'images/background.png';
Assets.IMAGES.BLOCKS.src = 'images/blocks.png';
Assets.IMAGES.BREAKOUT.src = 'images/breakout.png';
Assets.IMAGES.BREAKOUT_BIG.src = 'images/breakout_big.png';
Assets.IMAGES.HEARTS.src = 'images/hearts.png';
Assets.IMAGES.PARTICLE.src = 'images/particle.png';
Assets.IMAGES.UI.src = 'images/ui.png';
