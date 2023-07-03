const skills = [
    { id: 10, skill: 'Ice skating', learned: true },
    { id: 20, skill: 'Pottery', learned: true },
    { id: 30, skill: 'Leadership', learned: false },
    { id: 40, skill: 'Organization', learned: true }
  
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.useful = false;
    skills.push(skill);
  }
  
  function getOne() {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }