class Title {
  render(ctx){
    ctx.fillStyle = 'white';

    const title = 'Fifty Bird'
    ctx.font = 'normal 75px flappy';
    const titleSize = ctx.measureText(title);
    const titleX = CENTER - titleSize.width / 2;
    const titleY = 240;
    ctx.fillText(title, titleX, titleY);

    const subtitle = 'Press Enter'
    ctx.font = 'normal 44px flappy';
    const subtitleSize = ctx.measureText(subtitle);
    const subtitleX = CENTER - subtitleSize.width / 2;
    const subtitleY = 308;
    ctx.fillText(subtitle, subtitleX, subtitleY);
  }
}
