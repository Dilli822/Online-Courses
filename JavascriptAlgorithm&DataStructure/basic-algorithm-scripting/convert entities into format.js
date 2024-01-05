function convertHTML(str) {
    // Define a mapping of characters to their HTML entities
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    };
  
    // Check if the string includes any of the characters to be replaced
    if (/[&<>"']/.test(str)) {
      // Replace the characters in the string using the mapping
      str = str.replace(/[&<>"']/g, match => htmlEntities[match]);
      console.log(str);  // You can log the modified string here if needed
    }
  
    // Return the modified or original string
    return str;
  }
  
  // Test cases
  console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
  console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Hamburgers &lt; Pizza &lt; Tacos
  console.log(convertHTML("Sixty > twelve")); // Sixty &gt; twelve
  console.log(convertHTML('Stuff in "quotation marks"')); // Stuff in &quot;quotation marks&quot;
  console.log(convertHTML("Schindler's List")); // Schindler&apos;s List
  console.log(convertHTML("<>")); // &lt;&gt;
  console.log(convertHTML("abc")); // abc
  


// const originalString = 'Hello, world!';
// const replacedString = originalString.replace('world', 'there');
// console.log(replacedString); // Output: Hello, there!
