import React from 'react'
import ToDoItem from './toDo/ToDoList'
import problemsData from './problems'

class mainContent extends React.Component {

    constructor() {
        super()
        this.state = {
            problems: problemsData,
        }
        this.clickChange = this.clickChange.bind(this)
    }

    clickChange(id) {
        this.setState(prevState => {
            const updatedProblems = prevState.problems.map(problem => {
                if (problem.id === id){
                    problem.checked = !problem.checked
                }
                return problem
            })
            return {
                problems: updatedProblems
            }

      })
    }

    render() {
        const realProblem = this.state.problems.map(problem => <ToDoItem key={problem.id} info={problem} clickChange={this.clickChange}/>)
        return (
            <div className="to-do-list"> 
                {realProblem}
            </div>
        );
    }
}

export default mainContent;