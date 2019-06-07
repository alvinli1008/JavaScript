// 使用getter setter控制属性的访问
// eg:
// function Ninja (level) {
//     this.skillLevel = level;
// }
// const ninja = new Ninja(199);

// 1.
function Ninja () {
    let skillLevel;
    this.getSkillLevel = () => skillLevel;
    this.setSkillLevel = value => {
        skillLevel = value;
    }
}

const ninja = new Ninja();
ninja.setSkillLevel(100);
console.log(ninja.getSkillLevel());  // 100


// 2.
function Lee () {
    let skillLevel;
    this.getSkillLevel = () => {
        console.log('获取skill的水平');
        return skillLevel;
    }

    this.setSkillLevel = value => {
        console.log('修改skilllevel属性：', skillLevel, 'to:', value);
        skillLevel = value;
    }
}

const lee = new Lee();
lee.setSkillLevel(299);
console.log(lee.getSkillLevel());
