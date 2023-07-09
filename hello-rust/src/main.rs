use std::io;

fn main() {
    // Read input from the user
    let mut input = String::new();
    println!("Enter a string:");
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    // Trim whitespace from the input string
    let trimmed_input = input.trim();

    // Check if the trimmed input string is empty
    if trimmed_input.is_empty() {
        println!("Empty string provided");
        return;
    }

    // Count the number of vowels in the string
    let vowel_count = count_vowels(trimmed_input);

    // Output the result
    println!("Number of vowels: {}", vowel_count);
}

fn count_vowels(input: &str) -> usize {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    input.chars().filter(|c| vowels.contains(c)).count()
}
