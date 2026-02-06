const problems = [
    // ==================== EASY PROBLEMS (1-4) ====================
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
            python: `def calculate_energy():
    I = int(input())
    R = int(input())
    t = int(input())
    
    # Your code here
    
calculate_energy()
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
        const I = lines[0];
        const R = lines[1];
        const t = lines[2];
        
        // Your code here
        
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
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    int I, R, t;
    cin >> I;
    cin >> R;
    cin >> t;
    
    // Your code here
    
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
            <p>Three positive whole numbers, one per line: the amounts spent by person A, B, and C.</p>

            <h2>Output</h2>
            <p>A single whole number: the total paid (food + tips).</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
12
30
9

Output:
56</pre>
            </div>

            <h2>Explanation</h2>
            <p>Tips: floor(12×0.1)=1, floor(30×0.1)=3, floor(9×0.1)=0</p>
            <p>Total = (12+1) + (30+3) + (9+0) = 13 + 33 + 9 = 56</p>
        `,
        starterCode: {
            python: `def calculate_total():
    a = int(input())
    b = int(input())
    c = int(input())
    
    # Your code here
    
calculate_total()
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const amounts = [];
rl.on('line', (line) => {
    amounts.push(parseInt(line));
    if (amounts.length === 3) {
        const a = amounts[0];
        const b = amounts[1];
        const c = amounts[2];
        
        // Your code here
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    
    // Your code here
    
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
            <p>Given a list of numbers, print each number only if it is a positive integer (greater than zero) and has at least two digits.</p>

            <h2>Input</h2>
            <p>Multiple lines, each containing a single integer.</p>

            <h2>Output</h2>
            <p>Print only the valid numbers (positive integers ≥ 10), each on its own line.</p>

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
765444</pre>
            </div>

            <h2>Explanation</h2>
            <p>All numbers except 7 have at least two digits and are positive.</p>
        `,
        starterCode: {
            python: `import sys

def validate_numbers():
    for line in sys.stdin:
        num = int(line.strip())
        
        # Your code here

validate_numbers()
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const num = parseInt(line);
    
    // Your code here
    
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        while (scanner.hasNextInt()) {
            int num = scanner.nextInt();
            
            // Your code here
            
        }
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    int num;
    
    while (cin >> num) {
        // Your code here
        
    }
    
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
            <p>Given a sequence of words on separate lines, print them in reverse order (last word first, first word last).</p>

            <h2>Input</h2>
            <p>Multiple lines, each containing a single word.</p>

            <h2>Output</h2>
            <p>The words in reverse order, one per line.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
he
jumped
up

Output:
up
jumped
he</pre>
            </div>
        `,
        starterCode: {
            python: `import sys

def reverse_words():
    words = []
    
    for line in sys.stdin:
        words.append(line.strip())
    
    # Your code here

reverse_words()
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const words = [];

rl.on('line', (line) => {
    words.push(line.trim());
});

rl.on('close', () => {
    // Your code here
    
});
`,
            java: `import java.util.Scanner;
import java.util.ArrayList;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> words = new ArrayList<>();
        
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            if (line.isEmpty()) break;
            words.add(line);
        }
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<string> words;
    string word;
    
    while (getline(cin, word)) {
        if (word.empty()) break;
        words.push_back(word);
    }
    
    // Your code here
    
    return 0;
}
`
        }
    },

    // ==================== MEDIUM PROBLEMS (5-9) ====================
    {
        id: 5,
        title: "Missing Letters",
        difficulty: "medium",
        description: `
            <h2>Problem Description</h2>
            <p>Given a sentence (lowercase letters and spaces only), find all letters of the alphabet that do NOT appear in the sentence.</p>

            <h2>Input</h2>
            <p>A single line containing a sentence with lowercase letters and spaces.</p>

            <h2>Output</h2>
            <p>Print all missing letters in alphabetical order, separated by spaces. If no letters are missing, print "none".</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
a quick brown fox jumped over her lazy dog

Output:
s t</pre>
            </div>

            <h2>Explanation</h2>
            <p>The sentence contains all letters except 's' and 't'.</p>
        `,
        starterCode: {
            python: `def find_missing_letters():
    sentence = input().lower()
    
    letters_in_sentence = set()
    for char in sentence:
        if char.isalpha():
            letters_in_sentence.add(char)
    
    # Your code here

find_missing_letters()
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (sentence) => {
    sentence = sentence.toLowerCase();
    
    const lettersInSentence = new Set();
    for (const char of sentence) {
        if (/[a-z]/.test(char)) {
            lettersInSentence.add(char);
        }
    }
    
    // Your code here
    
    rl.close();
});
`,
            java: `import java.util.Scanner;
import java.util.Set;
import java.util.HashSet;
import java.util.ArrayList;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String sentence = scanner.nextLine().toLowerCase();
        
        Set<Character> lettersInSentence = new HashSet<>();
        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                lettersInSentence.add(c);
            }
        }
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
#include <string>
#include <set>
#include <vector>
using namespace std;

int main() {
    string sentence;
    getline(cin, sentence);
    
    set<char> lettersInSentence;
    for (char c : sentence) {
        if (isalpha(c)) {
            lettersInSentence.insert(tolower(c));
        }
    }
    
    // Your code here
    
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
            <p>A student has N days to revise. Each day they can revise one subject.</p>
            <p>They want to maximize variety: no subject should be revised on two consecutive days.</p>
            <p>Given N days and a list of subjects, output a valid revision schedule or "impossible" if it can't be done.</p>

            <h2>Input</h2>
            <p>First line: N (number of days)</p>
            <p>Second line: space-separated list of subjects (at least 2 subjects)</p>

            <h2>Output</h2>
            <p>N lines, each with one subject for that day. No two consecutive days should have the same subject.</p>
            <p>If impossible, print "impossible".</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
22
math science english history

Output:
math
science
math
science
...</pre>
            </div>
        `,
        starterCode: {
            python: `def create_schedule():
    n = int(input())
    subjects = input().split()
    
    if len(subjects) < 2:
        print("impossible")
        return
    
    # Your code here

create_schedule()
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
        const n = parseInt(lines[0]);
        const subjects = lines[1].split(' ');
        
        if (subjects.length < 2) {
            console.log("impossible");
            rl.close();
            return;
        }
        
        // Your code here
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        scanner.nextLine();
        String[] subjects = scanner.nextLine().split(" ");
        
        if (subjects.length < 2) {
            System.out.println("impossible");
            return;
        }
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cin.ignore();
    
    string line;
    getline(cin, line);
    
    vector<string> subjects;
    stringstream ss(line);
    string subject;
    while (ss >> subject) {
        subjects.push_back(subject);
    }
    
    if (subjects.size() < 2) {
        cout << "impossible" << endl;
        return 0;
    }
    
    // Your code here
    
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
            <p>In a number, when two adjacent digits multiply to zero, the zero digit must be struck out.</p>
            <p>Repeat this process until no more zeroes can be removed.</p>
            <p>Given two integers A and B, concatenate them and apply the strike-out rule.</p>

            <h2>Input</h2>
            <p>Two integers A and B on separate lines.</p>

            <h2>Output</h2>
            <p>The resulting number after striking out all possible zeroes.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
40
6

Output:
46</pre>
            </div>

            <h2>Explanation</h2>
            <p>Concatenate: "406". The 0 is adjacent to 4 and 6 (4×0=0, 0×6=0), so strike it out → "46".</p>
        `,
        starterCode: {
            python: `def strike_out_zeroes():
    a = input().strip()
    b = input().strip()
    
    combined = a + b
    
    # Your code here

strike_out_zeroes()
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
    lines.push(line.trim());
    if (lines.length === 2) {
        let combined = lines[0] + lines[1];
        
        // Your code here
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String a = scanner.nextLine().trim();
        String b = scanner.nextLine().trim();
        
        String combined = a + b;
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;
    
    string combined = a + b;
    
    // Your code here
    
    return 0;
}
`
        }
    },
    {
        id: 8,
        title: "Two Sum",
        difficulty: "medium",
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return the indices of the two numbers such that they add up to <code>target</code>.</p>
            <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
            <p>You can return the answer in any order.</p>

            <h2>Input</h2>
            <p>An array of integers and a target sum.</p>

            <h2>Output</h2>
            <p>Two indices (0-indexed) of the numbers that add up to the target.</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</pre>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: nums = [3,2,4], target = 6
Output: [1,2]</pre>
            </div>

            <div class="example-box">
                <h4>Example 3</h4>
                <pre>Input: nums = [3,3], target = 6
Output: [0,1]</pre>
            </div>

            <h2>Constraints</h2>
            <ul>
                <li>2 ≤ nums.length ≤ 10<sup>4</sup></li>
                <li>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></li>
                <li>Only one valid answer exists.</li>
            </ul>
        `,
        starterCode: {
            python: `def two_sum(nums, target):
    # Your code here
    pass

print(two_sum([2, 7, 11, 15], 9))
print(two_sum([3, 2, 4], 6))
print(two_sum([3, 3], 6))
`,
            javascript: `function twoSum(nums, target) {
    // Your code here
    
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
`,
            java: `import java.util.HashMap;
import java.util.Arrays;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        
        return new int[]{};
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        System.out.println(Arrays.toString(
            sol.twoSum(new int[]{2, 7, 11, 15}, 9)
        ));
        
        System.out.println(Arrays.toString(
            sol.twoSum(new int[]{3, 2, 4}, 6)
        ));
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your code here
        
        return {};
    }
};

int main() {
    Solution sol;
    
    vector<int> nums = {2, 7, 11, 15};
    vector<int> result = sol.twoSum(nums, 9);
    
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    
    return 0;
}
`
        }
    },
    {
        id: 9,
        title: "Valid Parentheses",
        difficulty: "medium",
        description: `
            <h2>Problem Description</h2>
            <p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>
            <p>An input string is valid if:</p>
            <ol>
                <li>Open brackets must be closed by the same type of brackets.</li>
                <li>Open brackets must be closed in the correct order.</li>
                <li>Every close bracket has a corresponding open bracket of the same type.</li>
            </ol>

            <h2>Input</h2>
            <p>A string containing only parentheses characters.</p>

            <h2>Output</h2>
            <p>Return <code>true</code> if the string is valid, <code>false</code> otherwise.</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input: s = "()"
Output: true</pre>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: s = "()[]{}"
Output: true</pre>
            </div>

            <div class="example-box">
                <h4>Example 3</h4>
                <pre>Input: s = "(]"
Output: false</pre>
            </div>

            <div class="example-box">
                <h4>Example 4</h4>
                <pre>Input: s = "([)]"
Output: false</pre>
            </div>

            <div class="example-box">
                <h4>Example 5</h4>
                <pre>Input: s = "{[]}"
Output: true</pre>
            </div>

            <h2>Constraints</h2>
            <ul>
                <li>1 ≤ s.length ≤ 10<sup>4</sup></li>
                <li>s consists of parentheses only '()[]{}'</li>
            </ul>
        `,
        starterCode: {
            python: `def is_valid(s):
    # Your code here
    pass

print(is_valid("()"))
print(is_valid("()[]{}"))
print(is_valid("(]"))
print(is_valid("([)]"))
print(is_valid("{[]}"))
`,
            javascript: `function isValid(s) {
    // Your code here
    
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
`,
            java: `import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        // Your code here
        
        return false;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        System.out.println(sol.isValid("()"));
        System.out.println(sol.isValid("()[]{}"));
        System.out.println(sol.isValid("(]"));
        System.out.println(sol.isValid("([)]"));
        System.out.println(sol.isValid("{[]}"));
    }
}
`,
            cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        // Your code here
        
        return false;
    }
};

int main() {
    Solution sol;
    
    cout << boolalpha;
    cout << sol.isValid("()") << endl;
    cout << sol.isValid("()[]{}") << endl;
    cout << sol.isValid("(]") << endl;
    cout << sol.isValid("([)]") << endl;
    cout << sol.isValid("{[]}") << endl;
    
    return 0;
}
`
        }
    },

    // ==================== HARD PROBLEMS (10-20) ====================
    {
        id: 10,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the ith day.</p>
            <p>You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>
            <p>Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.</p>

            <h2>Input</h2>
            <p>An array of integers representing stock prices.</p>

            <h2>Output</h2>
            <p>The maximum profit possible.</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.</pre>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No profit possible, prices only decrease.</pre>
            </div>
        `,
        starterCode: {
            python: `def max_profit(prices):
    # Your code here
    pass

print(max_profit([7, 1, 5, 3, 6, 4]))
print(max_profit([7, 6, 4, 3, 1]))
`,
            javascript: `function maxProfit(prices) {
    // Your code here
    
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
`,
            java: `public class Solution {
    public int maxProfit(int[] prices) {
        // Your code here
        
        return 0;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        System.out.println(sol.maxProfit(
            new int[]{7, 1, 5, 3, 6, 4}
        ));
        
        System.out.println(sol.maxProfit(
            new int[]{7, 6, 4, 3, 1}
        ));
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Your code here
        
        return 0;
    }
};

int main() {
    Solution sol;
    
    vector<int> prices1 = {7, 1, 5, 3, 6, 4};
    cout << sol.maxProfit(prices1) << endl;
    
    vector<int> prices2 = {7, 6, 4, 3, 1};
    cout << sol.maxProfit(prices2) << endl;
    
    return 0;
}
`
        }
    },
    {
        id: 11,
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
        self.current_food = initial_food
    
    def simulate_one_day(self, num_birds):
        # Your code here
        pass
    
    def get_food(self):
        return self.current_food

feeder = Feeder(1000)
print(f"Initial food: {feeder.get_food()}")
feeder.simulate_one_day(5)
print(f"After day 1: {feeder.get_food()}")
`,
            javascript: `class Feeder {
    constructor(initialFood = 0) {
        this.currentFood = initialFood;
    }
    
    simulateOneDay(numBirds) {
        // Your code here
        
    }
    
    getFood() {
        return this.currentFood;
    }
}

const feeder = new Feeder(1000);
console.log(\`Initial food: \${feeder.getFood()}\`);
feeder.simulateOneDay(5);
console.log(\`After day 1: \${feeder.getFood()}\`);
`,
            java: `import java.util.Random;

public class Feeder {
    private int currentFood;
    private Random random = new Random();
    
    public Feeder(int initialFood) {
        this.currentFood = initialFood;
    }
    
    public void simulateOneDay(int numBirds) {
        // Your code here
        
    }
    
    public int getFood() {
        return currentFood;
    }
    
    public static void main(String[] args) {
        Feeder feeder = new Feeder(1000);
        System.out.println("Initial food: " + feeder.getFood());
        feeder.simulateOneDay(5);
        System.out.println("After day 1: " + feeder.getFood());
    }
}
`,
            cpp: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

class Feeder {
private:
    int currentFood;
    
public:
    Feeder(int initialFood = 0) : currentFood(initialFood) {
        srand(time(0));
    }
    
    void simulateOneDay(int numBirds) {
        // Your code here
        
    }
    
    int getFood() {
        return currentFood;
    }
};

int main() {
    Feeder feeder(1000);
    cout << "Initial food: " << feeder.getFood() << endl;
    feeder.simulateOneDay(5);
    cout << "After day 1: " << feeder.getFood() << endl;
    
    return 0;
}
`
        }
    },
    {
        id: 12,
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
        `,
        starterCode: {
            python: `def find_shortest_path():
    n = int(input())
    s = int(input())
    f = int(input())
    
    # Your code here

find_shortest_path()
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
        const n = lines[0];
        const s = lines[1];
        const f = lines[2];
        
        // Your code here
        
        rl.close();
    }
});
`,
            java: `import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        int s = scanner.nextInt();
        int f = scanner.nextInt();
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int main() {
    int n, s, f;
    cin >> n >> s >> f;
    
    // Your code here
    
    return 0;
}
`
        }
    },
    {
        id: 13,
        title: "Latin Square Completion",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>A Latin Square is an n × n grid filled with n different symbols, where each symbol appears exactly once in each row and exactly once in each column.</p>
            <p>Given a partially filled n × n grid, complete it to form a valid Latin Square, or determine that it's impossible.</p>

            <h2>Input Format</h2>
            <p>First line: n (size of the grid)</p>
            <p>Next n lines: each contains n integers. 0 indicates an empty cell, other values (1 to n) are pre-filled.</p>

            <h2>Output Format</h2>
            <p>Print the completed Latin Square, or "impossible" if no valid completion exists.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
4
1432
2314
3241
0000

Output:
1432
2314
3241
4123</pre>
            </div>
        `,
        starterCode: {
            python: `def solve_latin_square():
    n = int(input())
    grid = []
    
    for _ in range(n):
        row = [int(c) for c in input().strip()]
        grid.append(row)
    
    def is_valid(row, col, num):
        # Your code here
        pass
    
    def solve(row, col):
        # Your code here
        pass
    
    if solve(0, 0):
        for row in grid:
            print(''.join(map(str, row)))
    else:
        print("impossible")

solve_latin_square()
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
    lines.push(line.trim());
});

rl.on('close', () => {
    const n = parseInt(lines[0]);
    const grid = [];
    
    for (let i = 1; i <= n; i++) {
        grid.push(lines[i].split('').map(Number));
    }
    
    function isValid(row, col, num) {
        // Your code here
    }
    
    function solve(row, col) {
        // Your code here
    }
    
    if (solve(0, 0)) {
        for (const row of grid) {
            console.log(row.join(''));
        }
    } else {
        console.log("impossible");
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    static int n;
    static int[][] grid;
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        n = scanner.nextInt();
        grid = new int[n][n];
        
        for (int i = 0; i < n; i++) {
            String row = scanner.next();
            for (int j = 0; j < n; j++) {
                grid[i][j] = row.charAt(j) - '0';
            }
        }
        
        if (solve(0, 0)) {
            for (int[] row : grid) {
                for (int num : row) {
                    System.out.print(num);
                }
                System.out.println();
            }
        } else {
            System.out.println("impossible");
        }
        
        scanner.close();
    }
    
    static boolean isValid(int row, int col, int num) {
        // Your code here
        return false;
    }
    
    static boolean solve(int row, int col) {
        // Your code here
        return false;
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int n;
vector<vector<int>> grid;

bool isValid(int row, int col, int num) {
    // Your code here
    return false;
}

bool solve(int row, int col) {
    // Your code here
    return false;
}

int main() {
    cin >> n;
    grid.resize(n, vector<int>(n));
    
    for (int i = 0; i < n; i++) {
        string row;
        cin >> row;
        for (int j = 0; j < n; j++) {
            grid[i][j] = row[j] - '0';
        }
    }
    
    if (solve(0, 0)) {
        for (const auto& row : grid) {
            for (int num : row) {
                cout << num;
            }
            cout << endl;
        }
    } else {
        cout << "impossible" << endl;
    }
    
    return 0;
}
`
        }
    },
    {
        id: 14,
        title: "Recursive Palindrome Cleanup",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>Given a string, repeatedly remove the longest palindromic substring (length ≥ 2) until no more can be removed.</p>
            <p>If there are multiple longest palindromes of the same length, remove the leftmost one.</p>
            <p>Output the final string after all removals.</p>

            <h2>Input</h2>
            <p>A single string consisting of lowercase letters.</p>

            <h2>Output</h2>
            <p>The final string after all palindrome removals. If empty, print "empty".</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
aabxbaa

Output:
empty</pre>
            </div>

            <h2>Explanation</h2>
            <p>Step 1: Remove "aabxbaa" (the whole string is a palindrome) → empty</p>
        `,
        starterCode: {
            python: `def cleanup_palindromes():
    s = input().strip()
    
    def is_palindrome(string):
        return string == string[::-1]
    
    def find_longest_palindrome(string):
        # Your code here
        pass
    
    # Your code here

cleanup_palindromes()
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (s) => {
    s = s.trim();
    
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    
    function findLongestPalindrome(str) {
        // Your code here
    }
    
    // Your code here
    
    rl.close();
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine().trim();
        
        // Your code here
        
        scanner.close();
    }
    
    static boolean isPalindrome(String str) {
        return str.equals(
            new StringBuilder(str).reverse().toString()
        );
    }
    
    static int[] findLongestPalindrome(String str) {
        // Your code here
        return null;
    }
}
`,
            cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isPalindrome(const string& s) {
    string rev = s;
    reverse(rev.begin(), rev.end());
    return s == rev;
}

pair<int, int> findLongestPalindrome(const string& s) {
    // Your code here
    return {-1, 0};
}

int main() {
    string s;
    getline(cin, s);
    
    // Your code here
    
    return 0;
}
`
        }
    },
    {
        id: 15,
        title: "Remove Element",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> in-place.</p>
            <p>The order of the elements may be changed. Then return the number of elements in <code>nums</code> which are not equal to <code>val</code>.</p>

            <h2>Input</h2>
            <p>An array of integers and a target value to remove.</p>

            <h2>Output</h2>
            <p>The count of elements not equal to val, and the modified array.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.</pre>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5.</pre>
            </div>
        `,
        starterCode: {
            python: `def remove_element(nums, val):
    # Your code here
    pass

nums1 = [3, 2, 2, 3]
k1 = remove_element(nums1, 3)
print(f"k = {k1}, nums = {nums1[:k1]}")

nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
k2 = remove_element(nums2, 2)
print(f"k = {k2}, nums = {nums2[:k2]}")
`,
            javascript: `function removeElement(nums, val) {
    // Your code here
    
}

let nums1 = [3, 2, 2, 3];
let k1 = removeElement(nums1, 3);
console.log(\`k = \${k1}, nums = [\${nums1.slice(0, k1)}]\`);

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let k2 = removeElement(nums2, 2);
console.log(\`k = \${k2}, nums = [\${nums2.slice(0, k2)}]\`);
`,
            java: `import java.util.Arrays;

public class Solution {
    public int removeElement(int[] nums, int val) {
        // Your code here
        
        return 0;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        int[] nums1 = {3, 2, 2, 3};
        int k1 = sol.removeElement(nums1, 3);
        System.out.println("k = " + k1);
        
        int[] nums2 = {0, 1, 2, 2, 3, 0, 4, 2};
        int k2 = sol.removeElement(nums2, 2);
        System.out.println("k = " + k2);
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        // Your code here
        
        return 0;
    }
};

int main() {
    Solution sol;
    
    vector<int> nums1 = {3, 2, 2, 3};
    int k1 = sol.removeElement(nums1, 3);
    cout << "k = " << k1 << endl;
    
    vector<int> nums2 = {0, 1, 2, 2, 3, 0, 4, 2};
    int k2 = sol.removeElement(nums2, 2);
    cout << "k = " << k2 << endl;
    
    return 0;
}
`
        }
    },
    {
        id: 16,
        title: "Signal Tower Coverage",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>You have n signal towers positioned in a row. Each tower has a signal strength that determines how far it can reach.</p>
            <p>Given the positions and strengths, find the minimum number of additional towers needed to ensure every point between the first and last tower is covered.</p>

            <h2>Input Format</h2>
            <p>First line: two integers n (number of towers) and m (maximum gap allowed without coverage)</p>
            <p>Second line: n integers representing tower positions (sorted)</p>

            <h2>Output Format</h2>
            <p>Minimum number of additional towers needed.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
6 2
5 1 4 9 2 3

Output:
1</pre>
                <p><strong>Explanation:</strong> Sorted positions: [1,2,3,4,5,9]. Gap between 5 and 9 is 4 > 2, so we need 1 tower.</p>
            </div>
        `,
        starterCode: {
            python: `def min_towers_needed():
    first_line = input().split()
    n = int(first_line[0])
    m = int(first_line[1])
    
    positions = list(map(int, input().split()))
    
    # Your code here

min_towers_needed()
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
        const [n, m] = lines[0].split(' ').map(Number);
        const positions = lines[1].split(' ').map(Number);
        
        // Your code here
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;
import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        
        int[] positions = new int[n];
        for (int i = 0; i < n; i++) {
            positions[i] = scanner.nextInt();
        }
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    
    vector<int> positions(n);
    for (int i = 0; i < n; i++) {
        cin >> positions[i];
    }
    
    // Your code here
    
    return 0;
}
`
        }
    },
    {
        id: 17,
        title: "Sliding-Board Message",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>A sliding board displays messages by sliding characters from right to left.</p>
            <p>Given two message sequences and their display patterns, determine if they could have been produced by the same sliding board configuration.</p>

            <h2>Input Format</h2>
            <p>Two lines, each containing a sequence of characters representing the visible portion of each message at a given time.</p>

            <h2>Output Format</h2>
            <p>Print "yes" if the sequences could come from the same board, "no" otherwise.</p>

            <div class="example-box">
                <h4>Example</h4>
                <pre>Input:
HELLO
WORLD

Output:
yes</pre>
            </div>
        `,
        starterCode: {
            python: `def check_sliding_board():
    seq1 = input().strip()
    seq2 = input().strip()
    
    # Your code here

check_sliding_board()
`,
            javascript: `const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
rl.on('line', (line) => {
    lines.push(line.trim());
    if (lines.length === 2) {
        const seq1 = lines[0];
        const seq2 = lines[1];
        
        // Your code here
        
        rl.close();
    }
});
`,
            java: `import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String seq1 = scanner.nextLine().trim();
        String seq2 = scanner.nextLine().trim();
        
        // Your code here
        
        scanner.close();
    }
}
`,
            cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string seq1, seq2;
    getline(cin, seq1);
    getline(cin, seq2);
    
    // Your code here
    
    return 0;
}
`
        }
    },
    {
        id: 18,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>
            <p>A <strong>substring</strong> is a contiguous non-empty sequence of characters within a string.</p>

            <h2>Input</h2>
            <p>A string s.</p>

            <h2>Output</h2>
            <p>The length of the longest substring without repeating characters.</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.</pre>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.</pre>
            </div>

            <div class="example-box">
                <h4>Example 3</h4>
                <pre>Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.</pre>
            </div>

            <h2>Constraints</h2>
            <ul>
                <li>0 ≤ s.length ≤ 5 × 10<sup>4</sup></li>
                <li>s consists of English letters, digits, symbols and spaces.</li>
            </ul>
        `,
        starterCode: {
            python: `def length_of_longest_substring(s):
    # Your code here
    pass

print(length_of_longest_substring("abcabcbb"))
print(length_of_longest_substring("bbbbb"))
print(length_of_longest_substring("pwwkew"))
`,
            javascript: `function lengthOfLongestSubstring(s) {
    // Your code here
    
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
`,
            java: `import java.util.HashSet;
import java.util.Set;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Your code here
        
        return 0;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        System.out.println(sol.lengthOfLongestSubstring("abcabcbb"));
        System.out.println(sol.lengthOfLongestSubstring("bbbbb"));
        System.out.println(sol.lengthOfLongestSubstring("pwwkew"));
    }
}
`,
            cpp: `#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Your code here
        
        return 0;
    }
};

int main() {
    Solution sol;
    
    cout << sol.lengthOfLongestSubstring("abcabcbb") << endl;
    cout << sol.lengthOfLongestSubstring("bbbbb") << endl;
    cout << sol.lengthOfLongestSubstring("pwwkew") << endl;
    
    return 0;
}
`
        }
    },
    {
        id: 19,
        title: "Trapping Rain Water",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.</p>

            <h2>Input</h2>
            <p>An array of non-negative integers representing the elevation map.</p>

            <h2>Output</h2>
            <p>The total amount of water that can be trapped.</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water are being trapped.</pre>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: height = [4,2,0,3,2,5]
Output: 9</pre>
            </div>

            <h2>Constraints</h2>
            <ul>
                <li>n == height.length</li>
                <li>1 ≤ n ≤ 2 × 10<sup>4</sup></li>
                <li>0 ≤ height[i] ≤ 10<sup>5</sup></li>
            </ul>

            <h2>Hint</h2>
            <p>Think about how much water can be stored above each bar. It depends on the maximum height to the left and right of that bar.</p>
        `,
        starterCode: {
            python: `def trap(height):
    # Your code here
    pass

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
print(trap([4,2,0,3,2,5]))
`,
            javascript: `function trap(height) {
    // Your code here
    
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
`,
            java: `public class Solution {
    public int trap(int[] height) {
        // Your code here
        
        return 0;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        System.out.println(sol.trap(
            new int[]{0,1,0,2,1,0,1,3,2,1,2,1}
        ));
        
        System.out.println(sol.trap(
            new int[]{4,2,0,3,2,5}
        ));
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        // Your code here
        
        return 0;
    }
};

int main() {
    Solution sol;
    
    vector<int> h1 = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << sol.trap(h1) << endl;
    
    vector<int> h2 = {4,2,0,3,2,5};
    cout << sol.trap(h2) << endl;
    
    return 0;
}
`
        }
    },
    {
        id: 20,
        title: "Merge K Sorted Lists",
        difficulty: "hard",
        description: `
            <h2>Problem Description</h2>
            <p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>
            <p>Merge all the linked-lists into one sorted linked-list and return it.</p>

            <h2>Input</h2>
            <p>An array of k sorted linked lists.</p>

            <h2>Output</h2>
            <p>A single sorted linked list containing all elements.</p>

            <div class="example-box">
                <h4>Example 1</h4>
                <pre>Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
Merging them into one sorted list:
1->1->2->3->4->4->5->6</pre>
            </div>

            <div class="example-box">
                <h4>Example 2</h4>
                <pre>Input: lists = []
Output: []</pre>
            </div>

            <div class="example-box">
                <h4>Example 3</h4>
                <pre>Input: lists = [[]]
Output: []</pre>
            </div>

            <h2>Constraints</h2>
            <ul>
                <li>k == lists.length</li>
                <li>0 ≤ k ≤ 10<sup>4</sup></li>
                <li>0 ≤ lists[i].length ≤ 500</li>
                <li>-10<sup>4</sup> ≤ lists[i][j] ≤ 10<sup>4</sup></li>
                <li>lists[i] is sorted in ascending order.</li>
                <li>The sum of lists[i].length will not exceed 10<sup>4</sup>.</li>
            </ul>

            <h2>Hint</h2>
            <p>Consider using a min-heap (priority queue) to efficiently get the smallest element among all list heads.</p>
        `,
        starterCode: {
            python: `import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_k_lists(lists):
    # Your code here
    pass

def create_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    curr = head
    for val in arr[1:]:
        curr.next = ListNode(val)
        curr = curr.next
    return head

def print_list(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    print(result)

lists = [
    create_list([1, 4, 5]),
    create_list([1, 3, 4]),
    create_list([2, 6])
]
result = merge_k_lists(lists)
print_list(result)
`,
            javascript: `class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    // Your code here
    
}

function createList(arr) {
    if (!arr || arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

function printList(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

const lists = [
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6])
];
const result = mergeKLists(lists);
printList(result);
`,
            java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // Your code here
        
        return null;
    }
    
    static ListNode createList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode curr = head;
        for (int i = 1; i < arr.length; i++) {
            curr.next = new ListNode(arr[i]);
            curr = curr.next;
        }
        return head;
    }
    
    static void printList(ListNode head) {
        List<Integer> result = new ArrayList<>();
        while (head != null) {
            result.add(head.val);
            head = head.next;
        }
        System.out.println(result);
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        ListNode[] lists = {
            createList(new int[]{1, 4, 5}),
            createList(new int[]{1, 3, 4}),
            createList(new int[]{2, 6})
        };
        
        ListNode result = sol.mergeKLists(lists);
        printList(result);
    }
}
`,
            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Your code here
        
        return nullptr;
    }
};

ListNode* createList(vector<int>& arr) {
    if (arr.empty()) return nullptr;
    ListNode* head = new ListNode(arr[0]);
    ListNode* curr = head;
    for (int i = 1; i < arr.size(); i++) {
        curr->next = new ListNode(arr[i]);
        curr = curr->next;
    }
    return head;
}

void printList(ListNode* head) {
    cout << "[";
    while (head) {
        cout << head->val;
        if (head->next) cout << ", ";
        head = head->next;
    }
    cout << "]" << endl;
}

int main() {
    Solution sol;
    
    vector<int> a1 = {1, 4, 5};
    vector<int> a2 = {1, 3, 4};
    vector<int> a3 = {2, 6};
    
    vector<ListNode*> lists = {
        createList(a1),
        createList(a2),
        createList(a3)
    };
    
    ListNode* result = sol.mergeKLists(lists);
    printList(result);
    
    return 0;
}
`
        }
    }
];
