"use strict";

(function(){

  function Cell(value){
    this.value = value;
    this.next = null;

    this.clone = function(){
      var clone = new Cell(this.value);
      clone.next = this.next;

      return clone;
    }
  }

  function LinkedList(){
     this._sentinal = new Cell();
  }

  LinkedList.prototype = {
    constructor: LinkedList,

    //insert the cell directly after the sentinal
    //O(1);
    add_at_beginning: function(value){
      var new_cell = new Cell(value); 

      new_cell.next = this._sentinal.next;
      this._sentinal.next = new_cell;
    },

    //loop through the list and add the cell at the very end
    //O(n)
    add_at_end: function(value){
      var new_cell = new Cell(value),
          cur_cell = this._sentinal;

      while(cur_cell.next != null){
        cur_cell = cur_cell.next; 
      }

      cur_cell.next = new_cell;
    },

    //insert the value v after the node n
    //O(n)
    add_after: function(n, v){
      var cell = this.find(n),
          new_cell = new Cell(v);

      new_cell.next = cell.next;
      cell.next = new_cell; 
    },

    //return the node with the provided value or a null node
    //O(n)
    find: function(v){
      var cur_node = this._sentinal.next; 

      while(cur_node){
        if(cur_node.value == v) return cur_node;
        cur_node = cur_node.next;
      }

      return new Cell();
    },
    
    //visit every node in the list and call the callback for it
    //O(n);
    traverse: function(cb, ctx){
      var cur_cell = this._sentinal.next;

      while(cur_cell != null){
        cb.call(ctx, cur_cell.value); 
        cur_cell = cur_cell.next;
      }
    },

    //return an array with all the values in the list
    //O(n)
    to_array: function(){
      var arr = [];

      this.traverse(function(val){
        arr.push(val);
      });

      return arr;
    }

  };
  

  module.exports = LinkedList; 

}());
