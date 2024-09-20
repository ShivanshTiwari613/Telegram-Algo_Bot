const axios = require("axios");
const { Telegraf } = require("telegraf");
const Some_Algo  = require('./Algorithms/algo.js');
const sort_Algo = require('./Algorithms/Sorting.js');
const {promises: fs} = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './content.txt');
async function loadcontent() {
    return await fs.readFile(filePath, {encoding : 'utf-8'});
}

const bot = new Telegraf('7261044473:AAFMK1e8FTuXvCZdovpK2TXA01PJdcieAro');

bot.start((ctx)=> ctx.reply('Hello..... People of Solace'))
bot.command('BubbleSort', (ctx) => ctx.reply(sort_Algo.bubble_sort));
bot.command('SelectionSort', (ctx) => ctx.reply(sort_Algo.selectio_Sort));
bot.command('InsertionSort', (ctx) => ctx.reply(sort_Algo.Insertion_sort));
bot.command('MergeSort', (ctx) => ctx.reply(Some_Algo.Sorting));


bot.command('stacksimplementation', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/stacks/stack.js');
    return ctx.reply(response.data);
});

bot.command('twoStacksimplementation', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/stacks/two-stack.js');
    return ctx.reply(response.data);
});

bot.command('singlylinkedlist', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/linked-lists/singly.js');
    return ctx.reply(response.data);
});

bot.command('doublylinkedlist', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/linked-lists/doubly.js');
    return ctx.reply(response.data);
});

bot.command('minheap', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/heaps/min-heap.js');
    return ctx.reply(response.data);
});

bot.command('maxheap', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/heaps/max-heap.js');
    return ctx.reply(response.data);
});

bot.command('graphbfs', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/graph/breadth-first-search.js');
    return ctx.reply(response.data);
});

bot.command('graphdfs', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/MakeContributions/DSA/main/algorithms/JavaScript/src/graph/depth-first-search.js');
    return ctx.reply(response.data);
});

bot.command('Algorithm', async (ctx) => {
    const content = await loadcontent();
    ctx.reply(content);
});
bot.on(('sticker'), (ctx) => ctx.reply('❤️')); 

bot.launch();
