// Claude AI Grading System
// Points: Easy = 2, Medium = 5, Hard = 10

// ============================================
// ADD YOUR ANTHROPIC API KEY HERE:
const ANTHROPIC_API_KEY = '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';  // <-- Paste your key here, e.g., 'sk-ant-api03-...'
// ============================================

const POINTS = {
    easy: 2,
    medium: 5,
    hard: 10
};

const MAX_POINTS = problems.reduce((total, p) => total + POINTS[p.difficulty], 0);

// Store grading results
let gradingResults = {};
let totalScore = 0;

// Load saved results from localStorage
function loadGradingResults() {
    const saved = localStorage.getItem('gradingResults');
    if (saved) {
        try {
            gradingResults = JSON.parse(saved);
            calculateTotalScore();
        } catch (e) {
            gradingResults = {};
        }
    }
}

// Save results to localStorage
function saveGradingResults() {
    localStorage.setItem('gradingResults', JSON.stringify(gradingResults));
}

// Calculate total score
function calculateTotalScore() {
    totalScore = Object.values(gradingResults).reduce((sum, result) => {
        return sum + (result.score || 0);
    }, 0);
    updateScoreDisplay();
    return totalScore;
}

// Update score display in navbar
function updateScoreDisplay() {
    const scoreEl = document.getElementById('totalScore');
    const completedEl = document.getElementById('problemsCompleted');
    
    if (scoreEl) {
        scoreEl.textContent = totalScore;
    }
    
    if (completedEl) {
        const completed = Object.values(gradingResults).filter(r => r.passed).length;
        completedEl.textContent = `(${completed}/15)`;
    }
}

// Get API key - uses hardcoded key first, then falls back to localStorage
function getApiKey() {
    if (ANTHROPIC_API_KEY && ANTHROPIC_API_KEY.length > 0) {
        return ANTHROPIC_API_KEY;
    }
    return localStorage.getItem('claudeApiKey');
}

// Save API key
function saveApiKey() {
    const input = document.getElementById('apiKeyInput');
    const key = input.value.trim();
    
    if (key && key.startsWith('sk-ant-')) {
        localStorage.setItem('claudeApiKey', key);
        closeApiModal();
        showNotification('API key saved successfully!', 'success');
    } else {
        showNotification('Please enter a valid Anthropic API key', 'error');
    }
}

// Show API key modal
function showApiModal() {
    const modal = document.getElementById('apiModal');
    const input = document.getElementById('apiKeyInput');
    
    modal.classList.add('show');
    
    const existingKey = getApiKey();
    if (existingKey) {
        input.value = existingKey;
    }
}

// Close API key modal
function closeApiModal() {
    const modal = document.getElementById('apiModal');
    modal.classList.remove('show');
}

// Show victory modal
function showVictoryModal() {
    const modal = document.getElementById('victoryModal');
    const finalScoreEl = document.getElementById('finalScore');
    const breakdownEl = document.getElementById('scoreBreakdown');
    
    // Play completion sound
    const sound = document.getElementById('completionSound');
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Audio play failed:', e));
    }
    
    // Animate score counting
    finalScoreEl.textContent = '0';
    modal.classList.add('show');
    
    // Create breakdown
    let breakdownHTML = '<div class="breakdown-grid">';
    const difficulties = ['easy', 'medium', 'hard'];
    
    difficulties.forEach(diff => {
        const problemsOfDiff = problems.filter(p => p.difficulty === diff);
        const passedOfDiff = problemsOfDiff.filter(p => gradingResults[p.id]?.passed).length;
        const pointsOfDiff = passedOfDiff * POINTS[diff];
        
        breakdownHTML += `
            <div class="breakdown-item ${diff}">
                <span class="breakdown-label">${diff.charAt(0).toUpperCase() + diff.slice(1)}</span>
                <span class="breakdown-value">${passedOfDiff}/${problemsOfDiff.length}</span>
                <span class="breakdown-points">${pointsOfDiff} pts</span>
            </div>
        `;
    });
    breakdownHTML += '</div>';
    breakdownEl.innerHTML = breakdownHTML;
    
    // Animate score
    let currentScore = 0;
    const targetScore = totalScore;
    const duration = 2000;
    const startTime = Date.now();
    
    function animateScore() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const eased = 1 - Math.pow(1 - progress, 3);
        currentScore = Math.round(targetScore * eased);
        
        finalScoreEl.textContent = currentScore;
        
        if (progress < 1) {
            requestAnimationFrame(animateScore);
        }
    }
    
    setTimeout(animateScore, 500);
}

// Close victory modal
function closeVictoryModal() {
    const modal = document.getElementById('victoryModal');
    modal.classList.remove('show');
}

// Check if all problems are completed
function checkAllCompleted() {
    const completed = Object.values(gradingResults).filter(r => r.passed).length;
    if (completed === 15) {
        setTimeout(showVictoryModal, 1000);
    }
}

// Grade solution with Claude
async function gradeWithClaude(problemId, code, language) {
    const apiKey = getApiKey();
    
    if (!apiKey) {
        showNotification('API key not set. Please add your key in grading.js', 'error');
        return null;
    }
    
    const problem = problems.find(p => p.id === problemId);
    if (!problem) return null;
    
    const points = POINTS[problem.difficulty];
    
    // Show grading popup with loading state
    showGradingPopup(points, true);
    
    // Create the prompt for Claude
    const prompt = createGradingPrompt(problem, code, language, points);
    
    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 1024,
                messages: [{
                    role: 'user',
                    content: prompt
                }]
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API request failed');
        }
        
        const data = await response.json();
        const result = parseGradingResponse(data.content[0].text, problem, points);
        
        // Save result
        gradingResults[problemId] = result;
        saveGradingResults();
        calculateTotalScore();
        
        // Update popup with results
        updateGradingPopup(result);
        
        // Lock editor after grading (regardless of pass/fail)
        lockEditor(problemId);
        
        // Update sidebar
        updateProblemListStatus();
        
        // Check if all completed
        checkAllCompleted();
        
        return result;
        
    } catch (error) {
        console.error('Grading error:', error);
        updateGradingPopupError(error.message);
        return null;
    }
}

// Show grading popup
function showGradingPopup(maxPoints, isLoading = false) {
    const popup = document.getElementById('gradingPopup');
    const header = document.getElementById('gradingPopupHeader');
    const icon = document.getElementById('gradingStatusIcon');
    const title = document.getElementById('gradingPopupTitle');
    const pointsEarned = document.getElementById('pointsEarned');
    const pointsMax = document.getElementById('pointsMax');
    const explanation = document.getElementById('gradingExplanation');
    const hint = document.getElementById('gradingHint');
    const prevBtn = document.getElementById('prevProblemBtn');
    const nextBtn = document.getElementById('nextProblemBtn');
    
    // Reset state
    header.className = 'grading-popup-header';
    icon.textContent = '⏳';
    title.textContent = 'Grading...';
    pointsEarned.textContent = '?';
    pointsMax.textContent = `/ ${maxPoints} pts`;
    explanation.textContent = 'Analyzing your solution...';
    hint.style.display = 'none';
    
    // Disable nav buttons while grading
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    
    popup.classList.add('show');
}

// Update grading popup with results
function updateGradingPopup(result) {
    const header = document.getElementById('gradingPopupHeader');
    const icon = document.getElementById('gradingStatusIcon');
    const title = document.getElementById('gradingPopupTitle');
    const pointsEarned = document.getElementById('pointsEarned');
    const explanation = document.getElementById('gradingExplanation');
    const hint = document.getElementById('gradingHint');
    const prevBtn = document.getElementById('prevProblemBtn');
    const nextBtn = document.getElementById('nextProblemBtn');
    
    // Determine grade level based on percentage
    const percentage = (result.score / result.points) * 100;
    
    if (percentage === 100) {
        header.className = 'grading-popup-header passed';
        icon.textContent = '🌟';
        title.textContent = 'Perfect Score!';
        pointsEarned.style.color = 'var(--accent-green)';
    } else if (percentage >= 70) {
        header.className = 'grading-popup-header partial-good';
        icon.textContent = '✅';
        title.textContent = 'Great Work!';
        pointsEarned.style.color = 'var(--accent-green)';
    } else if (percentage >= 40) {
        header.className = 'grading-popup-header partial-ok';
        icon.textContent = '📝';
        title.textContent = 'Good Effort';
        pointsEarned.style.color = 'var(--medium-color)';
    } else if (percentage > 0) {
        header.className = 'grading-popup-header partial-low';
        icon.textContent = '💪';
        title.textContent = 'Keep Trying';
        pointsEarned.style.color = 'var(--medium-color)';
    } else {
        header.className = 'grading-popup-header failed';
        icon.textContent = '❌';
        title.textContent = 'Needs Work';
        pointsEarned.style.color = 'var(--accent-red)';
    }
    
    pointsEarned.textContent = `${result.score}`;
    
    // Build explanation with breakdown
    let explanationHTML = `<p>${result.feedback}</p>`;
    if (result.breakdown) {
        explanationHTML += `<p class="score-breakdown-text"><strong>Marks:</strong> ${result.breakdown}</p>`;
    }
    explanation.innerHTML = explanationHTML;
    
    // Show suggestion if not perfect
    if (result.score < result.points && result.suggestion) {
        hint.innerHTML = `<h4>💡 To Improve</h4><p>${result.suggestion}</p>`;
        hint.style.display = 'block';
    } else {
        hint.style.display = 'none';
    }
    
    // Enable nav buttons
    if (prevBtn) prevBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
    
    // Update navigation buttons
    updateNavButtons();
}

// Update popup with error
function updateGradingPopupError(errorMessage) {
    const header = document.getElementById('gradingPopupHeader');
    const icon = document.getElementById('gradingStatusIcon');
    const title = document.getElementById('gradingPopupTitle');
    const pointsEarned = document.getElementById('pointsEarned');
    const explanation = document.getElementById('gradingExplanation');
    const prevBtn = document.getElementById('prevProblemBtn');
    const nextBtn = document.getElementById('nextProblemBtn');
    
    header.className = 'grading-popup-header failed';
    icon.textContent = '⚠️';
    title.textContent = 'Grading Error';
    pointsEarned.textContent = '!';
    pointsEarned.style.color = 'var(--medium-color)';
    explanation.textContent = `Error: ${errorMessage}. Please check your API key and try again.`;
    
    // Enable nav buttons
    if (prevBtn) prevBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
    updateNavButtons();
}

// Close grading popup
function closeGradingPopup() {
    const popup = document.getElementById('gradingPopup');
    popup.classList.remove('show');
}

// Navigate to previous problem
function goToPrevProblem() {
    const currentId = getCurrentProblemId();
    if (currentId > 1) {
        closeGradingPopup();
        selectProblem(currentId - 1);
    }
}

// Navigate to next problem
function goToNextProblem() {
    const currentId = getCurrentProblemId();
    if (currentId < 15) {
        closeGradingPopup();
        selectProblem(currentId + 1);
    }
}

// Get current problem ID (from app.js currentProblem)
function getCurrentProblemId() {
    if (typeof currentProblem !== 'undefined' && currentProblem) {
        return currentProblem.id;
    }
    return 1;
}

// Update navigation button visibility
function updateNavButtons() {
    const currentId = getCurrentProblemId();
    const prevBtn = document.getElementById('prevProblemBtn');
    const nextBtn = document.getElementById('nextProblemBtn');
    
    if (prevBtn) {
        prevBtn.style.visibility = currentId > 1 ? 'visible' : 'hidden';
    }
    if (nextBtn) {
        nextBtn.style.visibility = currentId < 15 ? 'visible' : 'hidden';
    }
}

// Lock the code editor for a problem
function lockEditor(problemId) {
    const editor = document.getElementById('codeEditor');
    const status = document.getElementById('editorStatus');
    
    // Mark as locked in storage
    let lockedProblems = JSON.parse(localStorage.getItem('lockedProblems') || '{}');
    lockedProblems[problemId] = true;
    localStorage.setItem('lockedProblems', JSON.stringify(lockedProblems));
    
    // Check if passed or failed for the message
    const result = gradingResults[problemId];
    const message = result && result.passed 
        ? 'Solution accepted! Code is now locked.' 
        : 'Submission graded. Code is now locked.';
    
    // Apply locked state to editor
    editor.readOnly = true;
    editor.classList.add('locked');
    status.classList.add('locked');
    status.style.display = 'flex';
    status.textContent = message;
}

// Check if a problem is locked
function isProblemLocked(problemId) {
    const lockedProblems = JSON.parse(localStorage.getItem('lockedProblems') || '{}');
    return lockedProblems[problemId] === true;
}

// Unlock editor (for when switching problems)
function unlockEditor() {
    const editor = document.getElementById('codeEditor');
    const status = document.getElementById('editorStatus');
    
    editor.readOnly = false;
    editor.classList.remove('locked');
    status.classList.remove('locked');
    status.style.display = 'none';
}

// Create grading prompt for Claude
function createGradingPrompt(problem, code, language, points) {
    return `You are a coding challenge grader. Grade the following solution with partial marks for methodology.

PROBLEM: ${problem.title}
DIFFICULTY: ${problem.difficulty.toUpperCase()} (${points} points total)
LANGUAGE: ${language}

PROBLEM DESCRIPTION:
${stripHtml(problem.description)}

STUDENT'S CODE:
\`\`\`${language}
${code}
\`\`\`

GRADING RUBRIC (${points} points total):
Award partial marks based on the following criteria:

For ${points} point problems, distribute marks as follows:
- Correct understanding of problem (${Math.ceil(points * 0.2)} pts): Shows they understood what was being asked
- Appropriate approach/algorithm (${Math.ceil(points * 0.3)} pts): Used a reasonable method to solve it
- Correct implementation (${Math.ceil(points * 0.3)} pts): Code logic is sound and handles main cases
- Complete solution that works (${Math.ceil(points * 0.2)} pts): Produces correct output for examples

GRADING GUIDELINES:
1. Give method marks even if final answer is wrong - reward good thinking
2. A student who shows understanding but has a bug should get partial credit
3. A student with correct approach but incomplete code should get partial credit
4. Only give 0 if the code shows no understanding of the problem
5. Full marks (${points}/${points}) only if solution is fully correct

RESPOND IN THIS EXACT FORMAT:
SCORE: [number out of ${points}]
FEEDBACK: [2-3 sentences explaining what the student did well and what needs improvement]
BREAKDOWN: [Brief breakdown: Understanding X/${Math.ceil(points * 0.2)}, Approach X/${Math.ceil(points * 0.3)}, Implementation X/${Math.ceil(points * 0.3)}, Correctness X/${Math.ceil(points * 0.2)}]
SUGGESTION: [One specific suggestion to improve, or "Excellent work!" if full marks]

Be encouraging but fair. Reward effort and good methodology.`;
}

// Strip HTML from description
function stripHtml(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
}

// Parse Claude's grading response
function parseGradingResponse(response, problem, points) {
    const lines = response.split('\n');
    
    let score = 0;
    let feedback = '';
    let breakdown = '';
    let suggestion = '';
    
    for (const line of lines) {
        if (line.startsWith('SCORE:')) {
            // Parse score - could be "X" or "X/Y" format
            const scoreText = line.replace('SCORE:', '').trim();
            const scoreMatch = scoreText.match(/(\d+)/);
            if (scoreMatch) {
                score = parseInt(scoreMatch[1]) || 0;
                // Cap at max points
                score = Math.min(score, points);
            }
        } else if (line.startsWith('FEEDBACK:')) {
            feedback = line.replace('FEEDBACK:', '').trim();
        } else if (line.startsWith('BREAKDOWN:')) {
            breakdown = line.replace('BREAKDOWN:', '').trim();
        } else if (line.startsWith('SUGGESTION:')) {
            suggestion = line.replace('SUGGESTION:', '').trim();
        }
    }
    
    // Determine if passed (got full marks)
    const passed = score === points;
    
    return {
        problemId: problem.id,
        passed,
        score,
        points,
        feedback,
        breakdown,
        suggestion,
        timestamp: Date.now()
    };
}

// Display grading result in UI
function displayGradingResult(result) {
    const gradeBadge = document.getElementById('gradeBadge');
    const gradingFeedback = document.getElementById('gradingFeedback');
    
    if (result.passed) {
        gradeBadge.textContent = `+${result.score}`;
        gradeBadge.className = 'grade-badge passed';
    } else {
        gradeBadge.textContent = '0';
        gradeBadge.className = 'grade-badge failed';
    }
    
    gradingFeedback.innerHTML = `
        <div class="feedback-section ${result.passed ? 'success' : 'error'}">
            <div class="feedback-status">
                ${result.passed ? '✅ PASSED' : '❌ NOT PASSED'}
            </div>
            <div class="feedback-text">
                <strong>Feedback:</strong> ${result.feedback}
            </div>
            ${!result.passed ? `
                <div class="feedback-suggestion">
                    <strong>💡 Hint:</strong> ${result.suggestion}
                </div>
            ` : ''}
        </div>
    `;
}

// Update problem list to show completion status
function updateProblemListStatus() {
    document.querySelectorAll('.problem-item').forEach(item => {
        const problemId = parseInt(item.dataset.id);
        const result = gradingResults[problemId];
        
        // Remove existing status
        item.classList.remove('completed', 'attempted');
        
        if (result) {
            if (result.passed) {
                item.classList.add('completed');
                // Add checkmark if not already there
                if (!item.querySelector('.completion-check')) {
                    const check = document.createElement('span');
                    check.className = 'completion-check';
                    check.textContent = '✓';
                    item.appendChild(check);
                }
            } else {
                item.classList.add('attempted');
            }
        }
    });
}

// Show notification
function showNotification(message, type) {
    // Create notification if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Load results on page load
document.addEventListener('DOMContentLoaded', () => {
    loadGradingResults();
    setTimeout(updateProblemListStatus, 100);
});
