var assert = require('assert'),
    SLL    = require('../linked_list_single.js');

describe("Singly Linked List", function(){

  describe("#add_at_beginning", function(){
    it("adds a node to the beginning of the list", function(){
      var list = new SLL();

      list.add_at_beginning(1);
      assert.deepEqual(list.to_array(), [1]);
      list.add_at_beginning(2);
      assert.deepEqual(list.to_array(), [2,1]);
    });
  });

  describe("#add_at_end", function(){
    it("adds a node to the end of the list", function(){
      var list = new SLL();

      list.add_at_beginning(1);
      list.add_at_end(3);

      assert.deepEqual(list.to_array(), [1,3]);
    });

    it("can add a node to an empty list", function(){
      var list = new SLL();

      list.add_at_end(3);

      assert.deepEqual(list.to_array(), [3]);
    });
  });

  // describe('#add_after', function(){
  //   var list = new SLL();
  //
  //   list.add_at_beginning(1);
  //   list.add_at_beginning(2);
  //   list.add_at_beginning(3);
  //
  //   list.add_after(4, 2);
  // });
  //

  describe("#find", function(){
    it("can find a node in the list", function(){
      var list = new SLL();

      list.add_at_beginning(2);
      list.add_at_beginning(4);

      assert.equal(list.find(4).value, 4);
    });

    it("returns a null node if not found", function(){
      var list = new SLL();

      assert.equal(list.find(2).value, null); 
    });

    describe("#add after", function(){
      it("inserts the new node in the proper place", function(){
        var list = new SLL(); 

        list.add_at_beginning(1);
        list.add_at_end(2);
        list.add_at_end(3);

        list.add_after(2, 4);

        assert.deepEqual(list.to_array(), [1,2,4,3]);
      });

      it("doesn't add anything if the node isn't found", function(){
        var list = new SLL(); 

        list.add_at_beginning(1);
        list.add_at_end(2);
        list.add_at_end(3);

        list.add_after(4, 4);

        assert.deepEqual(list.to_array(), [1,2,3]);
      });
    });


    describe("find_before", function(){
      it("returns the node before the provided value", function(){
        var list = new SLL();

        list.add_at_end(1);
        list.add_at_end(2);
        list.add_at_end(3);

        assert.equal(list.find_before(2).value, 1);
      });
    });


    describe("#remove", function(){
      it("removes the value is it is found", function(){
        var list = new SLL();

        list.add_at_end(1);
        list.add_at_end(2);
        list.add_at_end(3);

        list.remove(2);

        assert.deepEqual(list.to_array(), [1,3]);
      });
    });

    describe("#sort", function(){
      it("returns a new linked list that is sorted", function(){
        var list = new SLL(),
            new_list;

        list.add_at_end(3);
        list.add_at_end(1);
        list.add_at_end(5);
        list.add_at_end(2);
        list.add_at_end(3);

        new_list = list.sort();

        assert.deepEqual(new_list.to_array(), [1,2,3,3,5]);
      });
    });

    describe("#is_sorted", function(){
      it("returns true if the list is sorted", function(){
        var list = new SLL();

        list.add_at_end(3);
        list.add_at_end(1);
        list.add_at_end(5);
        list.add_at_end(2);
        list.add_at_end(3);

        assert.equal(list.is_sorted(), false);
        new_list = list.sort();
        assert.equal(new_list.is_sorted(), true);
      });
    });
  });
});

