function spinalCase(str) {
    // Replace spaces and underscores with dashes
    str = str.replace(/[\s_]/g, '-');
  
    // Insert dashes between camel case and title case words
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  
    return str;
  }
  
  // Example usage:
  const result = spinalCase("This is Spinal Tap");
  console.log(result); // Output: "this-is-spinal-tap"
  