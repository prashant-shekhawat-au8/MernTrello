import React, { Component } from 'react'
import axios from 'axios';
import { Alert,Button,Modal,ModalHeader,ModalFooter,ModalBody } from 'reactstrap';
import  { category} from './redux/action/category.js';
import  { task} from './redux/action/task.js';
import {connect} from "react-redux"
import {Form, FormGroup, Label, Input } from 'reactstrap';

class Weather extends Component {
    state = {
        isOpen: false,
        
        category_id:null,
        updated_name:null,

        isOpen_c:false,
        c_name:null,

        category_task:null,
        isOpen_task:false,
        t_status:null,
        t_title:null,
        t_description:null,

        isOpen_itask:false,
        it_category:null,
        it_status:null,
        it_title:null,
        it_description:null,

        dd_category:null,
        isOpenMove:false,

        dd_category3:null,
        isOpen_statusU:false,

        search:null
        


        
        
    }
    componentDidMount=()=>{
        this.props.category();
        this.props.task();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.categories!== this.props.categories){
            //this.props.category()
        }
        if(prevProps.tasks!==this.props.tasks){
            //this.props.task();
        }
      }

    handleUpdate = (event) => {
        
        fetch(`https://trelllo-mern.herokuapp.com/category/${this.state.category_id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name:this.state.updated_name})
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            console.log(data)
        })
    }

    handleMoveUpdate = (event) => {
        
        fetch(`https://trelllo-mern.herokuapp.com/task/move/${this.state.category_id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({category:this.state.dd_category})
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            console.log(data)
        })
    }
    handleStatusUpdate = (event) => {
        
        fetch(`https://trelllo-mern.herokuapp.com/task/Cs/${this.state.category_id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({status:this.state.dd_category3})
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            console.log(data)
        })
    }

    handleiUpdate = (event) => {
        
        fetch(`https://trelllo-mern.herokuapp.com/task/${this.state.category_id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({title:this.state.it_title,description:this.state.it_description,status:this.state.it_description,category:this.state.it_category})
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            console.log(data)
        })
    }

    handleAddCategory = (event) => {
        
        fetch(`https://trelllo-mern.herokuapp.com/category`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name:this.state.c_name})
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            console.log(data)
        })
    }

    handleAddTask = (event) => {
        
        fetch(`https://trelllo-mern.herokuapp.com/task`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({title:this.state.t_title,
                                description:this.state.t_description,
                                status:this.state.t_status,
                                category:this.state.category_task})
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            console.log(data)
        })
    }

    handleDelete = (event) => {
        fetch(`https://trelllo-mern.herokuapp.com/category/${event.target.value}`,{
            method:'DELETE',
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            console.log(data)
        })
    }
    handleiDelete = (event) => {
        fetch(`/task/${event.target.value}`,{
            method:'DELETE',
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            console.log(data)
        })
    }

    handleName = (event) =>{
        this.setState({updated_name:event.target.value})
    }
    handleAddCategoryName = (event) =>{
        this.setState({c_name:event.target.value})
    }
    handleAddTaskTitle = (event) =>{
        this.setState({t_title:event.target.value})
    }
    handleAddTaskDescription = (event) =>{
        this.setState({t_description:event.target.value})
    }
    handleAddTaskStatus = (event) =>{
        this.setState({t_status:event.target.value})
    }
    handleAddiTaskStatus = (event) =>{
        this.setState({it_status:event.target.value})
    }
    handleAddiTaskDescription = (event) =>{
        this.setState({it_description:event.target.value})
    }
    handleAddiTaskTitle = (event) =>{
        this.setState({it_title:event.target.value})
    }
    handleAddiTaskcategory=(event) =>
    {
        this.setState({it_category:event.target.value})
    }
    handleddCategory1=(event) =>
    {
        this.setState({category_id:event.target.value,isOpenMove:true})
    }
    handleddCategory2=(event) =>
    {
        this.setState({dd_category:event.target.value})
    }
    handleddCategory3=(event) =>
    {
        this.setState({category_id:event.target.value,isOpen_statusU:true})
    }
    handleddCategory4=(event) =>
    {
        this.setState({dd_category3:event.target.value})
    }
    handleOnchangeSerch=(event)=>{
        this.setState({search:event.target.value})
    }
    handleChangeCategory=(event)=>{
        this.props.category(this.state.search)
    }

    render() {
        return (
            <div>
            <Button color="primary" onClick={()=>this.setState({isOpen_c:true})}>ADD Category</Button>
            <>
            
                    <Label for="exampleEmail" hidden>Search</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Search Your Category" value={this.state.search} onChange={this.handleOnchangeSerch}/>
              
                <Button  onClick={this.handleChangeCategory} >Submit</Button>
               
            </>

            {this.props.categories.map(map=>
                <>
                    <div style={{border:"5px solid blue",padding:"5px",margin:"15px"}}>
            <Alert color="success">
                <h4 className="alert-heading">Category : {map.name}</h4>
                {this.props.tasks.map(map2=>
                (map.name===map2.category?

                <Alert color="success" style={{border:"1px solid red",padding:"5px",marin:"5px"}}>
                <h4 className="alert-heading">Title : {map2.title}</h4>
                <p>
                <h5>Description : {map2.description}</h5>
                <h6>Status : {map2.status}</h6>
                </p>
                <hr />
                <div>
                     <Button color="danger" value={map2._id} name={map2.category} onClick={(event) => { 
                    this.setState({ 
                    isOpen_itask: true,
                    category_id:event.target.value,
                    it_category:event.target.name
                    }) }}>UPDATE</Button>

                <Button color="success"  value={map2._id} onClick={this.handleiDelete}>DELETE</Button>
                <Button color="success"  value={map2._id} onClick={this.handleddCategory1}>Move</Button>
                <Button color="warning"  value={map2._id} onClick={this.handleddCategory3}>Status Update</Button>
                
                
                </div>
            </Alert>
                :"")
                
                )}
                <>
                <Button color="danger" value={map._name} onClick={(event) => { 
                    this.setState({ 
                    isOpen: true,
                    category_id:event.target.value
                    }) }}>UPDATE</Button>

                <Button color="success"  value={map._id} onClick={this.handleDelete}>DELETE</Button>

                <Button color="warning" value={map.name}  onClick={(event) => { 
                    this.setState({ 
                    isOpen_task: true,
                    category_task:event.target.value
                    }) }}>ADD TASK</Button>
                </>
            </Alert>
            </div>
                </>
            )}
            {/* modals */}
            <Modal isOpen={this.state.isOpen} toggle="true" >
                    <ModalHeader >ADD Fields</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="panel panel-success">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="control-label">Name</label>
                                        <input type="text" name="name"
                                            value={this.state.updated_name}
                                            onChange={this.handleName}
                                            className="form-control" />

                                    </div>
                                


                                    <button className="btn btn-success" onClick={
                                    this.handleUpdate}>Update</button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => { this.setState({ isOpen: false }) }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            <Modal isOpen={this.state.isOpen_c} toggle="true" >
                    <ModalHeader >ADD Fields</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="panel panel-success">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="control-label">Name of Category</label>
                                        <input type="text" name="name"
                                            value={this.state.c_name}
                                            onChange={this.handleAddCategoryName}
                                            className="form-control" />

                                    </div>
                                
                                    <button className="btn btn-success" onClick={
                                    this.handleAddCategory}>Create</button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => { this.setState({ isOpen_c: false }) }}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            <Modal isOpen={this.state.isOpen_task} toggle="true" >
                    <ModalHeader >ADD Fields</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="panel panel-success">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="control-label">Title of Task</label>
                                        <input type="text" name="name"
                                            value={this.state.t_title}
                                            onChange={this.handleAddTaskTitle}
                                            className="form-control" />

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Description of Task</label>
                                        <input type="text" name="name"
                                            value={this.state.t_description}
                                            onChange={this.handleAddTaskDescription}
                                            className="form-control" />

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Status of Task</label>
                                        <input type="text" name="name"
                                            value={this.state.t_status}
                                            onChange={this.handleAddTaskStatus}
                                            className="form-control" />

                                    </div>
                                
                                    <button className="btn btn-success" onClick={
                                    this.handleAddTask}>ADD</button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => { this.setState({ isOpen_task: false }) }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            <Modal isOpen={this.state.isOpen_itask} toggle="true" >
                    <ModalHeader >ADD Fields</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="panel panel-success">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="control-label">Title of Task</label>
                                        <input type="text" name="name"
                                            value={this.state.it_title}
                                            onChange={this.handleAddiTaskTitle}
                                            className="form-control" />

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Description of Task</label>
                                        <input type="text" name="name"
                                            value={this.state.it_description}
                                            onChange={this.handleAddiTaskDescription}
                                            className="form-control" />

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Status of Task</label>
                                        <input type="text" name="name"
                                            value={this.state.it_status}
                                            onChange={this.handleAddiTaskStatus}
                                            className="form-control" />

                                    </div>
                                
                                    <button className="btn btn-success" onClick={
                                    this.handleiUpdate}>UPDATE</button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => { this.setState({ isOpen_itask: false }) }}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.isOpenMove} toggle="true" >
                    <ModalHeader >ADD Fields</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="panel panel-success">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="control-label">Name of Category You Want To Move</label>
                                        <input type="text" name="name"
                                            value={this.state.dd_category}
                                            onChange={this.handleddCategory2}
                                            className="form-control" />

                                    </div>
                                


                                    <button className="btn btn-success" onClick={
                                    this.handleMoveUpdate}>Move</button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => { this.setState({ isOpenMove: false }) }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.isOpen_statusU} toggle="true" >
                    <ModalHeader >ADD Fields</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="panel panel-success">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="control-label">Change the status here</label>
                                        <input type="text" name="name"
                                            value={this.state.dd_category3}
                                            onChange={this.handleddCategory4}
                                            className="form-control" />

                                    </div>
                                


                                    <button className="btn btn-success" onClick={
                                    this.handleStatusUpdate}>Status Update</button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => { this.setState({ isOpen_statusU: false }) }}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.task.task)
    return {
        categories: state.category.category,
        tasks:state.task.task
        
    }
}


export default connect(mapStateToProps, { category,task})(Weather);
