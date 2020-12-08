    const fetchPbpower = () => {
      fetch('/pbpower')
        .then(results => {
        return results.text()
      })
      .then(text => {
        /*
        Get the 'p' element as a variable, and set its inner 
        HTML to the response we received from the server
        */
        const pbpowerDisplay = 
          document.getElementById('pbpower-display')
          pbpowerDisplay.innerHTML = text
      })
    }

    /* Call sensor reading functions at regular intervals
    */
    setInterval(() => {
      fetchPbpower()
    }, 2000)
