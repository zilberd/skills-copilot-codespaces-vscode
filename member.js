function skillsMember() {
  this.name = 'skillsMember';
  this.id = 1;
  this.skills = [];
  this.addSkill = function(skill) {
    this.skills.push(skill);
  };
  this.getSkills = function() {
    return this.skills;
  };
  this.removeSkill = function(skill) {
    var index = this.skills.indexOf(skill);
    if (index > -1) {
      this.skills.splice(index, 1);
    }
  };
}