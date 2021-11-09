const paintWall = (n, w, h) => {
  let no_of_walls = 0;
  let area_of_single_wall = w * h;

  while (n >= area_of_single_wall) {
    no_of_walls++;
    area_of_single_wall += w*h ;

  
}

  return no_of_walls;
};

var total_painted_walls = paintWall(99, 50, 2);
console.log(" total walls  can be painted = " + total_painted_walls);
