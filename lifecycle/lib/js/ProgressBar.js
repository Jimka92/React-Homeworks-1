function percToRad(percentage){
  const deg = percentage * 360;
  return deg * Math.PI / 180;
}

class ProgressBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      total: props.total,
      completed: props.completed
    }
  }

  getCanvasCenter(canvas) {
    const bb = canvas.getBoundingClientRect();
    return {
      centerX: bb.width / 2,
      centerY: bb.height / 2,
    }
  }

  setCanvasDims(canvas){
    const bb = canvas.getBoundingClientRect();
    canvas.height = bb.height;
    canvas.width = bb.width;
  }

  drawProgressBar(total, completed){
    const canvasCenter = this.getCanvasCenter(this.canvas);

    const arcAngle = percToRad(completed / total);

    this.ctx.lineWidth = 7;

    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    this.ctx.beginPath();
    this.ctx.strokeStyle = '#4ca89a';
    this.ctx.arc(
      canvasCenter.centerX,
      canvasCenter.centerY,
      52,
      0,
      2 * Math.PI
    );
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = '#96d6f4';
    this.ctx.arc(
      canvasCenter.centerX,
      canvasCenter.centerY,
      45,
      0,
      arcAngle
    );
    this.ctx.stroke();

    const text = ( (completed / total) * 100 ).toFixed(1) + '%';

    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font="20px Arial";
    this.ctx.fillText(
      text,
      canvasCenter.centerX,
      canvasCenter.centerY
      )
  }

  componentDidMount(){
    this.canvas = document.querySelector('#progressCanvas');
    this.setCanvasDims(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.drawProgressBar(this.state.total, this.state.completed);

    window.addEventListener('resize', () => {
      this.setCanvasDims(this.canvas);
      this.drawProgressBar(this.state.total, this.state.completed);
    })
  }

  componentWillReceiveProps({total, completed}){
    this.setState({
      total,
      completed
    })
  }

  componentDidUpdate(){
    this.drawProgressBar(this.state.total, this.state.completed);
  }

  render() {
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }
}
