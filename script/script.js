let myApp = new Vue({
    el: '#app',
    data: {
        sections: [
            { title: 'Project Title', desc: 'Quick description of yout project.' },
            { title: 'Getting Started', desc: 'Add some instruction to get a functional local copy of the project to run on your machine for developing and testing pourposes.' },
            { title: 'Installation', desc: 'A serie of steps to get a working development setup.', lang: 'bash', code: 'Add bash code here...' },
            { title: 'Usage', desc: 'Some usefull information!', lang: 'C#', code: 'Add functions, routes and the code that helps to the usage of your application...' },
            { title: 'Deploy', desc: 'Add additional notes on how to deploy' },
            { title: 'Tools', desc: 'Add brief description of the tools' },
            { title: 'License', value: 'MIT License' }
        ],
        tools: [{ name: 'Tool 1', link: '' }, { name: 'Tool 2', link: '' }]
    },
    methods: {
        buildREADME() {
            let txt = `# ${this.sections[0].title} \n ${this.sections[0].desc} \n\n `;
            for (let i = 1; i < this.sections.length - 1; i++) {
                txt = txt + this.generateText(this.sections[i]);
            }
            txt = txt + `## ${this.sections[this.sections.length - 1].title}\n`;
            txt = txt + `[${this.sections[this.sections.length - 1].value}](https://choosealicense.com/licenses)\n`;
            download(txt);
        },
        generateText(section) {
            let txt = `## ${section.title}\n${section.desc}\n`;
            if (section.title == 'Installation' || section.title == 'Usage') {
                txt = txt + "```" + `${section.lang}\n`;
                txt = txt + `${section.code}\n`;
                txt = txt + "```\n";
            }
            if (section.title == 'Tools') {
                for (let i = 0; i < this.tools.length; i++) {
                    txt = txt + `> ${this.tools[i].name}\n`;
                }
            }
            return txt;
        },
        removeTool(index) {
            this.tools.splice(index, 1);
        }
    }
});

function download(text) {
    let blob = new Blob([text],
        { type: 'text/plain;charset=utf-8' }
    );
    saveAs(blob, "readme.md");
}

