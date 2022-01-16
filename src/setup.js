const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d')
canvas.height = '600';
canvas.width = '600';

const canvas = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d')
canvas.height = '600';
canvas.width = '600';

const canvas = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d')
canvas.height = '600';
canvas.width = '600';

const canvas = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d')
canvas.height = '600';
canvas.width = '600';

const canvas = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d')
canvas.height = '600';
canvas.width = '600';


const grid = 80;
let keys = [];
let score = 0;
let collisionCount = 0;
let frame = 0;
let gameSpeed = 1;