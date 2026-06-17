function MainContent() {
    // const firstName= "Josh"
    // const lastName = "Schmoe"

const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours < 21) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }
    return (
        <>
            {/* <h1>React is great!!</h1> */}

            {/* Task 3 - rendering unordered list 2 - 3 items inside */}

            {/* < ul >
                <li>Super popular JS library</li>
                <li>Will help me be even more employable</li>
                <li>React has a pretty cool logo</li>
            </ul > */}

            {/* <h1>Hello {firstName} {lastName}</h1> */}
                
            <h1>{timeOfDay}</h1>
        </>
    )
}

export default MainContent