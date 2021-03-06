/*
createPlatform(x, y, scaleX, scaleY);
 
x: The x coordinate for the platform.
y: The y coordinate for the platform.
scaleX: OPTIONAL The scale factor on the x-axis, this value will stretch the platform in width.
scaleY: OPTIONAL The scale factor on the y-axis, this value will stretch the platform in height.
*/


createPlatform(14,16);           // normal platform
createPlatform(2, 5, 0.3)       // small horizontal platform (30% the normal width)
createPlatform(50, 15, 0.3, 10)   // tall vertical wall (30% the normal width and 10x the height)
