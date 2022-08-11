const cTable = require('console.table');
const getIDFromCombinedData = require('./helpers/getIDFromCombinedData');
const inquirer = require('inquirer');
const rootQuestions = require('./questions/rootQuestions');
const questionsDictFunc = require('./questions/questionsDict');
const utilsDict = require('./helpers/utilsDict');

let questionsDict = questionsDictFunc();
let continueQuestion = [{
    type: 'confirm',
    message: 'Do you want to continue',
    name: "isContinued",
}];
let question;
function getInput(questions) {
    return inquirer.prompt(questions)
            .then((answers) => {
                if (answers.hasOwnProperty("isContinued")) {
                    if (answers["isContinued"]) {
                        return getInput(rootQuestions);
                    } else {
                        console.log("Bye");
                        return;
                    }
                }

                if (answers["basicAction"]) {
                    question = answers["basicAction"];
                    if (question === "Quit") {
                        console.log("Bye");
                        return;
                    }
                    if (questionsDict.has(answers["basicAction"])) {
                        return getInput(questionsDict.get(question));
                    } else {
                        // View all query
                        let queryFunc = utilsDict.get(question);
                        let queryRes = queryFunc();
                        let table = cTable.getTable(queryRes);
                        console.log(table);
                        return getInput(continueQuestion);
                    }
                } else {
                    let values = [];
                    for (let key in answers) {
                        values.push(answers[key]);
                    }
                    let queryFunc = utilsDict.get(question);
                    let queryRes = queryFunc(...values);
                    let table = cTable.getTable(queryRes);
                    console.log(table);
                    return getInput(continueQuestion);
                }
            })
}

getInput(rootQuestions);