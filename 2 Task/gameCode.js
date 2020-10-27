var event, ok;
var answers = [];

questionCycles(works.a00, works.a1, works.a2, works.a0); //Выводим первый вопрос
answers.push(event);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        questionCycles(works.b00, works.b1, works.b2, works.b0);
        answers.push(event);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                questionCycles(works.d00, works.d1, works.d2, works.d0);
                answers.push(event);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                questionCycles(works.d00, works.d1, works.d2, works.d0);
                answers.push(event);
                break;
            case -1: // Второе действие
                answers.push(event);
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        questionCycles(works.c00, works.c1, works.c2, works.c0);
        answers.push(event);
        switch (event) {
            case 1: // Второе действие
                questionCycles(works.d00, works.d1, works.d2, works.d0);
                answers.push(event);
                break;
            case 2: // Второе действие
                questionCycles(works.d00, works.d1, works.d2, works.d0);
                answers.push(event);
                break;
            case -1: // Второе действие
                answers.push(event);
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        answers.push(event);
        break;
    default:
        alert('Ошибка');
}

var questWind = parseInt(prompt("Какой номер Вашего ответа изволите лицезреть?"));
alert("В " + questWind + " окне Вы нажали: " + answers[questWind - 1]);
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

function questionCycles(xyz00, xyz1, xyz2, xyz0) {
    do {
        ok = false;
        event = +prompt(xyz00 + xyz1 + xyz2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(xyz0, event);
        }
    } while (!ok);
}
