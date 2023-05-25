#!/usr/bin/env node
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
const sleep = () => new Promise((resolve) => setTimeout((resolve), 2000));
async function welcomeScreen() {
    let title = chalkAnimation.rainbow(`
=======================================================================
>>>>>>>>>>>>>>>>>>>>>>>>>>> COUNTDOWN TIMER <<<<<<<<<<<<<<<<<<<<<<<<<<<
=======================================================================
`);
    await sleep();
    title.stop();
}
await welcomeScreen();
console.log('\n');
const targetDate = new Date("2023-12-31T23:59:59.999Z");
function countdown() {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
    console.log(chalk.red(`       ${chalk.white(days)} days, ${chalk.blue(hours)} hours, ${chalk.green(minutes)} minutes, ${chalk.green(seconds)} seconds`));
    if (timeDifference <= 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}
const timer = setInterval(countdown, 1000);
