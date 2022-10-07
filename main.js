/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = []

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

notes.push({
    id: 1,
    text: "This is really important stuff.",
    author: "Rebekah Taylor",
    date: "Tuesday, August 18, 2022",
    topics: ["food", "drinks", "snacks"]
})
console.log(notes)

/* 
add at least 3 more notes to your array, but this time you must use the .push method on the array to add them
*/
notes.push({
    id: 2,
    text: "This.",
    author: "Taylor Taylor",
    date: "Monday, August 17, 2022",
    topics: ["fencing", "travel"]
})
notes.push({
    id: 3,
    text: "This is stuff.",
    author: "Sam Taylor",
    date: "Wednesday, August 19, 2022",
    topics: ["cats", "dogs"]
})
notes.push({
    id: 4,
    text: "This stuff.",
    author: "Nick Grandey",
    date: "Thursday, August 20, 2022",
    topics: ["history", "fishing", "books", "cheese", "travel"]
})
console.log(notes)

/*
Iterate the array with a for..of loop and use console.log() to display only the text property of each object - not the full object.
*/
for (note of notes) {
    console.log(note.text)
}

/*
Now that you have listed all of the notes, now you need to list all of the topics that have been used to describe the notes.

You will need to write a for..of loop inside of another one since the topics on each note is an array as well.

Start with console.log("*** All Note Topics ***") and display each topic beneath it.
*/
console.log("*** All Note Topics ***")

for (const note of notes) {
    for (const topic of note.topics) {
        console.log(topic)
    }
}

/*
Add a new section of output where you can see, on average, how many topics the author are applying to each post.
Start with console.log("*** Average Topics Per Note ***") and display the average numbers of topics used on all posts.
*/

console.log("*** Average Topics Per Note ***")

// Need to count up all the topics, so start at 0
let totalTopics = 0

// Iterate all of the notes
for (const note of notes) {
    totalTopics += note.topics.length
}

// Calculate the overall average
const averageTopics = totalTopics / notes.length

// Output the average to the terminal
console.log(averageTopics)

const filteredNotes = []
const criteria = "travel"

//iterate the notes array
//check if the criteria is in the topics array property. You can use the .includes() method

for (note of notes) {
    if (note.topics.includes("travel")) {
        filteredNotes.push(note)
    }
}
console.log(filteredNotes)

console.log("***  Note Articles  ***")

//iterate through notes with for loop
//in curly braces of loop, type console.log()
//within the (), create an interpolated string that is surrounded by HTML <article> tags

/*
!!!!!! OLD CODE:

for (const note of notes) {
    console.log(`<article>${note.text}</article>`)
    }
*/
    
/* Update the code that you wrote in the last section to include each topic, contained in a child <section> element for each note. You will need to use a nested for..of loop again. Also, update the output to be a multi-line string using string templates.
 */

//create empty string variable for the main string
//iterate through notes with for..of loop
//Inside the iteration of all notes, add the open article tag and the note text.
// Then iterate the `topics` array for the current note.
/*Create a string template with an opening and closing
<section> element with the topic text interpolated
between them. Then add the string template to the
variable created at the start with the += operator. (why does section variable need to be created??)*/
//After both for..of loops are done, add the closing </article> tag to the end of the main string with +=

// ***  Note Articles  ***
// <article>
//     Always work on a branch and submit a PR, even if I'm working on my own project.
//     <section>strategy</section>
//     <section>github</section>
// </article>
// <article>
//     Review all my old code before asking for help or looking at hints.
//     <section>strategy</section>
//     <section>help</section>
//     <section>professional</section>
// </article>
// <article>
//     I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.
//     <section>thinking</section>
//     <section>help</section>
// </article>

// !!!!!! NEW CODE:

let allHTML = ""

for (const note of notes) {
    allHTML += `<article>
    ${note.text}\n`
    for (topic of note.topics) {
        allHTML += `<section>${topic}</section>\n`
        
    }
    allHTML += `</article>\n`
} 

console.log(allHTML)

/* let output = ""

for (const coffee of coffees) {
    if (coffee.includes("light")) {
        output += `I'll have the ${coffee} and drink it black`
    }
    else if (coffee.includes("medium")) {
        output += `I'll have the ${coffee} and add cream only`
    }
    else if (coffee.includes("dark")) {
        output += `I'll have the ${coffee} and add cream and sugar`
    }
    output += "\n"
}

console.log(output) */
