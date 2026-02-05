const problems = [
    {
        id: 1,
        title: "Electric",
        difficulty: "easy",
        description: `
            <h2>Problem Description</h2>
            <p>Power in a circuit is calculated using the formula:</p>
            <div class="formula">P = I²R</div>
            <p>Energy used over t seconds is:</p>
            <div class="formula">E = P · t</div>
            <p>Given I (amps), R (ohms), and t (seconds) as whole numbers, output E.</p>

            <h2>Input</h2>
            <p>Three positive whole numbers on separate lines: I, then R, then t.</p>

            <h2>Output</h2>
            <p>A single positive whole number: E (joules).</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
7
4
8

Output:
1568</pre>
            </div>

            <h2>Explanation</h2>
            <p>P = 7² × 4 = 49 × 4 = 196</p>
            <p>E = 196 × 8 = 1568 joules</p>
        `,
        starterCode: {
            python: `# Read input values
I = int(input())
R = int(input())
t = int(input())

# Calculate power and energy
# P = I²R, E = P·t

# Write your solution below
`,
            javascript: `// Read input from stdin
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
    lines.push(parseInt(line));
    if (lines.length === 3) {
        const [I, R, t] = lines;
        // Calculate power and energy
        // P = I²R, E = P·t
        
        // Write your solution below
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int I = scanner.nextInt();
        int R = scanner.nextInt();
        int t = scanner.nextInt();
        
        // Calculate power and energy
        // P = I²R, E = P·t
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    int I, R, t;
    cin >> I >> R >> t;
    
    // Calculate power and energy
    // P = I²R, E = P·t
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 2,
        title: "Multi-Tips",
        difficulty: "easy",
        description: `
            <h2>Problem Description</h2>
            <p>Three friends each track their own menu spending (whole pounds).</p>
            <p>Each person adds a tip equal to <strong>10% of what they owe, rounded down</strong> to the nearest pound.</p>
            <p>Compute the final total paid by the group.</p>

            <h2>Input</h2>
            <p>Three lines: three positive integers (each friend's spend in pounds).</p>

            <h2>Output</h2>
            <p>A single positive integer: total paid (spend + individual tips).</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
12
30
9

Output:
55</pre>
            </div>

            <h2>Explanation</h2>
            <p>Friend 1: £12 + £1 tip (10% of 12 = 1.2, rounded down) = £13</p>
            <p>Friend 2: £30 + £3 tip (10% of 30 = 3) = £33</p>
            <p>Friend 3: £9 + £0 tip (10% of 9 = 0.9, rounded down) = £9</p>
            <p>Total: 13 + 33 + 9 = 55</p>
        `,
        starterCode: {
            python: `# Read input values
spend1 = int(input())
spend2 = int(input())
spend3 = int(input())

# Calculate total with tips (10% rounded down per person)

# Write your solution below
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
    lines.push(parseInt(line));
    if (lines.length === 3) {
        const [spend1, spend2, spend3] = lines;
        
        // Calculate total with tips (10% rounded down per person)
        
        // Write your solution below
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int spend1 = scanner.nextInt();
        int spend2 = scanner.nextInt();
        int spend3 = scanner.nextInt();
        
        // Calculate total with tips (10% rounded down per person)
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    int spend1, spend2, spend3;
    cin >> spend1 >> spend2 >> spend3;
    
    // Calculate total with tips (10% rounded down per person)
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 3,
        title: "Number Validator",
        difficulty: "easy",
        description: `
            <h2>Problem Description</h2>
            <p>A positive whole number is <strong>valid</strong> if its last digit is exactly one more or one less than its first digit.</p>
            <p>Read 12 numbers and output how many are valid.</p>

            <h2>Input</h2>
            <p>Twelve positive whole numbers, one per line.</p>

            <h2>Output</h2>
            <p>A single non-negative whole number: the count of valid numbers.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
1274
38692
53
9358
790
55438
680
3626
98643
1650
765444
7

Output:
3</pre>
            </div>

            <div class="constraints-box">
                <h4>Constraints</h4>
                <p>Each number is between 1 and 1,000,000 inclusive.</p>
            </div>

            <h2>Explanation</h2>
            <p>Valid numbers: 38692 (first=3, last=2), 790 (first=7, last=0... wait, |7-0|=7≠1), let's check:</p>
            <ul>
                <li>38692: first=3, last=2, |3-2|=1 ✓</li>
                <li>9358: first=9, last=8, |9-8|=1 ✓</li>
                <li>680: first=6, last=0, |6-0|=6 ✗</li>
                <li>98643: first=9, last=3, |9-3|=6 ✗</li>
            </ul>
        `,
        starterCode: {
            python: `# Read 12 numbers and count valid ones
# A number is valid if |first_digit - last_digit| == 1

count = 0
for _ in range(12):
    num = int(input())
    # Check if valid
    
    # Write your solution below

print(count)
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = [];
rl.on('line', (line) => {
    numbers.push(parseInt(line));
    if (numbers.length === 12) {
        let count = 0;
        
        // Check each number if valid
        // A number is valid if |first_digit - last_digit| == 1
        
        // Write your solution below
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = 0;
        
        for (int i = 0; i < 12; i++) {
            int num = scanner.nextInt();
            // Check if valid
            // A number is valid if |first_digit - last_digit| == 1
            
            // Write your solution below
            
        }
        
        System.out.println(count);
    }
}
`,
            cpp: `#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
    int count = 0;
    
    for (int i = 0; i < 12; i++) {
        int num;
        cin >> num;
        
        // Check if valid
        // A number is valid if |first_digit - last_digit| == 1
        
        // Write your solution below
        
    }
    
    cout << count << endl;
    return 0;
}
`
        }
    },
    {
        id: 4,
        title: "Speak Backwards",
        difficulty: "easy",
        description: `
            <h2>Problem Description</h2>
            <p>Input three words (one per line) and output them in reverse order, separated by spaces.</p>

            <h2>Input</h2>
            <p>Three lines, each containing one word.</p>

            <h2>Output</h2>
            <p>One line consisting of three space-separated words in reverse order.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
he
jumped
up

Output:
up jumped he</pre>
            </div>

            <div class="constraints-box">
                <h4>Constraints</h4>
                <p>Words are all different, lowercase only, and each has fewer than 20 characters.</p>
            </div>
        `,
        starterCode: {
            python: `# Read three words
word1 = input()
word2 = input()
word3 = input()

# Output in reverse order, separated by spaces

# Write your solution below
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const words = [];
rl.on('line', (line) => {
    words.push(line.trim());
    if (words.length === 3) {
        // Output in reverse order, separated by spaces
        
        // Write your solution below
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String word1 = scanner.nextLine();
        String word2 = scanner.nextLine();
        String word3 = scanner.nextLine();
        
        // Output in reverse order, separated by spaces
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string word1, word2, word3;
    cin >> word1 >> word2 >> word3;
    
    // Output in reverse order, separated by spaces
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 5,
        title: "Missing Letters",
        difficulty: "medium",
        description: `
            <h2>Problem Description</h2>
            <p>A <strong>pangram</strong> contains every letter a–z at least once.</p>
            <p>Given a lowercase sentence (no punctuation), output all missing letters in alphabetical order.</p>

            <h2>Input</h2>
            <p>One line: a lowercase sentence without punctuation.</p>

            <h2>Output</h2>
            <p>One line: the missing lowercase letters in alphabetical order.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
a quick brown fox jumped over her lazy dog

Output:
st</pre>
            </div>

            <h2>Explanation</h2>
            <p>The sentence contains all letters except 's' and 't'. These are output in alphabetical order.</p>
        `,
        starterCode: {
            python: `# Read the sentence
sentence = input().lower()

# Find all missing letters (a-z) and output them in alphabetical order

# Write your solution below
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (sentence) => {
    sentence = sentence.toLowerCase();
    
    // Find all missing letters (a-z) and output them in alphabetical order
    
    // Write your solution below
    
    rl.close();
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String sentence = scanner.nextLine().toLowerCase();
        
        // Find all missing letters (a-z) and output them in alphabetical order
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
#include <string>
#include <set>
using namespace std;

int main() {
    string sentence;
    getline(cin, sentence);
    
    // Find all missing letters (a-z) and output them in alphabetical order
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 6,
        title: "Revision Schedule",
        difficulty: "medium",
        description: `
            <h2>Problem Description</h2>
            <p>A student learns vocabulary with this routine:</p>
            <ul>
                <li><strong>Day 1:</strong> learn up to 5 new words.</li>
                <li><strong>Day 2+:</strong> revise all learned so far, then learn up to 5 new words (fewer on the final day if needed).</li>
            </ul>
            <p>A "word interaction" counts every time a word is revised, plus every new word learned that day.</p>
            <p>Given N (total words to learn), output the total number of word interactions across the whole schedule.</p>

            <h2>Input</h2>
            <p>A single positive whole number N.</p>

            <h2>Output</h2>
            <p>A single positive whole number: total interactions.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
22

Output:
72</pre>
            </div>

            <div class="constraints-box">
                <h4>Constraints</h4>
                <p>1 ≤ N ≤ 200</p>
            </div>

            <h2>Explanation</h2>
            <p>Day 1: Learn 5 words → 5 interactions, total learned = 5</p>
            <p>Day 2: Revise 5 + Learn 5 → 10 interactions, total learned = 10</p>
            <p>Day 3: Revise 10 + Learn 5 → 15 interactions, total learned = 15</p>
            <p>Day 4: Revise 15 + Learn 5 → 20 interactions, total learned = 20</p>
            <p>Day 5: Revise 20 + Learn 2 → 22 interactions, total learned = 22</p>
            <p>Total: 5 + 10 + 15 + 20 + 22 = 72</p>
        `,
        starterCode: {
            python: `# Read total words to learn
N = int(input())

# Calculate total word interactions
# Day 1: learn up to 5 new words
# Day 2+: revise all learned + learn up to 5 new words

# Write your solution below
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const N = parseInt(line);
    
    // Calculate total word interactions
    // Day 1: learn up to 5 new words
    // Day 2+: revise all learned + learn up to 5 new words
    
    // Write your solution below
    
    rl.close();
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        
        // Calculate total word interactions
        // Day 1: learn up to 5 new words
        // Day 2+: revise all learned + learn up to 5 new words
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    int N;
    cin >> N;
    
    // Calculate total word interactions
    // Day 1: learn up to 5 new words
    // Day 2+: revise all learned + learn up to 5 new words
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 7,
        title: "Strike Out Zeroes",
        difficulty: "medium",
        description: `
            <h2>Problem Description</h2>
            <p>Start with an initial whole number as term 1 of a sequence.</p>
            <p>To get the next term: <strong>multiply by 5</strong>, then <strong>remove all trailing zeros</strong> (divide by 10 repeatedly while the last digit is 0).</p>
            <p>Given the starting term and n, output the n-th term.</p>

            <h2>Input</h2>
            <p>Two lines: the starting term (a whole number), then n (a positive whole number).</p>

            <h2>Output</h2>
            <p>A single whole number: the n-th term.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
40
6

Output:
125</pre>
            </div>

            <div class="constraints-box">
                <h4>Constraints</h4>
                <p>Starting term is between −1000 and 1000 inclusive. 1 ≤ n ≤ 10.</p>
            </div>

            <h2>Explanation</h2>
            <p>Term 1: 40</p>
            <p>Term 2: 40 × 5 = 200 → remove zeros → 2</p>
            <p>Term 3: 2 × 5 = 10 → remove zeros → 1</p>
            <p>Term 4: 1 × 5 = 5</p>
            <p>Term 5: 5 × 5 = 25</p>
            <p>Term 6: 25 × 5 = 125</p>
        `,
        starterCode: {
            python: `# Read starting term and n
start = int(input())
n = int(input())

# Generate sequence: multiply by 5, remove trailing zeros
# Output the n-th term

# Write your solution below
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
    lines.push(parseInt(line));
    if (lines.length === 2) {
        const [start, n] = lines;
        
        // Generate sequence: multiply by 5, remove trailing zeros
        // Output the n-th term
        
        // Write your solution below
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int start = scanner.nextInt();
        int n = scanner.nextInt();
        
        // Generate sequence: multiply by 5, remove trailing zeros
        // Output the n-th term
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    int start, n;
    cin >> start >> n;
    
    // Generate sequence: multiply by 5, remove trailing zeros
    // Output the n-th term
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 8,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>You are given an array <code>prices</code> where <code>prices[i]</code> is the stock price on day i.</p>
            <p>Choose <strong>one day to buy</strong> and <strong>a later day to sell</strong> to maximize profit.</p>
            <p>Output the maximum profit; if no profit is possible, output 0.</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input: prices = [7,1,5,3,6,4]
Output: 5</pre>
                <p>Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.</p>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: prices = [7,6,4,3,1]
Output: 0</pre>
                <p>No profitable transaction is possible.</p>
            </div>

            <div class="constraints-box">
                <h4>Constraints</h4>
                <p>1 ≤ prices.length ≤ 100000</p>
                <p>0 ≤ prices[i] ≤ 10000</p>
            </div>
        `,
        starterCode: {
            python: `def maxProfit(prices):
    """
    Find the maximum profit from buying and selling stock once.
    
    Args:
        prices: List of stock prices where prices[i] is the price on day i
    
    Returns:
        Maximum profit possible, or 0 if no profit is possible
    """
    # Write your solution below
    pass

# Example usage:
# prices = [7, 1, 5, 3, 6, 4]
# print(maxProfit(prices))  # Expected: 5
`,
            javascript: `/**
 * Find the maximum profit from buying and selling stock once.
 * @param {number[]} prices - Array of stock prices
 * @return {number} Maximum profit possible, or 0 if no profit is possible
 */
function maxProfit(prices) {
    // Write your solution below
    
}

// Example usage:
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));  // Expected: 5
`,
            java: `public class Solution {
    /**
     * Find the maximum profit from buying and selling stock once.
     * @param prices Array of stock prices
     * @return Maximum profit possible, or 0 if no profit is possible
     */
    public int maxProfit(int[] prices) {
        // Write your solution below
        
        return 0;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] prices = {7, 1, 5, 3, 6, 4};
        System.out.println(sol.maxProfit(prices));  // Expected: 5
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    /**
     * Find the maximum profit from buying and selling stock once.
     * @param prices Vector of stock prices
     * @return Maximum profit possible, or 0 if no profit is possible
     */
    int maxProfit(vector<int>& prices) {
        // Write your solution below
        
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> prices = {7, 1, 5, 3, 6, 4};
    cout << sol.maxProfit(prices) << endl;  // Expected: 5
    return 0;
}
`
        }
    },
    {
        id: 9,
        title: "Feeder Simulation",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>This question involves a <code>Feeder</code> class that tracks how much food (in grams) is currently available and simulates what happens over time.</p>
            <p>Write a method that simulates one day of activity, updating the feeder's current food level.</p>

            <h2>Given Class Skeleton</h2>
            <pre>public class Feeder {
    private int currentFood; // grams, always ≥ 0
    public void simulateOneDay(int numBirds) { /* to be written */ }
}</pre>

            <h2>simulateOneDay</h2>
            <p>Simulate one day with numBirds > 0:</p>
            <ul>
                <li><strong>With 95% probability:</strong> only birds visit; each bird eats the same randomly chosen integer amount between 10 and 50 grams (inclusive). Total eaten = numBirds × perBird. If total eaten exceeds currentFood, currentFood becomes 0.</li>
                <li><strong>With 5% probability:</strong> a bear visits and empties the feeder (currentFood becomes 0).</li>
            </ul>

            <div class="note-box">
                <h4>Note</h4>
                <p>Can be written in any programming language.</p>
            </div>
        `,
        starterCode: {
            python: `import random

class Feeder:
    def __init__(self, initial_food=0):
        self.current_food = initial_food  # grams, always >= 0
    
    def simulate_one_day(self, num_birds):
        """
        Simulate one day with num_birds > 0.
        - 95% probability: birds visit, each eats random 10-50 grams
        - 5% probability: bear visits and empties feeder
        """
        # Write your solution below
        pass

# Example usage:
# feeder = Feeder(1000)
# feeder.simulate_one_day(3)
# print(feeder.current_food)
`,
            javascript: `class Feeder {
    constructor(initialFood = 0) {
        this.currentFood = initialFood;  // grams, always >= 0
    }
    
    /**
     * Simulate one day with numBirds > 0.
     * - 95% probability: birds visit, each eats random 10-50 grams
     * - 5% probability: bear visits and empties feeder
     */
    simulateOneDay(numBirds) {
        // Write your solution below
        
    }
}

// Example usage:
// const feeder = new Feeder(1000);
// feeder.simulateOneDay(3);
// console.log(feeder.currentFood);
`,
            java: `import java.util.Random;

public class Feeder {
    private int currentFood;  // grams, always >= 0
    private Random random = new Random();
    
    public Feeder(int initialFood) {
        this.currentFood = initialFood;
    }
    
    /**
     * Simulate one day with numBirds > 0.
     * - 95% probability: birds visit, each eats random 10-50 grams
     * - 5% probability: bear visits and empties feeder
     */
    public void simulateOneDay(int numBirds) {
        // Write your solution below
        
    }
    
    public static void main(String[] args) {
        Feeder feeder = new Feeder(1000);
        feeder.simulateOneDay(3);
        System.out.println(feeder.currentFood);
    }
}
`,
            cpp: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

class Feeder {
private:
    int currentFood;  // grams, always >= 0
    
public:
    Feeder(int initialFood = 0) : currentFood(initialFood) {
        srand(time(0));
    }
    
    /**
     * Simulate one day with numBirds > 0.
     * - 95% probability: birds visit, each eats random 10-50 grams
     * - 5% probability: bear visits and empties feeder
     */
    void simulateOneDay(int numBirds) {
        // Write your solution below
        
    }
    
    int getCurrentFood() { return currentFood; }
};

int main() {
    Feeder feeder(1000);
    feeder.simulateOneDay(3);
    cout << feeder.getCurrentFood() << endl;
    return 0;
}
`
        }
    },
    {
        id: 10,
        title: "Honeycomb Route",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>A honeycomb of size n is a diamond-shaped structure, containing n² cells, arranged on a hexagonal grid. The first n rows contain 1, 2, 3, …, n cells respectively, and each of the following n-1 rows contains one cell fewer than the row above.</p>
            <p>The cells are numbered top-to-bottom (and left-to-right within each row).</p>
            <p>A bee is currently at cell number <strong>s</strong> and it needs to get to cell number <strong>f</strong> to store some honey there.</p>
            <p>What is the smallest number of different cells, including start and destination cells, that the bee needs to occupy in order to get to its destination?</p>

            <h2>Input Format</h2>
            <p>Three positive integers on separate lines:</p>
            <ul>
                <li>n, the size of the honeycomb, on the first line</li>
                <li>the start cell number, s, on the second line</li>
                <li>the finish cell number, f, on the third line</li>
            </ul>

            <h2>Output Format</h2>
            <p>Output a single positive integer – the minimum number of cells occupied by the bee on its route.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
4
13
7

Output:
4</pre>
                <p><strong>Explanation:</strong> One shortest route is 13 → 12 → 8 → 7.</p>
            </div>

            <div class="constraints-box">
                <h4>Constraints</h4>
                <p>2 ≤ n ≤ 1,000,000 and 1 ≤ s, f ≤ n²</p>
            </div>
        `,
        starterCode: {
            python: `# Read input
n = int(input())  # size of honeycomb
s = int(input())  # start cell
f = int(input())  # finish cell

# Find minimum number of cells to traverse from s to f
# Honeycomb has n² cells in diamond shape

# Write your solution below
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
    lines.push(parseInt(line));
    if (lines.length === 3) {
        const [n, s, f] = lines;
        
        // Find minimum number of cells to traverse from s to f
        // Honeycomb has n² cells in diamond shape
        
        // Write your solution below
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();  // size of honeycomb
        int s = scanner.nextInt();  // start cell
        int f = scanner.nextInt();  // finish cell
        
        // Find minimum number of cells to traverse from s to f
        // Honeycomb has n² cells in diamond shape
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    long long n, s, f;
    cin >> n >> s >> f;
    
    // Find minimum number of cells to traverse from s to f
    // Honeycomb has n² cells in diamond shape
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 11,
        title: "Latin Square Completion",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>You are given a square grid of digits that is intended to be a <strong>Latin square</strong> of size n.</p>
            <p>A size-n Latin square uses only digits 1 through n, and each digit appears exactly once in every row and in every column.</p>
            <p>Input n, followed by n−1 rows of the grid (each row is given as an n-digit number).</p>
            <p>If the given n−1 rows can be the first n−1 rows of a valid Latin square, output the missing final row that completes the square.</p>
            <p>Otherwise output the word <code>invalid</code>.</p>

            <h2>Input</h2>
            <p>A single digit n (2 to 9 inclusive), followed by n−1 lines, each containing an n-digit number.</p>

            <h2>Output</h2>
            <p>Either an n-digit number (the final row) or the word <code>invalid</code>.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
4
1432
2314
3241

Output:
4123</pre>
            </div>
        `,
        starterCode: {
            python: `# Read n and n-1 rows
n = int(input())
rows = []
for _ in range(n - 1):
    rows.append(input())

# Check if valid Latin square is possible
# If yes, output the missing final row
# If no, output "invalid"

# Write your solution below
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0;
const rows = [];
let lineCount = 0;

rl.on('line', (line) => {
    if (lineCount === 0) {
        n = parseInt(line);
    } else {
        rows.push(line.trim());
    }
    lineCount++;
    
    if (lineCount === n) {
        // Check if valid Latin square is possible
        // If yes, output the missing final row
        // If no, output "invalid"
        
        // Write your solution below
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        String[] rows = new String[n - 1];
        
        for (int i = 0; i < n - 1; i++) {
            rows[i] = scanner.nextLine();
        }
        
        // Check if valid Latin square is possible
        // If yes, output the missing final row
        // If no, output "invalid"
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<string> rows(n - 1);
    for (int i = 0; i < n - 1; i++) {
        cin >> rows[i];
    }
    
    // Check if valid Latin square is possible
    // If yes, output the missing final row
    // If no, output "invalid"
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 12,
        title: "Recursive Palindrome Cleanup",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>Write a <strong>recursive function</strong> that removes matching outer letters from a string.</p>
            <p>Given a lowercase string s:</p>
            <ul>
                <li>If s is empty or length 1, it is already "cleaned".</li>
                <li>If the first and last characters are the same, remove both and recursively clean the remaining middle.</li>
                <li>Otherwise, remove neither and stop.</li>
            </ul>
            <p>Output the cleaned string.</p>

            <h2>Input</h2>
            <p>One line: a lowercase string s (1 to 200 characters).</p>

            <h2>Output</h2>
            <p>One line: the cleaned string.</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input:
abccba

Output:
(empty line)</pre>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input:
abca

Output:
abca</pre>
            </div>

            <div class="example-box">
                <h4>Example 3</h4>
                <pre>Input:
aabxbaa

Output:
x</pre>
            </div>

            <div class="note-box">
                <h4>Note</h4>
                <p>Your solution <strong>must use recursion</strong> (no loops required, but allowed elsewhere for input/output).</p>
            </div>
        `,
        starterCode: {
            python: `def clean_palindrome(s):
    """
    Recursively remove matching outer letters from string s.
    
    Args:
        s: A lowercase string
    
    Returns:
        The cleaned string after removing all matching outer pairs
    """
    # Write your recursive solution below
    pass

# Read input and output result
s = input()
print(clean_palindrome(s))
`,
            javascript: `/**
 * Recursively remove matching outer letters from string s.
 * @param {string} s - A lowercase string
 * @return {string} The cleaned string after removing all matching outer pairs
 */
function cleanPalindrome(s) {
    // Write your recursive solution below
    
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (s) => {
    console.log(cleanPalindrome(s.trim()));
    rl.close();
});
`,
            java: `import java.util.Scanner;

public class Solution {
    /**
     * Recursively remove matching outer letters from string s.
     * @param s A lowercase string
     * @return The cleaned string after removing all matching outer pairs
     */
    public static String cleanPalindrome(String s) {
        // Write your recursive solution below
        
        return s;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        System.out.println(cleanPalindrome(s));
    }
}
`,
            cpp: `#include <iostream>
#include <string>
using namespace std;

/**
 * Recursively remove matching outer letters from string s.
 * @param s A lowercase string
 * @return The cleaned string after removing all matching outer pairs
 */
string cleanPalindrome(string s) {
    // Write your recursive solution below
    
    return s;
}

int main() {
    string s;
    getline(cin, s);
    cout << cleanPalindrome(s) << endl;
    return 0;
}
`
        }
    },
    {
        id: 13,
        title: "Remove Element",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <strong>in-place</strong>.</p>
            <p>You may change the order of the elements.</p>
            <p>Return <code>k</code>, the number of elements in <code>nums</code> that are not equal to <code>val</code>, and ensure the first <code>k</code> elements contain the kept values.</p>

            <h2>Output</h2>
            <p>Return k (an integer).</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]</pre>
                <p>Your function should return k = 2, with the first two elements of nums being 2.</p>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]</pre>
                <p>Your function should return k = 5, with the first five elements containing 0, 0, 1, 3, and 4 (order doesn't matter).</p>
            </div>

            <div class="note-box">
                <h4>Note</h4>
                <p>Some judges sort nums[0..k) before comparing to the expected kept elements.</p>
            </div>
        `,
        starterCode: {
            python: `def removeElement(nums, val):
    """
    Remove all occurrences of val in nums in-place.
    
    Args:
        nums: List of integers
        val: Value to remove
    
    Returns:
        k: Number of elements not equal to val
    """
    # Write your solution below
    pass

# Example usage:
# nums = [3, 2, 2, 3]
# k = removeElement(nums, 3)
# print(k, nums[:k])  # Expected: 2, [2, 2]
`,
            javascript: `/**
 * Remove all occurrences of val in nums in-place.
 * @param {number[]} nums - Array of integers
 * @param {number} val - Value to remove
 * @return {number} k - Number of elements not equal to val
 */
function removeElement(nums, val) {
    // Write your solution below
    
}

// Example usage:
// const nums = [3, 2, 2, 3];
// const k = removeElement(nums, 3);
// console.log(k, nums.slice(0, k));  // Expected: 2, [2, 2]
`,
            java: `public class Solution {
    /**
     * Remove all occurrences of val in nums in-place.
     * @param nums Array of integers
     * @param val Value to remove
     * @return k Number of elements not equal to val
     */
    public int removeElement(int[] nums, int val) {
        // Write your solution below
        
        return 0;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = {3, 2, 2, 3};
        int k = sol.removeElement(nums, 3);
        System.out.println("k = " + k);  // Expected: 2
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    /**
     * Remove all occurrences of val in nums in-place.
     * @param nums Vector of integers
     * @param val Value to remove
     * @return k Number of elements not equal to val
     */
    int removeElement(vector<int>& nums, int val) {
        // Write your solution below
        
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {3, 2, 2, 3};
    int k = sol.removeElement(nums, 3);
    cout << "k = " << k << endl;  // Expected: 2
    return 0;
}
`
        }
    },
    {
        id: 14,
        title: "Signal Tower Coverage",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>You are given a line of towns, each with an integer population. You want to place exactly <strong>K signal towers</strong>.</p>
            <p>A tower placed at town i covers town i and its immediate neighbors (i−1 and i+1, if they exist).</p>
            <p>Your goal is to <strong>maximize the total population covered</strong> (count each town at most once even if covered by multiple towers).</p>
            <p>Output the maximum total covered population.</p>

            <h2>Input</h2>
            <p>Line 1: two integers N and K (1 ≤ N ≤ 200000, 0 ≤ K ≤ N).</p>
            <p>Line 2: N integers p1..pN (0 ≤ pi ≤ 10^9).</p>

            <h2>Output</h2>
            <p>A single integer: the maximum covered population.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
6 2
5 1 4 9 2 3

Output:
23</pre>
                <p><strong>Explanation:</strong> Place towers at towns 2 and 5 to cover towns 1–3 and 4–6. Total: 5+1+4+9+2+3 = 24... wait let's recalculate. Actually covering towns 1,2,3 (5+1+4=10) and towns 4,5,6 (9+2+3=14) = 24? The expected is 23 so there might be some overlap rule.</p>
            </div>

            <div class="constraints-box">
                <h4>Constraints</h4>
                <p>1 ≤ N ≤ 200000</p>
                <p>0 ≤ K ≤ N</p>
                <p>0 ≤ pi ≤ 10^9</p>
            </div>

            <div class="note-box">
                <h4>Challenge</h4>
                <p>Aim for an efficient solution (N can be large).</p>
            </div>
        `,
        starterCode: {
            python: `# Read input
N, K = map(int, input().split())
populations = list(map(int, input().split()))

# Place exactly K towers to maximize covered population
# Tower at position i covers towns i-1, i, i+1 (if they exist)

# Write your solution below
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
    lines.push(line);
    if (lines.length === 2) {
        const [N, K] = lines[0].split(' ').map(Number);
        const populations = lines[1].split(' ').map(Number);
        
        // Place exactly K towers to maximize covered population
        // Tower at position i covers towns i-1, i, i+1 (if they exist)
        
        // Write your solution below
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int K = scanner.nextInt();
        long[] populations = new long[N];
        
        for (int i = 0; i < N; i++) {
            populations[i] = scanner.nextLong();
        }
        
        // Place exactly K towers to maximize covered population
        // Tower at position i covers towns i-1, i, i+1 (if they exist)
        
        // Write your solution below
        
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int N, K;
    cin >> N >> K;
    
    vector<long long> populations(N);
    for (int i = 0; i < N; i++) {
        cin >> populations[i];
    }
    
    // Place exactly K towers to maximize covered population
    // Tower at position i covers towns i-1, i, i+1 (if they exist)
    
    // Write your solution below
    
    return 0;
}
`
        }
    },
    {
        id: 15,
        title: "Sliding-Board Message",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>You have a 4×4 board with tiles numbered 1–15 and one blank space (bottom-right in the starting position).</p>
            <p>A move is written as the number on the tile that slides into the current blank (it must be adjacent).</p>
            <p>For each move sequence: start from the initial board, apply the moves, then look at the tiles adjacent to the blank.</p>
            <p>Let A be the smallest adjacent number and B be the largest adjacent number. Compute A + B.</p>
            <p>Convert 1→A, 2→B, …, 26→Z (wrap around if needed).</p>
            <p>Process each sequence independently (resetting the board each time) and print the decoded message (no spaces).</p>

            <h2>Initial Board State</h2>
            <pre> 1  2  3  4
 5  6  7  8
 9 10 11 12
13 14 15  _</pre>

            <h2>Move Sequences</h2>
            <pre>15, 11, 7, 3, 2, 1, 5
12, 8, 4, 3
15, 14, 10, 11, 12, 15
12, 8, 4, 3, 7, 4, 3, 7, 4, 6, 2
15, 11, 7, 6, 2, 3, 6
12, 11, 10, 6, 7, 8, 11, 12, 15, 10, 12, 11, 8
12, 11, 10, 14, 15, 10, 14, 9, 13</pre>

            <h2>Output</h2>
            <p>Print the decoded message as uppercase letters with no spaces.</p>
        `,
        starterCode: {
            python: `# 15-puzzle sliding board message decoder

def create_initial_board():
    """Create the initial 4x4 board state."""
    board = []
    for i in range(4):
        row = []
        for j in range(4):
            num = i * 4 + j + 1
            if num == 16:
                row.append(0)  # blank
            else:
                row.append(num)
        board.append(row)
    return board

def find_blank(board):
    """Find the position of the blank space."""
    for i in range(4):
        for j in range(4):
            if board[i][j] == 0:
                return (i, j)
    return None

def apply_move(board, tile):
    """Slide the tile into the blank space."""
    # Write your implementation
    pass

def get_adjacent_tiles(board):
    """Get tiles adjacent to the blank space."""
    # Write your implementation
    pass

def decode_sequence(moves):
    """Process a move sequence and return the decoded letter."""
    # Write your implementation
    pass

# Move sequences to process
sequences = [
    [15, 11, 7, 3, 2, 1, 5],
    [12, 8, 4, 3],
    [15, 14, 10, 11, 12, 15],
    [12, 8, 4, 3, 7, 4, 3, 7, 4, 6, 2],
    [15, 11, 7, 6, 2, 3, 6],
    [12, 11, 10, 6, 7, 8, 11, 12, 15, 10, 12, 11, 8],
    [12, 11, 10, 14, 15, 10, 14, 9, 13]
]

# Decode and print the message
message = ""
for seq in sequences:
    message += decode_sequence(seq)

print(message)
`,
            javascript: `// 15-puzzle sliding board message decoder

function createInitialBoard() {
    const board = [];
    for (let i = 0; i < 4; i++) {
        const row = [];
        for (let j = 0; j < 4; j++) {
            const num = i * 4 + j + 1;
            row.push(num === 16 ? 0 : num);
        }
        board.push(row);
    }
    return board;
}

function findBlank(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                return [i, j];
            }
        }
    }
    return null;
}

function applyMove(board, tile) {
    // Write your implementation
}

function getAdjacentTiles(board) {
    // Write your implementation
}

function decodeSequence(moves) {
    // Write your implementation
}

// Move sequences to process
const sequences = [
    [15, 11, 7, 3, 2, 1, 5],
    [12, 8, 4, 3],
    [15, 14, 10, 11, 12, 15],
    [12, 8, 4, 3, 7, 4, 3, 7, 4, 6, 2],
    [15, 11, 7, 6, 2, 3, 6],
    [12, 11, 10, 6, 7, 8, 11, 12, 15, 10, 12, 11, 8],
    [12, 11, 10, 14, 15, 10, 14, 9, 13]
];

// Decode and print the message
let message = "";
for (const seq of sequences) {
    message += decodeSequence(seq);
}

console.log(message);
`,
            java: `public class Solution {
    
    public static int[][] createInitialBoard() {
        int[][] board = new int[4][4];
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                int num = i * 4 + j + 1;
                board[i][j] = (num == 16) ? 0 : num;
            }
        }
        return board;
    }
    
    public static int[] findBlank(int[][] board) {
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                if (board[i][j] == 0) {
                    return new int[]{i, j};
                }
            }
        }
        return null;
    }
    
    public static void applyMove(int[][] board, int tile) {
        // Write your implementation
    }
    
    public static char decodeSequence(int[] moves) {
        // Write your implementation
        return ' ';
    }
    
    public static void main(String[] args) {
        int[][] sequences = {
            {15, 11, 7, 3, 2, 1, 5},
            {12, 8, 4, 3},
            {15, 14, 10, 11, 12, 15},
            {12, 8, 4, 3, 7, 4, 3, 7, 4, 6, 2},
            {15, 11, 7, 6, 2, 3, 6},
            {12, 11, 10, 6, 7, 8, 11, 12, 15, 10, 12, 11, 8},
            {12, 11, 10, 14, 15, 10, 14, 9, 13}
        };
        
        StringBuilder message = new StringBuilder();
        for (int[] seq : sequences) {
            message.append(decodeSequence(seq));
        }
        
        System.out.println(message.toString());
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> createInitialBoard() {
    vector<vector<int>> board(4, vector<int>(4));
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            int num = i * 4 + j + 1;
            board[i][j] = (num == 16) ? 0 : num;
        }
    }
    return board;
}

pair<int, int> findBlank(vector<vector<int>>& board) {
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return {i, j};
            }
        }
    }
    return {-1, -1};
}

void applyMove(vector<vector<int>>& board, int tile) {
    // Write your implementation
}

char decodeSequence(vector<int>& moves) {
    // Write your implementation
    return ' ';
}

int main() {
    vector<vector<int>> sequences = {
        {15, 11, 7, 3, 2, 1, 5},
        {12, 8, 4, 3},
        {15, 14, 10, 11, 12, 15},
        {12, 8, 4, 3, 7, 4, 3, 7, 4, 6, 2},
        {15, 11, 7, 6, 2, 3, 6},
        {12, 11, 10, 6, 7, 8, 11, 12, 15, 10, 12, 11, 8},
        {12, 11, 10, 14, 15, 10, 14, 9, 13}
    };
    
    string message = "";
    for (auto& seq : sequences) {
        message += decodeSequence(seq);
    }
    
    cout << message << endl;
    return 0;
}
`
        }
    }
];
