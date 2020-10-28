var event, ok;
var answers = 0;

questionCycles(questions.a0, questions.a1, questions.a2, questions.a3, questions.a4, questions.a5);
questionCycles(questions.b0, questions.b1, questions.b2, questions.b3, questions.b4, questions.b5);
questionCycles(questions.c0, questions.c1, questions.c2, questions.c3, questions.c4, questions.c5);
alert("Каким-то чудом вы ответили на " + answers + " вопросов.");
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    } else if (event != q) {
        alert('Не угадали, подумайте еще раз! =)');
        return false;
    }
    alert('Верно!');
    answers++;
    return true;

}

function questionCycles(xyz00, xyz1, xyz2, xyz3, xyz4, xyz5) {
    do {
        ok = false;
        event = +prompt(xyz00 + "\n 1." + xyz1 + "\n 2." + xyz2 + "\n 3." + xyz3 + "\n 4." + xyz4 + '\n -1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(xyz5, event);
        }
    } while (!ok);
}
