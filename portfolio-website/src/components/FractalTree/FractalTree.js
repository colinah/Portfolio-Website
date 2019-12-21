import React, { Component } from 'react';
import Sketch from 'react-p5';

function Branch (begin,end,p5) {
    this.begin = begin;
    this.end = end;
    this.displayed = false;
    this.Vector = [];

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
        // p5.resizeCanvas(width,height)
        p5.stroke(255);
        p5.strokeWeight(2);
        p5.line(this.begin.x, this.begin.y,this.end.x,this.end.y);
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
    p5.frameRate(2)
}
 
draw = (p5) => {
    for(let i = 0; i < this.tree.length;i++){
        this.tree[i].show(p5,this.state.width,this.state.height)
      }
      if(this.tree.length < 20){
        this.addBranchesHandler()
      }
      if(this.props.width !==this.state.width || this.props.height !== this.state.height){
          this.setState({width:this.props.width,needsUpdate:true, height:this.props.height})
          this.resizeCanvasHandler(p5);
      }
}


render() {
    return (
            <Sketch setup={this.setup} draw={this.draw} mousePressed={this.addBranchesHandler}/>
    )
  }
}

export default FractalTree