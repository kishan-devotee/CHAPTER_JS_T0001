const students = [
    { name: "Rahul", scores: { math: 85, english: 90, science: 80, history: 75, geography: 88 } },
    { name: "Amit", scores: { math: 78, english: 85, science: 82, history: 70, geography: 75 } },
    { name: "Sachin", scores: { math: 92, english: 88, science: 95, history: 89, geography: 93 } },
    { name: "Naveen", scores: { math: 88, english: 92, science: 85, history: 80, geography: 87 } },
    { name: "Ravi", scores: { math: 72, english: 75, science: 70, history: 65, geography: 78 } },
    { name: "Kiran", scores: { math: 95, english: 98, science: 92, history: 91, geography: 94 } },
    { name: "Ajay", scores: { math: 81, english: 85, science: 79, history: 75, geography: 80 } }
];

function calculateStatistics(data) {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    let totalSubjects = 0;

    for (let student of data) {
        let totalScore = 0;
        for (let subject in student.scores) {
            let score = student.scores[subject];
            totalScore += score;
            if (score < min) min = score;
            if (score > max) max = score;
        }
        sum += totalScore;
        totalSubjects += Object.keys(student.scores).length;
    }

    let average = sum / totalSubjects;
    return { sum, min, max, average };
}

function updateStatistics(stats) {
    const statsList = document.getElementById('stats-list');
    statsList.innerHTML = `
        <li>Sum: ${stats.sum}</li>
        <li>Minimum: ${stats.min}</li>
        <li>Maximum: ${stats.max}</li>
        <li>Average: ${stats.average.toFixed(2)}</li>
    `;
}

function updateCharts(data) {
    updateBarChart(data);
}

let barChart, doughnutChart;

function updateBarChart(data) {
    const labels = data.map(student => student.name);
    const scores = data.map(student => {
        return Object.values(student.scores).reduce((acc, score) => acc + score, 0);
    });

    const ctx = document.getElementById('bar-chart').getContext('2d');
    if (barChart) barChart.destroy();
    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Scores',
                data: scores,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateDoughnutChart(student) {
    const labels = Object.keys(student.scores);  // return for array
    const scores = Object.values(student.scores);

    const ctx = document.getElementById('doughnut-chart').getContext('2d');
    if (doughnutChart) doughnutChart.destroy();
    doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Scores',
                data: scores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 1
            }]
        }
    });
}

function populateStudentSelect() {
    const studentSelect = document.getElementById('student-select');
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.name;
        option.textContent = student.name;
        studentSelect.appendChild(option);
    });

    studentSelect.addEventListener('change', function () {
        const selectedStudent = students.find(student => student.name === this.value);
        updateDoughnutChart(selectedStudent);
    });

    updateDoughnutChart(students[0]);
}

window.onload = function() {
    const initialStats = calculateStatistics(students);
    updateStatistics(initialStats);
    updateCharts(students);
    populateStudentSelect();
};
