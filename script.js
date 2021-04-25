let score;
let scoreArea;
const oneBarLength = 600;
let notesLine;
let judgmentFrame;
let notesData = [];
let barData = [];
let pressFlg = false;
const musicData = [ [1, 0], [1, 0],
                    [2, 0], [2, 0], [2, 0], [2, 0],
                    [4, 0], [4, 0], [4, 0], [4, 0], [4, 0], [4, 0], [4, 0], [4, 0],
                    [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0], [8, 0],
                    [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0], [83, 0],
                    [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0], [16, 0],
                    [1, 1]
                    ];

/*
1: 全音符
2: 二分音符
4: 四分音符
8: 八分音符
83: 八分三連符
16: 十六分音符
163: 十六分三連符
32: 三十二分音符
10: 全休符
20: 二分休符
40: 四分休符
80: 八分休符
830: 八分三連休符
160: 十六分休符
1630: 十六分三連休符
320: 三十二分休符
*/
const lengthRatio = {
    '1': 300,
    '10': 300,
    '2': 150,
    '20': 150,
    '4': 75,
    '40': 75,
    '8': 37.5,
    '80': 37.5,
    '83': 25,
    '830': 25,
    '16': 18.75,
    '160': 18.75,
    '163': 12.5,
    '1630': 12.5,
    '32': 9.375,
    '320': 9.375
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

class Score {
    constructor() {
        this.score = 0;
    }
    add(quality) {
        if(quality < 2) {
            this.score += 1000;
            console.log(1000);
        } else if(quality < 6) {
            this.score += 500;
            console.log(500);
        } else {
            this.scoere += 200;
            console.log(200);
        }
    }
    fail() {
        console.log('miss');
    }
}

class SocreArea {
    constructor(_vec) {
        this.vec = _vec;
    }
    create() {
        stroke('#ffffff');
        strokeWeight(8);
        fill(0);
        rect(this.vec.x, this.vec.y, width / 6, this.vec.y);
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
        //strokeWeight(6);
        //line(width / 6, this.height, width / 6, 2 * this.height);
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
    }
    scroll() {
        this.vec = this.vec.add(new Vec2(-3, 0));
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
        fill('ffffff');
        circle(this.vec.x, this.vec.y, 40);
        fill('#f03c23');
        circle(this.vec.x, this.vec.y, 30);
    }
    judge() {
        if(!this.flg) {
            const judgeVec = this.vec.sub(judgmentFrame.vec);
            const quality = judgeVec.mag();
            if(quality < 10) {
                score.add(quality);
                this.flg = true;
            } else if(quality < 20) {
                score.fail();
                this.flg = true;
            }
        }
    }
    die() {
        if(!this.flg) {
            score.fail();
            this.flg = true;
        }
    }
}

class LongNotes extends Notes {
    constructor(_vec, _value) {
        super(_vec, _value);
    }
    create() {
        noStroke();
        fill('#f0b40a');
        for(let i = this.vec.add(new Vec2(oneBarLength * (lengthRatio[this.value.toString(10)] / lengthRatio['1']), 0)).x; i > this.vec.x; i--) {
            circle(i, this.vec.y, 40);
        }
        fill('#ffffff');
        circle(this.vec.x, this.vec.y, 40);
        fill('#f0b40a');
        circle(this.vec.x, this.vec.y, 30);
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
    const defaultVec = new Vec2(width + 100, judgmentFrameVec.y);
    let lastVec = defaultVec;
    for(let value of musicData) {
        if(value[1] === 0) {
            notesData.push(new TapNotes(lastVec, value[0]));
        } else {
            notesData.push(new LongNotes(lastVec, value[0]));
        }
        lastVec = lastVec.add(new Vec2(oneBarLength * (lengthRatio[value[0].toString(10)] / lengthRatio['1']), 0));
    }
    const barNum = (lastVec.x - defaultVec.x) / oneBarLength;
    for(let i = 0; i < barNum; i++) {
        barData.push(new Bar(new Vec2(defaultVec.x + oneBarLength * i, judgmentFrameVec.y)));
    }
}

function createScoreArea() {
    stroke('#ffffff');
    strokeWeight(8);
    fill(0);
    rect(0, notesLine.height, width / 6, notesLine.height);
}

function setup() {
    createCanvas(800, 450);
    background(0);
    score = new Score();
    notesLine = new NotesLine(60, '#ffffff');
    scoreArea = new SocreArea(new Vec2(0, notesLine.height));
    judgmentFrame = new JudgmentFrame(notesLine.judgmentFramePosition);
    loadMusicData(musicData, notesLine.judgmentFramePosition);
}

function draw() {
    background(0);
    notesLine.create();
    if(judgmentFrame.animeFlg > 0) {
        judgmentFrame.press();
    } else {
        judgmentFrame.create();
    }
    for(let bar of barData) {
        bar.create();
        bar.scroll();
    }
    for(let notes of notesData) {
        notes.create();
        notes.scroll();
        const deadlineVec = judgmentFrame.vec.add(new Vec2(-20, 0));
        if(deadlineVec.sub(notes.vec).x > 0) {
            notes.die();
        }
    }
    scoreArea.create();
}

function keyPressed() {
    if(keyCode === 32 && !pressFlg) {
        judgmentFrame.animeFlg = 1;
        for(let notes of notesData) {
            notes.judge();
        }
    }
    pressFlg = true;
}

function keyReleased() {
    pressFlg = false;
}