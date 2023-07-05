const skills = [
    { id: 4, skill: 'Ice skating', done: true },
    { id: 3, skill: 'Pottery', done: true },
    { id: 2, skill: 'Rain dance', done: true },
    { id: 1, skill: 'Quantum Physics', done: false }
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    skill.skill = updatedSkill.skill;
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
	
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }