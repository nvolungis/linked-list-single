"use strict";

(function(){

  function BST(){
    this.root = null;
  }

  BST.prototype = {
    constructor: BST,

    add: function(value){
      if(value instanceof Array){
        value.forEach(function(val){
          this.add(val); 
        },this);

        return this;
      }

      var current = null,
          node = {
            value: value,
            left: null,
            right: null
          };

      if(!this.root){
        this.root = node;
      } else {
        current = this.root;

        while(true){
          if(value < current.value){
            if(current.left == null){
              current.left = node;
              break;
            }else {
              current = current.left;
            }
          }else if(value > current.value){
            if(current.right == null){
              current.right = node;
              break;
            }else {
              current = current.right;
            }
          }else {
            break; 
          }
        }       
      }

      return this;
    },

    traverse: function(callback){
      function in_order(node){
        if( node.left){
          in_order(node.left); 
        } 

        callback(node.value);

        if(node.right){
          in_order(node.right);
        }
      } 

      if(!!this.root) in_order(this.root);
    },

    to_array: function(){
      var arr = [];

      this.traverse(function(val){
        arr.push(val);
      });

      return arr;
    },

    contains: function(needle){
      var found = false;

      this.traverse(function(value){
        if(value == needle) {
          found = true; 
        } 
      });

      return found;
    },

    length: function(){
      var len = 0;

      this.traverse(function(){
        len += 1; 
      });

      return len;
    },

    remove: function(value){
      var found   = false,
          parent  = null,
          current = this.root,
          child_count,
          replace_right = true,
          replacement = {},
          replacement_parent = {};

       //find the node
       while(!found && current){
         if( value < current.value){
           parent = current;
           current = current.left;
         }else if(value > current.value){
           parent = current;
           current = current.right;
         }else {
           found = true;
         }
       }

       if(!found) return;

        child_count = (!!current.left ? 1:0) + (!!current.right ? 1:0);

        if(current === this.root){
          switch(child_count){
          case 0:
            this.root = null;
            break;

          case 1:
            this.root = !!current.left ? current.left : current.right;
            break;
  
          case 2:
            replace_right = true;
            replacement = current.right;
            replacement_parent = current

            while(!!replacement.left){
              replace_right = false;
              replacement_parent = replacement;
              replacement = replacement.left;
            }

            //remove the smallest value from it's parent
            if(replace_right){
              replacement_parent.right = null; 
            }else{
              replacement_parent.left = null; 
            }

            //set the value of the node to replace to the smallest value from it's subtree
            current.value = replacement.value;

            break;
          }
        }else{
          switch(child_count){
          case 0:
            if(current.value < parent.value){ //null out left pointer;
              parent.left = null; 
            }else{
              parent.right = null;  
            }
            break;

          case 1:
            if(current.value < parent.value){
              parent.left = !!current.left ? current.left : current.right;
            }else{
              parent.right = !!current.left ? current.left : current.right;
            } 
            break;

          case 2:

            //find the smallest value in the right subtree of the node to remove
            var replace_right = true;
            replacement = current.right;
            replacement_parent = current

            while(!!replacement.left){
              replace_right = false;
              replacement_parent = replacement;
              replacement = replacement.left;
            }

            //remove the smallest value from it's parent
            if(replace_right){
              replacement_parent.right = null; 
            }else{
              replacement_parent.left = null; 
            }

            //set the value of the node to replace to the smallest value from it's subtree
            current.value = replacement.value;

            break;
        }
      }
    }
  };

  module.exports = BST; 

}());
