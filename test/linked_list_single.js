var assert = require('assert'),
    BST    = require('../bst.js');

describe("BST", function(){

  describe("#add", function(){
    it("can add a node to a tree", function(){
      var tree = new BST();

      tree.add(1);
      tree.add(3);
      tree.add(4);

      assert.deepEqual(tree.to_array(), [1,3,4]);
    });

    it("can be chained", function(){
      var tree = new BST(); 

      tree.add(1).add(2);

      assert.deepEqual(tree.to_array(), [1,2]);
    });

    it("can add an array of values", function(){
      var tree = new BST(); 

      tree.add([1,2,3]);

      assert.deepEqual(tree.to_array(), [1,2,3]);
    });
  });

  describe('#to_array', function(){
    it('can operate on an empty tree', function(){
      var tree = new BST();

      assert.deepEqual(tree.to_array(), []);
    });
  });

  describe("#contains", function(){
    it('can find a value', function(){
      var tree = new BST();

      tree.add(1).add(2).add(3);

      assert.equal(tree.contains(2), true);
    });


    it('returns false if the value is not in the tree', function(){
      var tree = new BST();
      
      tree.add(3).add(1).add(2).add(4);

      assert.equal(tree.contains(5), false);
    });


    it('returns false if searching on an empty tree', function(){
      var tree = new BST();

      assert.equal(tree.contains(10), false);
    });
  });

  describe("#length", function(){
    it('returns the number of nodes in the tree', function(){
      var tree = new BST(); 

      tree.add(1);
      tree.add(4);

      assert.equal(tree.length(), 2);
    });

    it('returns 0 on an empty tree', function(){
      var tree = new BST();

      assert.equal(tree.length(), 0);
    });
  });

  describe("#remove", function(){
    it('can remove a node with no children', function(){
      var tree = new BST();
      tree.add(4).add(1).add(2);
      tree.remove(2);

      assert.deepEqual(tree.to_array(), [1,4]);
    }); 

    it('can remove a node with one child', function(){
      var tree = new BST();

      tree.add(4).add(1).add(2);
      tree.remove(1);

      assert.deepEqual(tree.to_array(), [2, 4]);
    });

    it('can remove a node with two children', function(){
      var tree = new BST();

      tree.add(4).add(2).add(3).add(1);
      tree.remove(2);

      assert.deepEqual(tree.to_array(), [1,3,4]);
    });

    it('can remove a root node with no children', function(){
      var tree = new BST();

      tree.add(1);
      tree.remove(1);

      assert.deepEqual(tree.to_array(), []);
    });


    it('can remova a root node with one child', function(){
      var tree = new BST();

      tree.add(1).add(2);
      tree.remove(1);

      assert.deepEqual(tree.to_array(), [2]);
    });


    it('can remove a root node with two children', function(){
      var tree = new BST();

      tree.add(2).add(1).add(3);
      tree.remove(2);

      assert.deepEqual(tree.to_array(), [1,3]);
    });
  });
});

