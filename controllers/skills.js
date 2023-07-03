const { text } = require('express');
let skills = require('../models/skill'); 

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res){
skills.deleteOne(req.params.id);
res.redirect('/skills');

}
function create(req,res){
// console.log(req.body);
skills.create(req.body);
  res.redirect('/skills');
}

function newSkill(req,res){
   res.render('skills/new',{
    title: 'New Skill'
   });
}

function index(req, res) {
    res.render('skills/index',{
      skills: skills.getAll(),
      title: 'All skills' 
    });
}
function show(req, res) {
  res.render('skills/show', {
      skill: skills.getOne(req.params.id),
      title: 'Skills Details'
  });
}