//interfaces&variables

interface Cannon{
    index:number,
    angle:number,
    gunpowder:number,
    ballinair:boolean
}

interface Ball{
    oldPosX:number,
    newPosX:number,
    oldPosY:number,
    newPosY:number
}

interface Point  {
    x: number,
    y: number,
  };

const canvas:HTMLCanvasElement=document.getElementsByTagName("canvas")[0];
const ctx:CanvasRenderingContext2D=canvas.getContext("2d")!;

   //
    // Make sure canvas size matches CSS size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  
    // Create fixed points for the terrain
    const createTerrainPoints = (): Point[] => {
    const points: Point[] = [];
    
    // Start point (left side)
    points.push({
      x: 0,
      y: canvas.height - 150
    });
    
    // Middle points
    points.push({
      x: canvas.width / 3,
      y: canvas.height - 250 + (Math.random() * 50)
    });
    
    points.push({
      x: canvas.width / 2,
      y: canvas.height - 350 + (Math.random() * 50)
    });
    
    points.push({
      x: (canvas.width / 3) * 2,
      y: canvas.height - 150 + (Math.random() * 50)
    });
    
    // End point (right side)
    points.push({
      x: canvas.width,
      y: canvas.height - 50
    });
    
    return points;
  };
  
  // Draw the terrain
  const drawTerrain = (): void => {
    if (!ctx) return;
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Get terrain points
    const points:Point[] = createTerrainPoints();
    
    // Start drawing
    ctx.beginPath();
    
    // Start from bottom left
    ctx.moveTo(0, canvas.height);
    
    // Draw lines through all points
    points.forEach((_point) => {
      ctx.lineTo(_point.x, _point.y);
    });
    
    // Complete the shape
    ctx.lineTo(canvas.width, canvas.height);
    
    // Fill green
    ctx.fillStyle = 'green';
    ctx.fill();
  };
  
  // Draw initial terrain
  drawTerrain();

  //cannons+elevations