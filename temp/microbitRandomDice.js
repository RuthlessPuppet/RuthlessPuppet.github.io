let ledX;
let ledY;

input.onButtonPressed(Button.B, function() 
{
    led.plotAll();
    ClearDiceBoard();
    RandomizeDice();
}
)


function ClearBoard() {
    ledX = 0
    ledY = 0
    while (ledX != 5) {
        led.unplot(ledX, ledY);
        ledY += 1;
        if (ledY === 5) {
            ledY = 0;
            ledX += 1;
        }
    }
}

function ClearDiceBoard() {
    ledX = 1
    ledY = 1
    while (ledX != 4) {
        led.unplot(ledX, ledY);
        ledY += 1;
        if (ledY === 4) {
            ledY = 1;
            ledX += 1;
        }
    }
}


function RandomizeDice() {
    switch (Math.randomRange(1, 6)) {
        case 1:
            point(2, 2);
            break;
        case 2:
            point(3, 3);
            point(1, 1);
            break;
        case 3:
            point(3, 3);
            point(2, 2);
            point(1, 1);
            break;
        case 4:
            point(1, 1);
            point(1, 3);
            point(3, 1);
            point(3, 3);
            break;
        case 5:
            point(1, 1);
            point(1, 3);
            point(2, 2);
            point(3, 1);
            point(3, 3);
            break;
        case 6:
            point(1, 1);
            point(1, 3);
            point(2, 1);
            point(2, 3);
            point(3, 1);
            point(3, 3);
            break;
    }
}



function point(x: number, y: number) {
    led.plot(x, y)
}
