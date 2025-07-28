const form = document.getElementById('careerForm');
const resultBox = document.getElementById('result');
const careerOutput = document.getElementById('career');
const skillsList = document.getElementById('skillsList');
const learningPath = document.getElementById('learningPath');
const resumeTip = document.getElementById('resumeTip');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const interest = document.getElementById('interest').value;
  const skillsInput = document.getElementById('skills').value.toLowerCase();
  const skills = skillsInput.split(',').map(skill => skill.trim());

  // 🤖 --- AI-Like Logic Simulation Starts ---
  let suggestion = '';
  let nextSkills = [];
  let roadmap = [];
  let tip = '';

  if (interest === 'design') {
    suggestion = 'Front-End Developer or UI/UX Designer';
    nextSkills = ['Figma', 'JavaScript', 'React', 'Accessibility Standards'];
    roadmap = ['HTML/CSS basics', 'JavaScript', 'Responsive Design', 'Figma', 'React'];
    tip = 'Mention responsive design and user experience in your resume summary.';
  } else if (interest === 'analytics') {
    suggestion = 'Data Analyst';
    nextSkills = ['Excel', 'SQL', 'Python', 'Data Visualization'];
    roadmap = ['Excel basics', 'SQL queries', 'Python Pandas', 'Power BI/Tableau'];
    tip = 'Use metrics and quantifiable impact in your resume achievements.';
  } else if (interest === 'problem-solving') {
    suggestion = 'Software Engineer or Full Stack Developer';
    nextSkills = ['Git', 'JavaScript Frameworks', 'Data Structures'];
    roadmap = ['HTML/CSS/JS', 'Git & GitHub', 'React or Node.js', 'DSA Practice'];
    tip = 'Highlight problem-solving projects and teamwork in resume.';
  } else if (interest === 'writing') {
    suggestion = 'Content Writer or Technical Writer';
    nextSkills = ['SEO', 'Markdown', 'CMS tools'];
    roadmap = ['Grammar tools', 'Technical Writing Basics', 'Build a writing portfolio'];
    tip = 'Keep your resume clear and impactful – strong verbs and clean layout.';
  }
  // 🤖 --- AI-Like Logic Simulation Ends ---

  // Output rendering
  careerOutput.textContent = suggestion;

  skillsList.innerHTML = '';
  nextSkills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  learningPath.innerHTML = '';
  roadmap.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    learningPath.appendChild(li);
  });

  resumeTip.textContent = tip;
  resultBox.classList.remove('hidden');
});
