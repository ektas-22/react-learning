import React from "react"

export default function WindowTracker() {
      React.useEffect(() => {
        window.addEventListener("resize", function() {
            console.log("Resized!")
        })
    }, [])
    
    return (
        <h1>Window width: {window.innerWidth}</h1>
    )
}
