const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// creates empty array for new members to be added
const employees = [];
// initiates start of adding members and inserts members to HTML
function initApp() {
    initHtml();
    addMember();
};
// prompts to add new team member
function addMember() {
    inquirer.prompt([
    {
        type: 'input',
        message: "Enter team member's name",
        name: 'name',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: "Select team member's role",
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ],
        name: 'role'
    },
    {
        type: 'input',
        message: "Enter team member's ID",
        name: 'id',
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Enter team member's email address",
        name: 'email',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    }
    ]).then(function({name, id, email, role}){
        let roleInfo = '';
        if(role === 'Engineer') {
            roleInfo = 'GitHub username';
        } else if (role === 'Intern') {
            roleInfo = 'school name';
        } else {
            roleInfo = 'office phone number'
        }
        inquirer.prompt([
            {
                type: 'input',
                message: `Enter team member's ${roleInfo}`,
                name: 'roleInfo',
                validate: roleInput => {
                    if(roleInput) {
                        return true;
                    } else {
                        console.log('Please enter a role info!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'Would you like to add another team member?',
                choices: [
                    'yes',
                    'no'
                ],
                name: 'moreMembers'
            }
        ]).then(function({roleInfo, moreMembers}){
            let newMember;
            if (role === 'Engineer') {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === 'Intern') {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === 'yes') {
                    addMember();
                } else {
                    finishHtml();
                }
            });
        });
    });
};

function initHtml() {
    const html = `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
    `;
    fs.writeFile('./dist/teamProfile.html', html, function(err) {
        if (err) {
            console.log(err)
        }
    });
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const id = member.getId();
        const email = member.getEmail();
        const role = member.getRole();

        let data = '';
        if (role === 'Engineer') {
            const gitHub = member.getGithub();
            data = 
            `
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Engineer</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: <a href='mailto:${email}'>${email}</a></li>
                        <li class="list-group-item">GitHub: <a href='https://github.com/${gitHub}'>https://github.com/${gitHub}</a></li>
                    </ul>
                </div>
            </div>
            `;
        } else if (role === 'Intern') {
            const school = member.getSchool();
            data =
            `
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Intern</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: <a href='mailto:${email}'>${email}</a></li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>
            `
        } else {
            const officeNumber = member.getOfficeNumber();

            data =
            `
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: <a href='mailto:${email}'>${email}</a></li>
                        <li class="list-group-item">Office Phone: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
            `
        }
        fs.appendFile('./dist/teamProfile.html', data, function(err) {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    });
};

function finishHtml() {
    const html = 
    `
    </div>
    </div>
    
    </body>
    </html>`;

    fs.appendFile('./dist/teamProfile.html', html, function(err) {
        if(err) {
            console.log(err);
        };
    });


}

initApp();