// Content from gr8school.in, cut down for the mockup.
window.GR8 = {
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // The fixed timetable shown on the GR8 site: six 40-minute periods.
  timetable: [
    ['Maths', 'English', 'Science', 'Hindi', 'Social St.', 'Maths'],
    ['English', 'Maths', 'Hindi', 'Science', 'Comp. Sci.', 'Social St.'],
    ['Science', 'Social St.', 'Maths', 'English', 'Hindi', 'PE'],
    ['Maths', 'Hindi', 'English', 'Science', 'Maths', 'Social St.'],
    ['English', 'Science', 'Comp. Sci.', 'Maths', 'Art', 'English'],
  ],
  // The GR8 week from the site, in its order. [kind, cells]; kinds 1 personalised, 2 mentors, 3 projects, 4 co-curricular.
  // Block widths are illustrative, as the site says.
  week: [
    [[1, 2], [2, 1], [4, 1], [3, 2]],
    [[1, 3], [3, 2], [4, 1]],
    [[2, 1], [1, 2], [4, 1], [3, 2]],
    [[1, 3], [2, 1], [4, 2]],
    [[3, 2], [4, 1], [1, 2], [2, 1]],
  ],
  kinds: { 1: 'Personalised', 2: 'Mentors', 3: 'Projects', 4: 'Sport & arts' },
  kindsShort: { 1: 'Learn', 2: 'Mentor', 3: 'Project', 4: 'Arts' },
  skills: [
    ['Oracy & presentation', 'Communication', 'Present a prototype and explain why you changed it after feedback.'],
    ['AI literacy', 'Critical thinking', 'Compare an AI explanation with your observations and explain what you would verify.'],
    ['Data literacy', 'Systems thinking & sustainability', 'Compare water use and plant growth before deciding what to improve.'],
    ['Problem solving & design thinking', 'Creativity', 'Try two designs for a small structure and explain which works better.'],
    ['Digital fluency & wellbeing', 'Collaboration', 'Create a shared project record and agree how your group will use its time and tools.'],
    ['Research & inquiry', 'Empathy, ethics & global citizenship', 'Listen to a community need before deciding what a useful response could be.'],
    ['Financial literacy', 'Enterprise & initiative', 'Plan a small project budget and explain the trade-offs behind your choices.'],
    ['Practical life skills', 'Resilience & self-management', 'Prepare for a practical task, review what happened and plan better next time.'],
  ],
  stages: [
    ['Ask & investigate', 'Find out what plants need and decide what you want to measure.', 'p1', 'Imagined learners investigating plant growth with a mentor'],
    ['Use your skills', 'Compare water use, research growing conditions and plan who will care for the plants.', 'p2', 'Imagined learners using mathematics to compare results'],
    ['Make & test', 'Try a small growing experiment and record what changes.', 'p3', 'Imagined learners building and testing a growing system'],
    ['Reflect & improve', 'Explain the results, listen to feedback and decide what to try next.', 'p5', 'Imagined learners reflecting on results together'],
  ],
  // A day at GR8, for the hero: [label, when, title, line, chips, image, alt, link, link text, height 0-1].
  day: [
    ['Plan', 'Start of the day', 'Plan with a mentor', 'Every day begins with a person who knows your child, setting what to work on.', ['Mentor', 'Goals'], 'mentor', 'Imagined mentor guiding a small group at a round table', '#day', 'See the rhythm', 0.12],
    ['Academic Core', 'Morning', 'Three protected hours', 'Practice that responds to what your child understands.', ['English', 'Maths', 'Science', 'Humanities'], 'personal', 'Imagined learners at individual workstations', '#day', 'See the morning', 0.72],
    ['Labs', 'Afternoon', 'Build, test, measure', 'Hands-on labs where subjects meet a real question.', ['Mechatronics', 'Hydroponics', '3D printing', 'Radio'], 'hydro', 'Imagined learners testing a hydroponic system with a mentor', '#project', 'Follow a project', 0.96],
    ['Industry & arts', 'Afternoon', 'Meet people who do the work', 'Industry interaction, then performing arts and sport.', ['Industry experts', 'Performing arts', 'Sport'], 'energy', 'Imagined learners testing a small solar circuit with an expert', '#day', 'See the afternoon', 0.7],
    ['Reflect', 'End of the day', 'What worked, what\'s next', 'Progress recorded in the Skills Passport.', ['Reflect', 'Skills Passport'], 'wellbeing', 'Imagined learners and a mentor talking together', '#skills', 'Explore the skills', 0.12],
  ],
};
