// Detecting if the user is on a mobile device with dialer support
function handleDialer() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent); // Checks if the device is mobile
  
    if (isMobile) {
      // If it is mobile, the dialer should work
      window.location.href = 'tel:+263774443089'; // Dial the number
    } else {
      // If it is not a mobile device, copy the phone number to the clipboard
      const phoneNumber = "+263774443089";
      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          alert("No dialer detected. The phone number has been copied to your clipboard. Paste it wherever you want!");
        })
        .catch(err => {
          alert("Sorry, there was an issue copying the phone number.");
        });
    }
  }
  