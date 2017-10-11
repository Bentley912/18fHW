describe('Add Member', function () {
    beforeAll(function() {
        button = document.createElement('button');
        button.setAttribute('class','add');
    });
    it('Create Member', function () {
      expect(addMember(14,'child', 'yes')).toEqual(Object);
    });
  });