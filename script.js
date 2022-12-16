// угадай персонажа(алиса)
// суний энтиллект(айти)
// социальная инжинерия(хакеры)


function rectangle(count){
    let rectangleStr = "";
    for (let i = 0; i < count; i++){
        rectangleStr = rectangleStr + "*".repeat(count) + '\n';
    }
    return rectangleStr;
}
console.log(rectangle(4));

