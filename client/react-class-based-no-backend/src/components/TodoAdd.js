import React from 'react'

class TodoAdd extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: ''
        }

        this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this)
    }

    handleDescriptionUpdate(e) {
        this.setState({
            description: e.target.value
        })
    }

    render() {
        const {
            handleSubmit
        } = this.props;

        return (
            <form className="flex mt-4" onSubmit={(e) => handleSubmit(e, this.state.description)}>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                       placeholder="Add Todo"
                       value={this.state.description}
                       onChange={this.handleDescriptionUpdate}/>
                <input type="submit" className="flex-no-shrink p-2 border-2 rounded text-teal-600 border-teal-600 hover:text-white hover:bg-teal-600" value="Add"/>
            </form>
        )
    }
}

export default TodoAdd