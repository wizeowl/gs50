class ScorePanel {
  render(ctx, score) {
    ctx.fillStyle = 'white';

    const scoreLabel = `Score: ${score}`;
    ctx.font = 'normal 75px flappy';
    const scoreLabelSize = ctx.measureText(scoreLabel);
    const scoreLabelX = 32;
    const scoreLabelY = 80;
    ctx.fillText(scoreLabel, scoreLabelX, scoreLabelY);
  }
}
