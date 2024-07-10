const quizData = {
    arrays: [
        {
            question: "What is the time complexity of accessing an element in an array by index?",
            a: "O(1)",
            b: "O(n)",
            c: "O(log n)",
            d: "O(n^2)",
            correct: "a",
        },
        {
            question: "Which method is used to add an element at the end of an array in JavaScript?",
            a: "push()",
            b: "pop()",
            c: "shift()",
            d: "unshift()",
            correct: "a",
        },
        {
            question: "What is the time complexity of inserting an element at the beginning of an array?",
            a: "O(1)",
            b: "O(n)",
            c: "O(log n)",
            d: "O(n^2)",
            correct: "b",
        },
        {
            question: "Which method is used to remove the last element from an array in JavaScript?",
            a: "push()",
            b: "pop()",
            c: "shift()",
            d: "unshift()",
            correct: "b",
        },
        {
            question: "What is the index of the first element in an array?",
            a: "0",
            b: "1",
            c: "-1",
            d: "2",
            correct: "a",
        },
    ],
    linkedlists: [
        {
            question: "What is a linked list?",
            a: "A collection of nodes that are stored in contiguous memory locations.",
            b: "A collection of nodes where each node contains data and a reference to the next node.",
            c: "A collection of nodes where each node contains data and a reference to the previous node.",
            d: "A collection of nodes that can be accessed randomly.",
            correct: "b",
        },
        {
            question: "Which type of linked list allows traversal in both directions?",
            a: "Singly linked list",
            b: "Doubly linked list",
            c: "Circular linked list",
            d: "Skip list",
            correct: "b",
        },
        {
            question: "What is the time complexity of searching for an element in a linked list?",
            a: "O(1)",
            b: "O(n)",
            c: "O(log n)",
            d: "O(n log n)",
            correct: "b",
        },
        {
            question: "Which of the following operations is faster in a linked list compared to an array?",
            a: "Accessing an element by index",
            b: "Inserting an element at the beginning",
            c: "Deleting an element at the end",
            d: "Searching for an element",
            correct: "b",
        },
        {
            question: "In a singly linked list, each node contains:",
            a: "Data and two references (next and previous)",
            b: "Only data",
            c: "Data and a reference to the next node",
            d: "Data and a reference to the previous node",
            correct: "c",
        },
    ],
    trees: [
        {
            question: "What is the time complexity of searching for an element in a balanced binary search tree?",
            a: "O(1)",
            b: "O(n)",
            c: "O(log n)",
            d: "O(n log n)",
            correct: "c",
        },
        {
            question: "Which tree traversal method visits the root node first, then the left subtree, and finally the right subtree?",
            a: "In-order traversal",
            b: "Pre-order traversal",
            c: "Post-order traversal",
            d: "Level-order traversal",
            correct: "b",
        },
        {
            question: "What is the height of a tree?",
            a: "The number of nodes in the tree",
            b: "The number of edges in the tree",
            c: "The length of the longest path from the root to a leaf",
            d: "The number of leaves in the tree",
            correct: "c",
        },
        {
            question: "Which data structure is used to implement a binary heap?",
            a: "Array",
            b: "Linked list",
            c: "Stack",
            d: "Queue",
            correct: "a",
        },
        {
            question: "What is an AVL tree?",
            a: "A binary tree with balanced height",
            b: "A binary search tree where the difference in heights of left and right subtrees is at most 1",
            c: "A complete binary tree",
            d: "A tree with a maximum of two children",
            correct: "b",
        },
    ],
    graphs: [
        {
            question: "What is a graph?",
            a: "A collection of nodes and edges",
            b: "A tree with nodes and edges",
            c: "A data structure with nodes arranged in a hierarchy",
            d: "A collection of sorted nodes",
            correct: "a",
        },
        {
            question: "What is the time complexity of Breadth-First Search (BFS) in a graph?",
            a: "O(1)",
            b: "O(n)",
            c: "O(n + m)",
            d: "O(n^2)",
            correct: "c",
        },
        {
            question: "Which algorithm is used to find the shortest path in an unweighted graph?",
            a: "Depth-First Search (DFS)",
            b: "Breadth-First Search (BFS)",
            c: "Dijkstra's algorithm",
            d: "Prim's algorithm",
            correct: "b",
        },
        {
            question: "In a directed graph, what is an edge?",
            a: "A connection between two nodes with a direction",
            b: "A connection between two nodes without a direction",
            c: "A node with a single connection",
            d: "A loop that connects a node to itself",
            correct: "a",
        },
        {
            question: "What is a cycle in a graph?",
            a: "A path that starts and ends at the same node",
            b: "A path that visits all nodes",
            c: "A graph with no edges",
            d: "A disconnected graph",
            correct: "a",
        },
    ],
    sorting: [
        {
            question: "What is the time complexity of Bubble Sort in the worst case?",
            a: "O(1)",
            b: "O(n)",
            c: "O(n log n)",
            d: "O(n^2)",
            correct: "d",
        },
        {
            question: "Which sorting algorithm is considered the fastest in practice?",
            a: "Quick Sort",
            b: "Bubble Sort",
            c: "Selection Sort",
            d: "Insertion Sort",
            correct: "a",
        },
        {
            question: "What is the main advantage of Merge Sort?",
            a: "It has a time complexity of O(n^2)",
            b: "It is an in-place sorting algorithm",
            c: "It is stable and has a time complexity of O(n log n)",
            d: "It always sorts in linear time",
            correct: "c",
        },
        {
            question: "Which sorting algorithm uses the divide and conquer approach?",
            a: "Merge Sort",
            b: "Bubble Sort",
            c: "Selection Sort",
            d: "Insertion Sort",
            correct: "a",
        },
        {
            question: "What is the time complexity of Quick Sort in the average case?",
            a: "O(1)",
            b: "O(n)",
            c: "O(n log n)",
            d: "O(n^2)",
            correct: "c",
        },
    ],
    
};

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerElements = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');
const timerElement = document.getElementById('timer');

let currentCategory = null;
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;

function loadCategory(category) {
    currentCategory = category;
    currentQuiz = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('dsa-buttons').style.display = 'none';
    document.getElementById('answers').style.display = 'block';
    submitButton.style.display = 'block';
    loadQuiz();
}

function showDSAButtons() {
    document.getElementById('dsa-buttons').style.display = 'block';
}

function loadQuiz() {
    clearInterval(timer);
    timeLeft = 10;
    timerElement.innerText = `${timeLeft}s`;
    timer = setInterval(updateTimer, 1000);

    deselectAnswers();
    const currentQuizData = currentQuiz[currentQuestionIndex];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function updateTimer() {
    timeLeft--;
    timerElement.innerText = `${timeLeft}s`;
    if (timeLeft === 0) {
        clearInterval(timer);
        nextQuestion();
    }
}

function getSelected() {
    let answer = undefined;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

function nextQuestion() {
    const answer = getSelected();
    if (answer === currentQuiz[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        loadQuiz();
    } else {
        quizContainer.innerHTML = `
            <h2>You answered ${score}/${currentQuiz.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `;
    }
}

submitButton.addEventListener('click', () => {
    clearInterval(timer);
    nextQuestion();
});

// Initial call to show buttons
showDSAButtons();
