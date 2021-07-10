let score;
let notesLine;
let judgmentFrame;
let pressFlg = false;
let sound = [];
let pico;
let title;
let select;
let result;
let playFlg = 0;
let selectFlg = false;
let resultFlg = false;


const music01 = {
    title: 'Untitled',
    level: ['easy', '☆☆☆☆★'],
    oneBarLength: 400,
    bpm: 203,
    musicData: [    [1, 0, 0], [1, 0, 0]

            ],
    maxCombo: 2,
    notesData: [],
    barData: []
};
const music02 = {
    title: 'Untitled',
    level: ['hard', '☆★★★★'],
    oneBarLength: 400,
    bpm: 203,
    musicData: [    [1, 0, 0], [1, 0, 0]

            ],
    maxCombo: 2,
    notesData: [],
    barData: []
};
const music03 = {
    title: 'Typoghoti',
    level: ['easy', '☆☆★★★'],
    oneBarLength: 400,
    bpm: 185,
    musicData: [    [1, 0, 1], [1, 0, 1], [1, 0, 1],
                    [1, 0, 0], [1, 0, 1], [1, 0, 0], [1, 0, 1],
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0],
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [2, 0, 0], [4, 1, 0], [4, 0, 1],
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0],
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [4, 0, 1], [4, 0, 0], [4, 0, 0], [4, 0, 0], [1, 0, 0],
                    [1, 0, 0], [1, 0, 0], [1, 0, 0], [2, 0, 0], [2, 0, 0],
                    [1, 0, 0], [1, 0, 0], [1, 0, 0], [2, 0, 0], [4, 0, 0], [4, 0, 0],
                    [1, 0, 0], [1, 0, 0], [1, 0, 0], [2, 0, 0], [2, 0, 0],
                    [1, 0, 0], [1, 0, 0], [1, 0, 0], [2, 0, 0], [4, 0, 0], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [2, 0, 0],
                    [1, 0, 1],
                    [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 1], [8, 0, 1], [8, 0, 0], [4, 0, 1], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 1],
                    [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 1], [8, 0, 1], [8, 0, 0], [4, 0, 1], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 1],
                    [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 1], [8, 0, 1], [8, 0, 0], [4, 0, 1], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 1],
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 1, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [1, 0, 0], [1, 0, 1], [1, 0, 0], [1, 0, 1], [1, 0, 0], [1, 0, 1], [1, 0, 0], [2, 0, 0], [4, 0, 0], [4, 0, 0],
                    [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0],
                    [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 1], [4, 0, 0],
                    [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 1], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 1], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [4, 0, 0], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 1], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [2, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [2, 0, 1], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [2, 0, 1], [4, 0, 1], [8, 0, 0], [8, 0, 0], [2, 0, 1], [4, 0, 1], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [2, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [2, 0, 1], [4, 0, 1], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 1], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [1, 1, 0], [2, 1, 0], [4, 0, 1], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 1], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 1], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0]

            ],
    maxCombo: 276,
    notesData: [],
    barData: []
};
const music04 = {
    title: 'Typoghoti',
    level: ['hard', '★★★★★'],
    oneBarLength: 600,
    bpm: 185,
    musicData: [    [1, 0, 1], [1, 0, 1], [1, 0, 1],
                    [1, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0],
                    [1, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0],
                    [16, 0, 1], [16, 0, 0], [8, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0],
                    [16, 0, 1], [16, 0, 0], [8, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0],
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0],
                    [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0],
                    [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [4, 1, 0],
                    [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], 
                    [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [4, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0],
                    [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [2, 0, 0],
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0],
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0],
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0],
                    [2, 0, 0], [2, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], 
                    [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [2, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [83, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [4, 0, 0], [4, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [4, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], 
                    [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0],
                    [4, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [4, 0, 0], [4, 0, 0], 
                    [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 1], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], 
                    [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [4, 0, 0], [4, 0, 0], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], 
                    [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [8, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [16, 0, 0], [16, 0, 0], [16, 0, 0], [16, 0, 0], 
                    [4, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [8, 0, 0], [16, 0, 1], [16, 0, 0], [8, 0, 1], [4, 0, 0]
            ],
    maxCombo: 681,
    notesData: [],
    barData: []
};
let playMusic = music01;

/*
1: 全音符
2: 二分音符
4: 四分音符
8: 八分音符
83: 八分三連符
16: 十六分音符
163: 十六分三連符
32: 三十二分音符
*/
const lengthRatio = {
    '1': 300,
    '2': 150,
    '4': 75,
    '8': 37.5,
    '83': 25,
    '16': 18.75,
    '163': 12.5,
    '32': 9.375,
};

/**
 * ベクトル管理用クラス
 *
 * @class Vec2
 */
 class Vec2 {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    // このベクトルと、引数のベクトルbの和を計算する
    add(b) {
        let a = this;
        return new Vec2(a.x + b.x, a.y + b.y);
    }
    // このベクトルを実数s倍したベクトルを計算する
    mul(s) {
        let a = this;
        return new Vec2(s * a.x, s * a.y);
    }
    // このベクトルの大きさを求める
    mag() {
        let a = this;
        return Math.sqrt(a.x ** 2 + a.y ** 2);
    }
    // このベクトルと引数のベクトルbの差を求める
    sub(b) {
        let a = this;
        return new Vec2(a.x - b.x, a.y - b.y);
    }
    // このベクトルを正規化したベクトルを求める
    norm() {
        let a = this;
        return a.mul(1 / a.mag());
    }
    // このベクトルと引数のベクトルbの、ドット積（内積）を求める
    dot(b) {
        let a = this;
        return a.x * b.x + a.y * b.y;
    }
    // このベクトルの反射ベクトルを求める。
    // wは、法線ベクトルとする（大きさは問わない）
    reflect(w) {
        let v = this;
        let cosTheta = v.mul(-1).dot(w) / (v.mul(-1).mag() * w.mag());
        let n = w.norm().mul(v.mag() * cosTheta);
        let r = v.add(n.mul(2));
        return r;
    }
}

class SelectMenu {
    constructor(_musics) {
        this.musics = _musics;
        this.selectingMusicNumber = 0;
        this.selectingMusic = this.musics[0];
    }
    setSelectingMusic() {
        this.selectingMusic = this.musics[this.selectingMusicNumber];
        this.switchFlg();
    }
    switchFlg() {
        for(let i = 0; i < this.musics.length; i++) {
            if(this.musics[i] === this.selectingMusic) {
                this.musics[i].isSelected = true;
            } else {
                this.musics[i].isSelected = false;
            }
        }
    }
}

class SelectMenuMusic {
    constructor(_vec, _music) {
        this.isSelected = false;
        this.vec = _vec;
        this.music = _music;
        this.mp3 = '';
        this.name = _music.title;
        this.levelLabel = _music.level[0];
        this.levelStar = _music.level[1];
    }
    create() {
        rectMode(CORNER);
        strokeWeight(5);
        noFill();
        if(this.isSelected) {
            stroke('yellow');
        } else {
            stroke(255);
        }
        rect(this.vec.x, this.vec.y, 160, 203);
        textFont('Helvetica');
        fill(0);
        textSize(25);
        textAlign(LEFT);
        strokeWeight(1);
        text(this.name, this.vec.x + 25, this.vec.y + 35);
        text(this.levelLabel, this.vec.x + 25, this.vec.y + 85);
        text(this.levelStar, this.vec.x + 15, this.vec.y + 170);
    }
}

const untitled_easy = new SelectMenuMusic(new Vec2(17, 142), music01);
const untitled_hard = new SelectMenuMusic(new Vec2(211, 142), music02);
const typoghtoti_easy = new SelectMenuMusic(new Vec2(403, 142), music03);
const typoghoti_hard = new SelectMenuMusic(new Vec2(599, 142), music04);
const selectMenu = new SelectMenu([untitled_easy, untitled_hard, typoghtoti_easy, typoghoti_hard]);

class Result {
    constructor(_music, _score) {
        this.title = _music.title;
        this.level = _music.level[0];
        this.notesQuantity = _music.maxCombo;
        this.score = _score;
        this.setTimeFlg = false;
        this.showResultFlg = false;
    }
    create() {
        background(0);
        strokeWeight(1);
        stroke(1);
        textFont("'Press Start 2P', cursive");
        textAlign(LEFT);
        textSize(25);
        fill('white');
        text('Result', 10, 30);
        textSize(18);
        text(`Music Title\t: ${this.title}`, 20, 80);
        text(`Level\t\t\t\t: ${this.level}`, 20, 100);
        fill('yellow');
        textSize(23);
        text(`Score\t: ${this.score.score}`, 20, 160);
        textSize(14);
        fill('white');
        text(`Max Combo\t: ${this.score.maxCombo}`, 560, 200);
        text(`Perfect\t: ${this.score.perfectTime}`, 560, 220);
        text(`Great\t: ${this.score.greatTime}`, 560, 240);
        text(`Nice\t: ${this.score.niceTime}`, 560, 260);
        text(`Miss\t: ${this.score.missTime}`, 560, 280);
        if(this.score.perfectTime === this.notesQuantity) {
            textSize(24);
            fill('#ff6666');
            text('All Perfect Combo!!!!', 20, 240);
            text('Congratulations!!', 20, 270);
        } else if(this.score.maxCombo === this.notesQuantity) {
            textSize(22);
            fill('white');
            text('Full Combo!!', 20, 240);
        }
        if(!this.showResultFlg && !this.setTimeFlg) {
            this.setTimeFlg = true;
            setTimeout(() => {
                this.showResultFlg = true;
                this.setTimeFlg = false;
            }, 2000);
        }
        if(this.showResultFlg && !this.setTimeFlg) {
            textAlign(CENTER);
            textSize(12);
            fill('white');
            text('Press any key', 400, 400);
            setTimeout(() => {
                this.showResultFlg = false;
                this.setTimeFlg = false;
            }, 2000);
        }
        
    }
}

class Score {
    constructor(_vec) {
        this.vec = _vec;
        this.score = 0;
        this.maxCombo = 0;
        this.combo = 0;
        this.perfectTime = 0;
        this.greatTime = 0;
        this.niceTime = 0;
        this.missTime = 0;
        this.mashingTime = 0;
        this.mashingFlg = 0;
        this.strQuality = '';
        this.qualityFlg = 0;
    }
    create() {
        stroke('#ffffff');
        strokeWeight(8);
        fill(0);
        rect(this.vec.x + 0, this.vec.y + 0, width / 6, this.vec.y);
    }
    showScore() {
        textAlign(CENTER);
        textSize(10);
        noStroke();
        fill(255);
        textFont("'Press Start 2P', cursive");
        text(`COMBO: ${this.combo}`, this.vec.x + width / 12, 1.5 * this.vec.y);
        text(`SCORE: ${this.score}`, this.vec.x + width / 12, 0.7 * this.vec.y);

    }
    showQuality() {
        if(this.qualityFlg <= 0) {
            return;
        }
        textAlign(CENTER);
        textSize(10);
        noStroke();
        fill(255);
        text(this.strQuality, judgmentFrame.vec.x, 1.6 * judgmentFrame.vec.y);
        this.qualityFlg--;
    }
    showTitle() {
        textFont("'Press Start 2P', cursive");
        let titleStr = playMusic.title + '-' + playMusic.level[0];
        textFont("'Press Start 2P', cursive");
        stroke(1);
        textSize(16);
        textAlign(RIGHT);
        text(titleStr, 790, 24);
    }
    add(quality) {
        if(quality < 5) {
            this.score += 1000;
            console.log(1000);
            this.strQuality = 'perfect';
            this.perfectTime++;
            this.qualityFlg = 30;
        } else if(quality < 10) {
            this.score += 500;
            this.strQuality = 'great';
            this.greatTime++;
            this.qualityFlg = 30;
            console.log(500);
        } else {
            this.score += 200;
            console.log(200);
            this.strQuality = 'nice';
            this.niceTime++;
            this.qualityFlg = 30;
        }
        this.combo++;
        if(this.maxCombo < this.combo) {
            this.maxCombo = this.combo;
        }
    }
    mash() {
        this.score += 500;
        this.mashingTime++;
        this.strQuality = `Drum Roll: ${this.mashingTime}`;
        this.qualityFlg = 50;
        this.mashingFlg = 50;
    }
    fail() {
        console.log('miss');
        this.missTime++;
        this.strQuality = 'miss';
        this.qualityFlg = 30;
        this.combo = 0;
    }
}

class NotesLine {
    constructor(_height, _color) {
        this.height = _height;
        this.color = _color;
        this.judgmentFramePosition = new Vec2(width / 6 + 50, 1.5 * this.height);
    }
    create() {
        stroke(this.color);
        strokeWeight(8);
        line(0, this.height, width, this.height);
        line(0, 2 * this.height, width, 2 * this.height);
    }
}

class JudgmentFrame {
    constructor(_vec) {
        this.vec = _vec;
        this.animeFlg = 0;
    }
    create() {
        strokeWeight(1)
        noFill();
        stroke('#ffffff');
        circle(this.vec.x, this.vec.y, 45);
        circle(this.vec.x, this.vec.y, 35);
        fill('#797979');
        noStroke();
        circle(this.vec.x, this.vec.y, 30);
    }
    press() {
        this.animeFlg++;
        if(this.animeFlg >= 1 && this.animeFlg < 4) {
            strokeWeight(1)
            noFill();
            stroke('#ffffff');
            circle(this.vec.x, this.vec.y, 48);
            circle(this.vec.x, this.vec.y, 36);
            fill('#ffec6a');
            noStroke();
            circle(this.vec.x, this.vec.y, 30);
        } else {
            this.create();
            this.animeFlg = 0;
        }
    }
}

class Notes {
    constructor(_vec, _value) {
        this.vec = _vec;
        this.value = _value;
        this.flg = false;
        this.quality;
    }
    scroll() {
        this.vec = this.vec.add(new Vec2(getMoveFrame(playMusic.bpm, playMusic.oneBarLength, frameRate()) * -1, 0));
    }
    create() {}
    judge() {}
    die() {}
}

class TapNotes extends Notes {
    constructor(_vec, _value) {
        super(_vec, _value);
    }
    create() {
        if(this.flg) {
            return;
        }
        fill('ffffff');
        circle(this.vec.x, this.vec.y, 40);
        fill('#f03c23');
        circle(this.vec.x, this.vec.y, 30);
    }
    judge() {
        if(this.flg) {
            return;
        }
        const judgeVec = judgmentFrame.vec.add(new Vec2(-0, 0)).sub(this.vec);
        this.quality = judgeVec.mag();
        if(this.quality < 30) {
            score.add(this.quality);
            this.flg = true;
        } else if(this.quality < 40) {
            score.fail();
            this.flg = true;
        }
    }
    die() {
        if(this.flg) {
            return;
        }
        score.fail();
        this.flg = true;
    }
}

class LongNotes extends Notes {
    constructor(_vec, _value) {
        super(_vec, _value);
    }
    create() {
        noStroke();
        fill('#f0b40a');
        for(let i = this.vec.add(new Vec2(playMusic.oneBarLength * (lengthRatio[this.value.toString(10)] / lengthRatio['1']), 0)).x - 60; i > this.vec.x; i--) {
            circle(i, this.vec.y, 40);
        }
        fill('#ffffff');
        circle(this.vec.x, this.vec.y, 40);
        fill('#f0b40a');
        circle(this.vec.x, this.vec.y, 30);
    }
    judge() {
        if(this.flg) {
            return;
        }
        const judgeVec = judgmentFrame.vec.sub(this.vec);
        this.quality = judgeVec.mag();
        if(judgeVec.x > 0 && judgeVec.x <= new Vec2(playMusic.oneBarLength * (lengthRatio[this.value.toString(10)] / lengthRatio['1']), 0).x - 60) {
            score.mash();
        }
    }
    die() {
        if(this.flg) {
            return;
        }
        const judgeVec = judgmentFrame.vec.sub(this.vec);
        if(judgeVec.x > new Vec2(playMusic.oneBarLength * (lengthRatio[this.value.toString(10)] / lengthRatio['1']), 0).x - 30) {
            score.mashingTime = 0;
            this.flg = true;
            console.log("a");
        }
    }
}

class Bar extends Notes {
    constructor(_vec) {
        super(_vec, 1);
    }
    create() {
        stroke('#f9f9f9');
        line(this.vec.x, notesLine.height, this.vec.x, 2 * notesLine.height);
    }
}

function loadMusicData(musicData, judgmentFrameVec) {
    const defaultVec = new Vec2(judgmentFrameVec.x + playMusic.oneBarLength + 40, judgmentFrameVec.y);
    let lastVec = defaultVec;
    for(let value of musicData) {
        if(value[2] === 0) {
            if(value[1] === 0) {
                playMusic.notesData.push(new TapNotes(lastVec, value[0]));
            } else {
                playMusic.notesData.push(new LongNotes(lastVec, value[0]));
            }
        }
        lastVec = lastVec.add(new Vec2(playMusic.oneBarLength * (lengthRatio[value[0].toString(10)] / lengthRatio['1']), 0));
    }
    const barNum = (lastVec.x - defaultVec.x) / playMusic.oneBarLength;
    for(let i = 0; i < barNum; i++) {
        playMusic.barData.push(new Bar(new Vec2(defaultVec.x + playMusic.oneBarLength * i, judgmentFrameVec.y)));
    }
}

function getMoveFrame(tempo, barLength, nowFrameRate) {
    let frameRate = nowFrameRate;
    if(frameRate < 34) {
        frameRate = 60;
    }
    let oneMeasureFrame = (60 / tempo) * 4 * 60;
    let movingPixcel = barLength / oneMeasureFrame;

    movingPixcel *= 60 / frameRate;
    return movingPixcel;
}

function scanJudge() {
    judgmentFrame.animeFlg = 1;
    for(let notes of playMusic.notesData) {
        if(!notes.flg) {
            notes.judge();
            break;
        }
    }
}

function preload() {
    soundFormats('mp3', 'wav');
    sound[0] = loadSound('assets/Seisyo-1.mp3');
    sound[1] = loadSound('assets/Typoghoti.mp3');
    untitled_easy.mp3 = sound[0];
    untitled_hard.mp3 = sound[0];
    typoghtoti_easy.mp3 = sound[1];
    typoghoti_hard.mp3 = sound[1];
    pico = loadSound('assets/pico.mp3');
    title = loadImage('assets/title.png');
    select = loadImage('assets/select.png');
}

function setup() {
    createCanvas(800, 450);
    background(0);
    notesLine = new NotesLine(60, '#ffffff');
    judgmentFrame = new JudgmentFrame(notesLine.judgmentFramePosition);
    frameRate(60);
}

function draw() {
    switch(playFlg) {
        case 0:
            showTitle();
            break;
        case 1:
            selectMusic();
            break;
        case 2:
            play();
            break;
        case 3:
            showResult();
            break;
    }
}

function showTitle() {
    background(0);
    image(title, 0, 0);
}

function selectMusic() {
    background(0);
    image(select, 0, 0);
    for(let i = 0; i < selectMenu.musics.length; i++) {
        selectMenu.musics[i].create();
    }
    if(!selectFlg) {
        setTimeout(() => {
            selectMenu.selectingMusic.isSelected = true;
            selectFlg = true;
        }, 50);
    }
}

function play() {
    background(0);
    notesLine.create();
    if(judgmentFrame.animeFlg > 0) {
        judgmentFrame.press();
    } else {
        judgmentFrame.create();
    }
    for(let bar of playMusic.barData) {
        bar.create();
        bar.scroll();
    }
    for(let notes of playMusic.notesData) {
        notes.create();
        notes.scroll();
        const deadlineVec = judgmentFrame.vec.add(new Vec2(-20, 0));
        /*if(judgmentFrame.vec.sub(notes.vec).x > 0 && !(notes.flg)) {
            //pico.play();
            notes.die();
        }*/
        if(deadlineVec.sub(notes.vec).x > 0) {
            notes.die();
        }
    }
    if(playMusic.notesData[playMusic.notesData.length - 1].flg && !selectMenu.selectingMusic.mp3.isPlaying() && !resultFlg) {
        resultFlg = true;
        result = new Result(playMusic, score);
        setTimeout(() => {
            playFlg = 3;
        }, 3000);
    }
    score.create();
    score.showScore();
    score.showQuality();
    score.showTitle();
    //console.log(frameRate());
}

function showResult() {
    console.log(playFlg);
    if(playFlg === 1) {
        return 0;
    }
    background(0);
    result.create();
}

function keyPressed() {
    switch(playFlg) {
        case 0:
            showTitleKeyPressed();
            break;
        case 1:
            selectMusicKeyPressed();
            break;
        case 2:
            playKeyPressed();
            break;
        case 3:
            showResultKeyPressed();
            break;
    }
}

function showTitleKeyPressed() {
    pico.play();
    playFlg = 1;
}

function selectMusicKeyPressed() {
    pico.play();
    if(keyCode === 70) {
        if(selectMenu.selectingMusicNumber > 0) {
            selectMenu.selectingMusicNumber--;
            selectMenu.setSelectingMusic();
        }
    } else if(keyCode === 74) {
        if(selectMenu.selectingMusicNumber < 3) {
            selectMenu.selectingMusicNumber++;
            selectMenu.setSelectingMusic();
        }
    } else if(keyCode === 32) {
        playMusic = selectMenu.selectingMusic.music;
        loadMusicData(playMusic.musicData, notesLine.judgmentFramePosition);
        score = new Score(new Vec2(0, notesLine.height));
        console.log('Loading of the music is complete.');
        console.log('---Play-Music-Data-----------------------');
        console.log(`Title: ${playMusic.title}`);
        console.log(`Level: ${playMusic.level[0]}`);
        console.log('-----------------------------------------');
        console.log('Enjoy your playing!');
        playFlg = 2;
        noLoop();
        setTimeout(() => {
            loop();
            selectMenu.selectingMusic.mp3.play();
            textFont("'Press Start 2P', cursive");
        }, 1000);
    }
}

function playKeyPressed() {
    if(keyCode === 32) {
        scanJudge();
    } else if(keyCode === 70) {
        scanJudge();
    } else if(keyCode === 74) {
        scanJudge();
    }
    pressFlg = true;
}

function showResultKeyPressed() {
    pico.play();
    resultFlg = false;
    playFlg = 1;
}

function keyReleased() {
    pressFlg = false;
}

function mousePressed() {
    console.log(`x=${mouseX}`);
    console.log(`y=${mouseY}`);

}