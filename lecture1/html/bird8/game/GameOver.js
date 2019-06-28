class GameOver {
  render(ctx, score) {
    ctx.fillStyle = 'white';

    const title = 'Oops! you lost';
    ctx.font = 'normal 75px flappy';
    const titleSize = ctx.measureText(title);
    const titleX = CENTER - titleSize.width / 2;
    const titleY = 240;
    ctx.fillText(title, titleX, titleY);

    const scoreLabel = `Score: ${score}`;
    ctx.font = 'normal 38px flappy';
    const scoreLabelSize = ctx.measureText(scoreLabel);
    const scoreLabelX = CENTER - scoreLabelSize.width / 2;
    const scoreLabelY = 308;
    ctx.fillText(scoreLabel, scoreLabelX, scoreLabelY);

    const subtitle = `Press enter to play again`;
    const subtitleSize = ctx.measureText(subtitle);
    const subtitleX = CENTER - subtitleSize.width / 2;
    const subtitleY = 444;
    ctx.fillText(subtitle, subtitleX, subtitleY);
  }
}
