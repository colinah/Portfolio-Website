import React, { Component } from 'react';
import Sketch from 'react-p5';

function Branch (begin,end,p5) {
    this.begin = begin;
    this.end = end;
    this.displayed = false;
    this.Vector = [];
    // this.stroke = ['#00909e','#17b1be','#39c1ce','#62cbd4','#9cf7ff','#62cbd4','#39c1ce','#17b1be'];
    this.stroke = ['#00909e','#0699a7','#0aa0ad','#0ea3b1','#12a7b4','#1aacb9','#1eb0bd','#23b2be','#29bac7','#2fbdca','#37c4d1','#3fcbd8','#46cfdb','#4fd3df','#5adae6','#63dee9','#6fe8f3','#78ecf7',"#78ecf7", "#6fe8f3", "#63dee9", "#5adae6", "#4fd3df", "#46cfdb", "#3fcbd8", "#37c4d1", "#2fbdca", "#29bac7", "#23b2be", "#1eb0bd", "#1aacb9", "#12a7b4", "#0ea3b1", "#0aa0ad", "#0699a7", "#00909e"]
    this.strokeNum = 0;

    this.Vector.sub = function sub(v1, v2, target) {
        if (!target) {
          target = v1.copy();
        } else {
          target.set(v1);
        }
        target.sub(v2);
        return target;
      };

      this.Vector.add = function add(v1, v2, target) {
        if (!target) {
          target = v1.copy();
        } else {
          target.set(v1);
        }
        target.add(v2);
        return target;
      };
      this.Vector.mult = function mult(v, n, target) {
        if (!target) {
          target = v.copy();
        } else {
          target.set(v);
        }
        target.mult(n);
        return target;
      };



    this.show = (p5,width,height) => {
      if(this.strokeNum > this.stroke.length-1){
        this.strokeNum = 0
      }
        p5.stroke(this.stroke[this.strokeNum]);
        p5.strokeWeight(2);
        p5.line(this.begin.x, this.begin.y,this.end.x,this.end.y);
        this.strokeNum += 1
    }

    this.fork = (angle, scl , p5) => {
        let vec = this.Vector.sub(this.end, this.begin);
        vec.rotate(angle)
        vec.mult(scl)
        let newEnd = this.Vector.add(this.end,vec);
        let newBranch = new Branch(this.end,newEnd)
        this.finished = true;
        return newBranch
    }
}

class FractalTree extends Component {
    state = {
        width: null,
        height: null,
        needsUpdate:  false
    }
    tree = [];

    resizeCanvasHandler = (p5) => {
            let treeLen = this.tree.length
            this.tree = [];
            p5.resizeCanvas(this.props.width,this.props.height)
            let a = p5.createVector(this.props.startLocation[0].x,this.props.startLocation[0].y);
            let b = p5.createVector(this.props.startLocation[1].x,this.props.startLocation[1].y);
            this.tree[0] = new Branch(a,b,p5)
            for(let i = 0; i < treeLen; i++){
                if(this.tree.length < 13000){
                this.tree.push(this.tree[i].fork(this.props.angle,this.props.scl));
                this.tree.push(this.tree[i].fork(-this.props.angle,this.props.scl))
                }
            }
    }

addBranchesHandler = () => {
    if(this.tree.length < 13000){
        for(let i = this.tree.length-1; i >= 0; i--){
            if(!this.tree[i].finished){
              this.tree.push(this.tree[i].fork(this.props.angle,this.props.scl));
              this.tree.push(this.tree[i].fork(-this.props.angle,this.props.scl))
            }
        }
    }
}

setup = (p5, parent) => {
    p5.createCanvas(this.props.width,this.props.height).parent(parent);
    let a = p5.createVector(this.props.startLocation[0].x,this.props.startLocation[0].y);
    let b = p5.createVector(this.props.startLocation[1].x,this.props.startLocation[1].y);
    this.tree[0] = new Branch(a,b,p5)
    p5.frameRate(3)
}


 
draw = (p5) => {
    for(let i = 0; i < this.tree.length;i++){
        this.tree[i].show(p5,this.state.width,this.state.height)
      }
      if(this.tree.length < 13000){
        this.addBranchesHandler()
      }
      if(this.props.width !==this.state.width || this.props.height !== this.state.height){
          this.setState({width:this.props.width,needsUpdate:true, height:this.props.height})
          this.resizeCanvasHandler(p5);
      }
}


render() {
    return (
            <Sketch setup={this.setup} draw={this.draw} />
    )
  }
}

export default FractalTree