let personalParagraph = {
  title: 'Dominik Berger',
  subtitle: '{{age}} / software developer',
  texts: [
    {
      contentHtml:
        '<p>Hi, my name is Dominik Berger. I am a fullstack software developer from Lucerne switzerland. I am passionate about digitalisation and how technology simplifies everyday tasks.</p>',
    },
    {
      contentHtml:
        '<p>In application development I focus on user experience and simplicity in design as well as maintainability in code. In frontend I work with javascript frameworks like VueJS and ReactJS. In backend I create clean, readable and reusable code in Asp .Net Core using C#.</p>',
    },
    {
      contentHtml:
        'I am always happy to work on new projects as well as to consult development of new ideas. Interested? <a href="mailto:doemu@outlook.com">Contact</a> me.',
    },
  ],
}

function replaceAgeString() {
  let subtitle = personalParagraph.subtitle.toString()
  if (subtitle !== undefined && subtitle.includes('{{age}}')) {
    personalParagraph.subtitle = personalParagraph.subtitle.replace('{{age}}', getAge().toString())
  }
  return personalParagraph
}

function getAge() {
  const birthday = '2000.09.12'
  var today = new Date()
  var birthDate = new Date(birthday)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

export default replaceAgeString()
