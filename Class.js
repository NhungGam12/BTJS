let person = {
    firstName: 'Nhung',
    lastName: 'Phạm',
    getFullName: function () {
      return person.firstName + " " + person.lastName;
    }
  }

  person = {
    firstName: 'Ngọc'
  }
  
  console.log(person.getFullName());