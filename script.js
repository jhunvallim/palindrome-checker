function isPalindrome(str) {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, "");
  const reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

document.querySelector("#check-btn").addEventListener("click", () => {
  const inputValue = document.querySelector("#text-input").value;
  if (!inputValue) {
    alert("Please input a value");
  } else {
    return (document.querySelector("#result").innerText = `${inputValue} ${
      isPalindrome(inputValue) ? " is a palindrome" : " is not a palindrome"
    }`);
  }
});

// const result = isPalindrome(inputValue) ? ' is a palindrome' : ' is not a palindrome';
//     document.querySelector('#result').innerText = `${inputValue} ${result}`;
