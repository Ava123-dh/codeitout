// DOM Elements
const problemList = document.getElementById('problemList');
const problemView = document.getElementById('problemView');
const welcomeScreen = document.getElementById('welcomeScreen');
const problemContainer = document.getElementById('problemContainer');
const problemTitle = document.getElementById('problemTitle');
const problemDifficulty = document.getElementById('problemDifficulty');
const problemDescription = document.getElementById('problemDescription');
const codeEditor = document.getElementById('codeEditor');
const languageSelect = document.getElementById('languageSelect');
const runBtn = document.getElementById('runBtn');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const clearOutput = document.getElementById('clearOutput');
const outputArea = document.getElementById('outputArea');
const navLinks = document.querySelectorAll('.nav-link');
const lineNumbers = document.getElementById('lineNumbers');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const codeEditorSection = document.querySelector('.code-editor-section');

// State
let currentProblem = null;
let currentFilter = 'all';
let currentLanguage = 'python'; // Track current language for saving
let savedCode = {}; // Store user code per problem and language
let pyodide = null; // Pyodide instance for Python execution
let pyodideLoading = false;

// Update line numbers
function updateLineNumbers() {
    const lines = codeEditor.value.split('\n');
    const lineCount = lines.length;
    let numbersHTML = '';
    for (let i = 1; i <= lineCount; i++) {
        numbersHTML += `<span>${i}</span>`;
    }
    lineNumbers.innerHTML = numbersHTML;
}

// Sync scroll between editor and line numbers
function syncScroll() {
    lineNumbers.scrollTop = codeEditor.scrollTop;
}

// Toggle fullscreen mode for code editor
function toggleFullscreen() {
    if (!codeEditorSection) return;
    codeEditorSection.classList.toggle('fullscreen');
    
    if (codeEditorSection.classList.contains('fullscreen')) {
        fullscreenBtn.textContent = '⛶';
        fullscreenBtn.title = 'Exit Fullscreen (Esc)';
    } else {
        fullscreenBtn.textContent = '⛶';
        fullscreenBtn.title = 'Toggle Fullscreen';
    }
    
    // Update line numbers after resize
    setTimeout(updateLineNumbers, 100);
}

// Pretty print / format code
function prettyPrintCode() {
    if (!currentProblem) return;
    
    const code = codeEditor.value;
    const language = languageSelect.value;
    let formatted = code;
    
    try {
        if (language === 'python') {
            formatted = formatPython(code);
        } else if (language === 'javascript') {
            formatted = formatJavaScript(code);
        } else if (language === 'java' || language === 'cpp') {
            formatted = formatCStyle(code);
        }
        
        codeEditor.value = formatted;
        updateLineNumbers();
        saveCurrentCode();
        
        // Show feedback
        outputArea.textContent = '✨ Code formatted!';
        outputArea.classList.remove('error');
        setTimeout(() => {
            outputArea.textContent = 'Run your code to see output here...';
        }, 1500);
    } catch (error) {
        outputArea.textContent = 'Could not format code: ' + error.message;
        outputArea.classList.add('error');
    }
}

// Format Python code
function formatPython(code) {
    const lines = code.split('\n');
    const formatted = [];
    let indentLevel = 0;
    const indentSize = 4;
    
    for (let line of lines) {
        let trimmed = line.trim();
        
        // Skip empty lines but preserve them
        if (trimmed === '') {
            formatted.push('');
            continue;
        }
        
        // Decrease indent for lines starting with closing keywords
        if (trimmed.startsWith('elif ') || trimmed.startsWith('else:') || 
            trimmed.startsWith('except') || trimmed.startsWith('finally:') ||
            trimmed.startsWith('elif:')) {
            indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Decrease indent for dedent keywords
        if (trimmed === 'pass' || trimmed === 'break' || trimmed === 'continue' ||
            trimmed.startsWith('return ') || trimmed === 'return') {
            // Keep current indent
        }
        
        // Check for closing brackets/parens that decrease indent
        if (trimmed.startsWith(')') || trimmed.startsWith(']') || trimmed.startsWith('}')) {
            indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Add proper indentation
        const indent = ' '.repeat(indentLevel * indentSize);
        formatted.push(indent + trimmed);
        
        // Increase indent after colon (for blocks)
        if (trimmed.endsWith(':') && !trimmed.startsWith('#')) {
            indentLevel++;
        }
        
        // Handle opening brackets
        if ((trimmed.endsWith('(') || trimmed.endsWith('[') || trimmed.endsWith('{')) &&
            !trimmed.includes(')') && !trimmed.includes(']') && !trimmed.includes('}')) {
            indentLevel++;
        }
    }
    
    return formatted.join('\n');
}

// Format JavaScript code
function formatJavaScript(code) {
    return formatCStyle(code);
}

// Format C-style languages (JavaScript, Java, C++)
function formatCStyle(code) {
    const lines = code.split('\n');
    const formatted = [];
    let indentLevel = 0;
    const indentSize = 4;
    
    for (let line of lines) {
        let trimmed = line.trim();
        
        // Skip empty lines but preserve them
        if (trimmed === '') {
            formatted.push('');
            continue;
        }
        
        // Decrease indent for closing braces
        if (trimmed.startsWith('}') || trimmed.startsWith(')') || trimmed.startsWith(']')) {
            indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Handle else, else if, catch, finally on same indent as if/try
        if (trimmed.startsWith('else') || trimmed.startsWith('catch') || trimmed.startsWith('finally')) {
            // Keep at decreased level
        }
        
        // Add proper indentation
        const indent = ' '.repeat(indentLevel * indentSize);
        formatted.push(indent + trimmed);
        
        // Increase indent after opening braces
        if (trimmed.endsWith('{') || trimmed.endsWith('(') && !trimmed.includes(')')) {
            indentLevel++;
        }
        
        // Handle case/default in switch statements
        if (trimmed.startsWith('case ') || trimmed.startsWith('default:')) {
            // Keep indent level
        }
    }
    
    return formatted.join('\n');
}

// Initialize Pyodide
async function initPyodide() {
    if (pyodide || pyodideLoading) return pyodide;
    
    pyodideLoading = true;
    try {
        pyodide = await loadPyodide();
        console.log('Pyodide loaded successfully');
        pyodideLoading = false;
        return pyodide;
    } catch (error) {
        console.error('Failed to load Pyodide:', error);
        pyodideLoading = false;
        return null;
    }
}

// Initialize the application
function init() {
    renderProblemList();
    setupEventListeners();
    loadSavedState();
    // Pre-load Pyodide in background
    initPyodide();
}

// Render the problem list in the sidebar
function renderProblemList(filter = 'all') {
    problemList.innerHTML = '';
    
    const filteredProblems = filter === 'all' 
        ? problems 
        : problems.filter(p => p.difficulty === filter);
    
    filteredProblems.forEach(problem => {
        const li = document.createElement('li');
        li.className = 'problem-item';
        li.dataset.id = problem.id;
        
        if (currentProblem && currentProblem.id === problem.id) {
            li.classList.add('active');
        }
        
        li.innerHTML = `
            <span class="problem-number">${problem.id}.</span>
            <div class="problem-info">
                <div class="problem-name">${problem.title}</div>
                <div class="problem-difficulty">${capitalizeFirst(problem.difficulty)}</div>
            </div>
            <span class="difficulty-dot ${problem.difficulty}"></span>
        `;
        
        li.addEventListener('click', () => selectProblem(problem.id));
        problemList.appendChild(li);
    });
    
    // Update problem count
    const countEl = document.querySelector('.problem-count');
    countEl.textContent = `${filteredProblems.length} Problems`;
}

// Select and display a problem
function selectProblem(problemId) {
    const problem = problems.find(p => p.id === problemId);
    if (!problem) return;
    
    // Save current code before switching
    if (currentProblem) {
        saveCurrentCode();
    }
    
    currentProblem = problem;
    currentLanguage = languageSelect.value; // Sync current language
    
    // Update sidebar active state
    document.querySelectorAll('.problem-item').forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.id) === problemId) {
            item.classList.add('active');
        }
    });
    
    // Show problem view
    welcomeScreen.style.display = 'none';
    problemContainer.style.display = 'flex';
    
    // Update problem details
    problemTitle.textContent = `${problem.id}. ${problem.title}`;
    problemDifficulty.textContent = capitalizeFirst(problem.difficulty);
    problemDifficulty.className = `badge ${problem.difficulty}`;
    problemDescription.innerHTML = problem.description;
    
    // Load code for this problem
    loadCodeForProblem();
    
    // Clear output
    outputArea.textContent = 'Run your code to see output here...';
    outputArea.classList.remove('success', 'error');
    
    // Check if problem is locked and update editor state
    if (typeof isProblemLocked === 'function' && isProblemLocked(problemId)) {
        lockEditor(problemId);
    } else if (typeof unlockEditor === 'function') {
        unlockEditor();
    }
    
    // Save state
    localStorage.setItem('lastProblemId', problemId);
}

// Load code for current problem and language
function loadCodeForProblem() {
    const language = languageSelect.value;
    const key = `${currentProblem.id}_${language}`;
    
    if (savedCode[key]) {
        codeEditor.value = savedCode[key];
    } else {
        codeEditor.value = currentProblem.starterCode[language] || '';
    }
    updateLineNumbers();
}

// Save current code to state
function saveCurrentCode() {
    if (!currentProblem) return;
    
    const language = languageSelect.value;
    const key = `${currentProblem.id}_${language}`;
    savedCode[key] = codeEditor.value;
    
    // Persist to localStorage
    localStorage.setItem('savedCode', JSON.stringify(savedCode));
}

// Reset code to starter
function resetCode() {
    if (!currentProblem) return;
    
    const confirmed = confirm('Are you sure you want to reset your code? This will discard all your changes.');
    if (!confirmed) return;
    
    const language = languageSelect.value;
    codeEditor.value = currentProblem.starterCode[language] || '';
    
    // Remove saved code for this problem/language
    const key = `${currentProblem.id}_${language}`;
    delete savedCode[key];
    localStorage.setItem('savedCode', JSON.stringify(savedCode));
    updateLineNumbers();
}

// Run code (simulated - shows helpful message)
async function runCode() {
    if (!currentProblem) return;
    
    saveCurrentCode();
    
    const code = codeEditor.value.trim();
    const language = languageSelect.value;
    
    if (!code) {
        outputArea.textContent = 'Error: No code to run. Please write some code first.';
        outputArea.classList.add('error');
        outputArea.classList.remove('success');
        return;
    }
    
    // Show running state
    outputArea.innerHTML = '<div class="output-loading"><div class="spinner"></div> Running code...</div>';
    outputArea.classList.remove('success', 'error');
    
    try {
        let result;
        
        if (language === 'python') {
            result = await runPythonCode(code);
        } else if (language === 'javascript') {
            result = await runJavaScriptCode(code);
        } else if (language === 'java' || language === 'cpp') {
            result = await runWithPiston(code, language);
        } else {
            result = {
                success: false,
                output: `Running ${language} code is not supported.\n\nPlease use Python, JavaScript, Java, or C++.`
            };
        }
        
        if (result.success) {
            outputArea.textContent = result.output || '(No output)';
            outputArea.classList.remove('error');
        } else {
            outputArea.textContent = result.output || 'An error occurred';
            outputArea.classList.add('error');
        }
        
    } catch (error) {
        outputArea.textContent = `Error: ${error.message}`;
        outputArea.classList.add('error');
    }
}

// Run Python code using Pyodide
async function runPythonCode(code) {
    try {
        if (!pyodide) {
            outputArea.innerHTML = '<div class="output-loading"><div class="spinner"></div> Loading Python environment...</div>';
            await initPyodide();
        }
        
        if (!pyodide) {
            return { success: false, output: 'Failed to load Python environment. Please refresh and try again.' };
        }
        
        // Get example input for this problem
        const exampleInput = getExampleInput(currentProblem.id);
        const inputLines = exampleInput.split('\n');
        
        // Setup Python environment with mocked input
        pyodide.runPython(`
import sys
from io import StringIO

# Setup stdout/stderr capture
sys.stdout = StringIO()
sys.stderr = StringIO()

# Mock input function with example inputs
_input_lines = ${JSON.stringify(inputLines)}
_input_index = 0

def _mock_input(prompt=''):
    global _input_index
    if _input_index < len(_input_lines):
        val = _input_lines[_input_index]
        _input_index += 1
        return val
    return ''

# Replace built-in input
import builtins
builtins.input = _mock_input
        `);
        
        // Run the user's code
        try {
            await pyodide.runPythonAsync(code);
        } catch (e) {
            // Try to get stderr, but if that fails too, show the error message
            try {
                const stderr = pyodide.runPython('sys.stderr.getvalue()');
                if (stderr && stderr.trim()) {
                    return { success: false, output: stderr };
                }
            } catch (e2) {
                // Ignore
            }
            // Extract just the useful part of the error
            let errorMsg = e.message || String(e);
            // Clean up Pyodide internal paths from error
            errorMsg = errorMsg.replace(/File "\/lib\/python[^"]+", line \d+, in [^\n]+\n/g, '');
            errorMsg = errorMsg.replace(/\s*\^+\s*/g, '\n');
            return { success: false, output: `Error:\n${errorMsg}` };
        }
        
        // Get the output
        const stdout = pyodide.runPython('sys.stdout.getvalue()');
        const stderr = pyodide.runPython('sys.stderr.getvalue()');
        
        if (stderr && stderr.trim()) {
            return { success: false, output: stderr };
        }
        
        return { success: true, output: `Input used:\n${exampleInput}\n\nOutput:\n${stdout}` };
        
    } catch (error) {
        return { success: false, output: `Python Error: ${error.message}` };
    }
}

// Run JavaScript code
async function runJavaScriptCode(code) {
    try {
        // Create a sandboxed environment with captured console
        let output = '';
        const customConsole = {
            log: (...args) => { output += args.map(a => String(a)).join(' ') + '\n'; },
            error: (...args) => { output += 'Error: ' + args.map(a => String(a)).join(' ') + '\n'; },
            warn: (...args) => { output += 'Warning: ' + args.map(a => String(a)).join(' ') + '\n'; },
        };
        
        // Wrap code to capture console output
        const wrappedCode = `
            (function(console) {
                ${code}
            })
        `;
        
        const fn = eval(wrappedCode);
        fn(customConsole);
        
        return { success: true, output: output || '(No output - use console.log() to print)' };
        
    } catch (error) {
        return { success: false, output: `JavaScript Error: ${error.message}` };
    }
}

// Run Java/C++ code using Piston API (free online compiler)
async function runWithPiston(code, language) {
    try {
        const exampleInput = getExampleInput(currentProblem.id);
        
        // Map language names to Piston API language identifiers
        const languageMap = {
            'java': { language: 'java', version: '15.0.2' },
            'cpp': { language: 'c++', version: '10.2.0' }
        };
        
        const langConfig = languageMap[language];
        if (!langConfig) {
            return { success: false, output: `Language ${language} is not supported.` };
        }
        
        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                language: langConfig.language,
                version: langConfig.version,
                files: [{
                    name: language === 'java' ? 'Main.java' : 'main.cpp',
                    content: code
                }],
                stdin: exampleInput
            })
        });
        
        if (!response.ok) {
            return { success: false, output: `Server error: ${response.status}. Please try again.` };
        }
        
        const result = await response.json();
        
        // Check for compilation errors
        if (result.compile && result.compile.code !== 0) {
            return { 
                success: false, 
                output: `Compilation Error:\n${result.compile.stderr || result.compile.output}` 
            };
        }
        
        // Check for runtime errors
        if (result.run) {
            const output = result.run.stdout || '';
            const stderr = result.run.stderr || '';
            
            if (result.run.code !== 0 || stderr) {
                return { 
                    success: false, 
                    output: `Runtime Error:\n${stderr || output}` 
                };
            }
            
            return { 
                success: true, 
                output: `Input used:\n${exampleInput}\n\nOutput:\n${output || '(No output)'}` 
            };
        }
        
        return { success: false, output: 'Unexpected response from compiler service.' };
        
    } catch (error) {
        return { success: false, output: `Error: ${error.message}\n\nMake sure you have an internet connection.` };
    }
}

// Get example input based on problem ID
function getExampleInput(problemId) {
    const examples = {
        1: '7\n4\n8',
        2: '12\n30\n9',
        3: '1274\n38692\n53\n9358\n790\n55438\n680\n3626\n98643\n1650\n765444\n7',
        4: 'he\njumped\nup',
        5: 'a quick brown fox jumped over her lazy dog',
        6: '22',
        7: '40\n6',
        8: '(array input - see problem description)',
        9: '(class implementation - see problem description)',
        10: '4\n13\n7',
        11: '4\n1432\n2314\n3241',
        12: 'aabxbaa',
        13: '(array input - see problem description)',
        14: '6 2\n5 1 4 9 2 3',
        15: '(predefined sequences - see problem description)'
    };
    return examples[problemId] || '(see problem description)';
}

// Submit code for Claude grading
async function submitForGrading() {
    if (!currentProblem) return;
    
    // Check if already locked
    if (typeof isProblemLocked === 'function' && isProblemLocked(currentProblem.id)) {
        showNotification('This problem is already completed!', 'error');
        return;
    }
    
    saveCurrentCode();
    
    const code = codeEditor.value.trim();
    const language = languageSelect.value;
    
    if (!code || code === currentProblem.starterCode[language].trim()) {
        showNotification('Please write your solution before submitting!', 'error');
        return;
    }
    
    // Disable submit button during grading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Grading...';
    
    try {
        await gradeWithClaude(currentProblem.id, code, language);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '✓ Submit for Grading';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language selector
    languageSelect.addEventListener('change', () => {
        // Save code to the PREVIOUS language before switching
        if (currentProblem) {
            const key = `${currentProblem.id}_${currentLanguage}`;
            savedCode[key] = codeEditor.value;
            localStorage.setItem('savedCode', JSON.stringify(savedCode));
        }
        // Update current language and load new code
        currentLanguage = languageSelect.value;
        loadCodeForProblem();
        updateLineNumbers();
    });
    
    // Run button
    runBtn.addEventListener('click', runCode);
    
    // Submit button for grading
    submitBtn.addEventListener('click', submitForGrading);
    
    // Reset button
    resetBtn.addEventListener('click', resetCode);
    
    // Clear output button
    clearOutput.addEventListener('click', () => {
        outputArea.textContent = 'Run your code to see output here...';
        outputArea.classList.remove('success', 'error');
    });
    
    // Navigation filter links
    navLinks.forEach(link => {
        // Skip the rubric link - it should navigate normally
        if (link.classList.contains('rubric-link')) return;
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            navLinks.forEach(l => {
                if (!l.classList.contains('rubric-link')) {
                    l.classList.remove('active');
                }
            });
            link.classList.add('active');
            
            currentFilter = link.dataset.filter;
            renderProblemList(currentFilter);
        });
    });
    
    // Auto-save on code change and update line numbers
    codeEditor.addEventListener('input', (e) => {
        updateLineNumbers();
        debounce(saveCurrentCode, 1000)();
        
        // Auto-dedent when typing closing brackets
        const cursorPos = codeEditor.selectionStart;
        const value = codeEditor.value;
        const charTyped = value.charAt(cursorPos - 1);
        
        if (charTyped === '}' || charTyped === ')' || charTyped === ']') {
            // Get current line start
            const lineStart = value.lastIndexOf('\n', cursorPos - 1) + 1;
            const beforeCursor = value.substring(lineStart, cursorPos);
            
            // If the line only has whitespace before the closing bracket
            if (/^\s*[\}\)\]]$/.test(beforeCursor)) {
                // Find matching indent level by counting brackets
                const textBefore = value.substring(0, lineStart);
                const lines = textBefore.split('\n');
                
                // Find the line with the opening bracket
                let openCount = 0;
                let targetIndent = '';
                const openBracket = charTyped === '}' ? '{' : (charTyped === ')' ? '(' : '[');
                
                for (let i = lines.length - 1; i >= 0; i--) {
                    const line = lines[i];
                    for (let j = line.length - 1; j >= 0; j--) {
                        const c = line[j];
                        if (c === charTyped) openCount++;
                        if (c === openBracket) {
                            if (openCount === 0) {
                                // Found matching bracket
                                const indentMatch = line.match(/^(\s*)/);
                                targetIndent = indentMatch ? indentMatch[1] : '';
                                break;
                            }
                            openCount--;
                        }
                    }
                    if (targetIndent !== '' || (lines[i].includes(openBracket) && openCount < 0)) {
                        const indentMatch = lines[i].match(/^(\s*)/);
                        targetIndent = indentMatch ? indentMatch[1] : '';
                        break;
                    }
                }
                
                // Replace the current line's indentation
                const newLine = targetIndent + charTyped;
                const newValue = value.substring(0, lineStart) + newLine + value.substring(cursorPos);
                const newCursorPos = lineStart + newLine.length;
                
                codeEditor.value = newValue;
                codeEditor.selectionStart = codeEditor.selectionEnd = newCursorPos;
                updateLineNumbers();
            }
        }
    });
    
    // Sync scroll between editor and line numbers
    codeEditor.addEventListener('scroll', syncScroll);
    
    // Handle Tab key for proper indentation and auto-indent on Enter
    codeEditor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeEditor.selectionStart;
            const end = codeEditor.selectionEnd;
            
            // Shift+Tab to dedent
            if (e.shiftKey) {
                const value = codeEditor.value;
                const lineStart = value.lastIndexOf('\n', start - 1) + 1;
                const lineContent = value.substring(lineStart);
                
                if (lineContent.startsWith('    ')) {
                    codeEditor.value = value.substring(0, lineStart) + lineContent.substring(4);
                    codeEditor.selectionStart = codeEditor.selectionEnd = Math.max(lineStart, start - 4);
                } else if (lineContent.startsWith('\t')) {
                    codeEditor.value = value.substring(0, lineStart) + lineContent.substring(1);
                    codeEditor.selectionStart = codeEditor.selectionEnd = Math.max(lineStart, start - 1);
                }
            } else {
                codeEditor.value = codeEditor.value.substring(0, start) + '    ' + codeEditor.value.substring(end);
                codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
            }
            updateLineNumbers();
        }
        
        // Auto-indent on Enter
        if (e.key === 'Enter') {
            e.preventDefault();
            const start = codeEditor.selectionStart;
            const value = codeEditor.value;
            
            // Get current line
            const lineStart = value.lastIndexOf('\n', start - 1) + 1;
            const currentLine = value.substring(lineStart, start);
            
            // Get current indentation
            const indentMatch = currentLine.match(/^(\s*)/);
            let indent = indentMatch ? indentMatch[1] : '';
            
            // Check if we should add extra indent (after {, :, (, [)
            const trimmedLine = currentLine.trim();
            const lastChar = trimmedLine.slice(-1);
            const language = languageSelect.value;
            
            const shouldIndent = 
                lastChar === '{' || 
                lastChar === '[' || 
                lastChar === '(' ||
                (lastChar === ':' && (language === 'python'));
            
            if (shouldIndent) {
                indent += '    ';
            }
            
            // Check if cursor is between brackets like {} or ()
            const charAfter = value.charAt(start);
            const charBefore = value.charAt(start - 1);
            const isBetweenBrackets = 
                (charBefore === '{' && charAfter === '}') ||
                (charBefore === '(' && charAfter === ')') ||
                (charBefore === '[' && charAfter === ']');
            
            if (isBetweenBrackets) {
                // Add new line with indent, then another line with closing bracket
                const baseIndent = indentMatch ? indentMatch[1] : '';
                const newValue = value.substring(0, start) + '\n' + indent + '\n' + baseIndent + value.substring(start);
                codeEditor.value = newValue;
                codeEditor.selectionStart = codeEditor.selectionEnd = start + 1 + indent.length;
            } else {
                // Insert newline with proper indentation
                const newValue = value.substring(0, start) + '\n' + indent + value.substring(start);
                codeEditor.value = newValue;
                codeEditor.selectionStart = codeEditor.selectionEnd = start + 1 + indent.length;
            }
            updateLineNumbers();
        }
        
        // Backspace to remove 4 spaces at once if at indent
        if (e.key === 'Backspace') {
            const start = codeEditor.selectionStart;
            const end = codeEditor.selectionEnd;
            
            if (start === end && start >= 4) {
                const value = codeEditor.value;
                const lineStart = value.lastIndexOf('\n', start - 1) + 1;
                const beforeCursor = value.substring(lineStart, start);
                
                // If only spaces before cursor and multiple of 4
                if (/^\s+$/.test(beforeCursor) && beforeCursor.length % 4 === 0) {
                    e.preventDefault();
                    codeEditor.value = value.substring(0, start - 4) + value.substring(start);
                    codeEditor.selectionStart = codeEditor.selectionEnd = start - 4;
                    updateLineNumbers();
                }
            }
        }
    });
    
    // Fullscreen toggle
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    
    // Escape key to exit fullscreen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && codeEditorSection && codeEditorSection.classList.contains('fullscreen')) {
            toggleFullscreen();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to run
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
        
        // Ctrl/Cmd + S to save
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveCurrentCode();
            outputArea.textContent = '✓ Code saved!';
            outputArea.classList.remove('error');
            setTimeout(() => {
                outputArea.textContent = 'Run your code to see output here...';
            }, 1500);
        }
        
        // Ctrl/Cmd + Shift + F to format code
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'f') {
            e.preventDefault();
            prettyPrintCode();
        }
    });
    
    // Tab key in editor
    codeEditor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeEditor.selectionStart;
            const end = codeEditor.selectionEnd;
            codeEditor.value = codeEditor.value.substring(0, start) + '    ' + codeEditor.value.substring(end);
            codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
        }
    });
}

// Load saved state from localStorage
function loadSavedState() {
    // Load saved code
    const saved = localStorage.getItem('savedCode');
    if (saved) {
        try {
            savedCode = JSON.parse(saved);
        } catch (e) {
            savedCode = {};
        }
    }
    
    // Load last viewed problem
    const lastProblemId = localStorage.getItem('lastProblemId');
    if (lastProblemId) {
        selectProblem(parseInt(lastProblemId));
    }
}

// Utility functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
