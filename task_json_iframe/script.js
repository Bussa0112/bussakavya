document.addEventListener("DOMContentLoaded", function() {
    const works = {

        "task1": { "title": "Task 1: Basic HTML Styling", "url": "works/task1/index.html" },
        "task2": { "title": "Task 2: CSS Hover", "url": "works/task2/index.html" },
        "task3": { "title": "Task 3: Welcome to JS", "url": "works/task3/index.html" },
        "task4": { "title": "Task 4: Calculator with JS", "url": "works/task4/index.html" },
        "task5": { "title": "Task 5: String Operation", "url": "works/task5/index.html" },
        "task6": { "title": "Task 6: Conditions", "url": "works/task6/index.html" },
        "task7": { "title": "Task 7: Call-Stack with Array", "url": "works/task7/index.html" },
        "task8": { "title": "Task 8: Loops", "url": "works/task8/index.html", },
        "task9": { "title": "Task 9: Class Work", "url": "works/task9/index.html" },
        "task10": { "title": "Task 10: Class Work - Objects_2", "url": "works/task10/index.html" },
        "task11": { "title": "Task 11: Functions", "url": "works/task11/index.html" },
        "task12": { "title": "Task 12: Class & Bootstrap", "url": "works/task12/index.html" },
        "task13": { "title": "Task 13: Class & Bootstrap", "url": "works/task13/index.html" },
        "task14": { "title": "Task 14: Loops", "url": "works/task14/index.html" }

    };
    const projectList = document.getElementById('project-list');
    for (const key in works) {
        if (works.hasOwnProperty(key)) {
            const project = works[key];
            const listItem = document.createElement('li');
            const projectLink = document.createElement('a');
            projectLink.href = "#";
            projectLink.textContent = project.title;
            projectLink.addEventListener('click', () => displayProject(project));
            listItem.appendChild(projectLink);
            projectList.appendChild(listItem);
        }
    }
    function displayProject(project) {
        const projectDisplay = document.getElementById('project-display');
        projectDisplay.innerHTML = `
            <h2>${project.title}</h2>
            <iframe src="${project.url}" width="100%" height="500px"></iframe>
        `;
    }
});
